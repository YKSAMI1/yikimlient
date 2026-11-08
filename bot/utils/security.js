const ALLOWED_GUILD_ID = process.env.GUILD_ID;

const userCooldowns = new Map();
const COOLDOWN_MS = Number(process.env.EVENT_COOLDOWN_MS || 5000);
const MAX_COOLDOWN_ENTRIES = 10000;

let operationQueue = 0;
const MAX_CONCURRENT_OPS = Number(process.env.MAX_CONCURRENT_OPS || 5);

function cleanupCooldowns() {
  if (userCooldowns.size <= MAX_COOLDOWN_ENTRIES) return;

  const now = Date.now();
  for (const [userId, timestamp] of userCooldowns) {
    if (now - timestamp > COOLDOWN_MS * 2) {
      userCooldowns.delete(userId);
    }
  }
}

function isUserOnCooldown(userId) {
  if (!userId) return true;

  cleanupCooldowns();
  const now = Date.now();
  const last = userCooldowns.get(userId);

  if (last && now - last < COOLDOWN_MS) {
    return true;
  }

  userCooldowns.set(userId, now);
  return false;
}

function isAllowedGuild(guildId) {
  if (!ALLOWED_GUILD_ID) return false;
  return guildId === ALLOWED_GUILD_ID;
}

function rejectUnauthorizedGuild(interaction) {
  if (!interaction.guildId) {
    return {
      allowed: false,
      message: 'Bu komut yalnızca sunucu içinde kullanılabilir.',
    };
  }

  if (!isAllowedGuild(interaction.guildId)) {
    return {
      allowed: false,
      message: 'Bu bot bu sunucuda kullanılamaz.',
    };
  }

  return { allowed: true };
}

async function withOperationLimit(fn) {
  if (operationQueue >= MAX_CONCURRENT_OPS) {
    return null;
  }

  operationQueue += 1;
  try {
    return await fn();
  } finally {
    operationQueue -= 1;
  }
}

function installProcessGuards(logger) {
  process.on('uncaughtException', (error) => {
    logger.error(`Yakalanmamış hata: ${error.message}`);
  });

  process.on('unhandledRejection', (reason) => {
    const message = reason instanceof Error ? reason.message : String(reason);
    logger.error(`Yakalanmamış red: ${message}`);
  });
}

module.exports = {
  isUserOnCooldown,
  isAllowedGuild,
  rejectUnauthorizedGuild,
  withOperationLimit,
  installProcessGuards,
};

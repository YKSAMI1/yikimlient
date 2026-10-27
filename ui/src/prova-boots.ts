// dev-only boot köprüsü: imperial-prova.html için
import { boot } from "./main";
import { renderHome } from "./pages/home";

void boot().then(() => {
  // gsap ticker'ı rAF'a kilitli: görünen pencere yoksa exitStage tamamlanmaz
  // → prova ortamında doğrudan home'u bas.
  const kok = document.getElementById("content");
  if (kok && !kok.innerHTML) renderHome(kok);
});

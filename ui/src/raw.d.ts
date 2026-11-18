// Vite `?raw` içe aktarmaları: dosya metni string olarak gelir.
declare module "*?raw" {
  const icerik: string;
  export default icerik;
}

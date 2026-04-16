export function useStoreLink() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (isIOS) return "https://apps.apple.com/app/brawl-stars/id1229016807";
  if (isAndroid) return "https://play.google.com/store/apps/details?id=com.supercell.brawlstars";
  return "https://supercell.com/en/games/brawlstars/";
}

export function useStoreName() {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return { name: "App Store", emoji: "🍎" };
  if (/Android/i.test(ua)) return { name: "Google Play", emoji: "▶️" };
  return { name: "Официальный сайт", emoji: "🌐" };
}

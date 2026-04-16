import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Brawl Stars — скачай бесплатно!",
      text: "Играй в Brawl Stars бесплатно! Эпические битвы 3 на 3 прямо на телефоне 🎮",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_) {
        void _;
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-6 py-4 font-bold rounded-2xl transition-all duration-300 hover:scale-105 text-white"
      style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}
    >
      <span className="text-xl">{copied ? "✅" : "🔗"}</span>
      <div className="text-left">
        <div className="text-xs opacity-80 uppercase tracking-wide">{copied ? "Скопировано!" : "Поделиться"}</div>
        <div className="text-sm font-black">{copied ? "Ссылка скопирована" : "С друзьями"}</div>
      </div>
    </button>
  );
}
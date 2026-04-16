import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useStoreLink, useStoreName } from "@/hooks/useStoreLink";
import ShareButton from "@/components/ShareButton";

const floatingEmojis = [
  { emoji: "💥", top: "10%", left: "5%", delay: 0 },
  { emoji: "⭐", top: "20%", left: "90%", delay: 0.5 },
  { emoji: "🔫", top: "70%", left: "8%", delay: 1 },
  { emoji: "🌵", top: "75%", left: "88%", delay: 1.5 },
  { emoji: "🏆", top: "40%", left: "92%", delay: 0.8 },
  { emoji: "💎", top: "55%", left: "4%", delay: 1.2 },
  { emoji: "🎮", top: "15%", left: "50%", delay: 0.3 },
];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const storeLink = useStoreLink();
  const store = useStoreName();

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a0533 0%, #2d0b6b 30%, #4a1090 60%, #ff6b00 100%)" }}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(255,107,0,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(138,43,226,0.4) 0%, transparent 50%)"
        }} />
        {floatingEmojis.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl select-none pointer-events-none"
            style={{ top: item.top, left: item.left }}
            animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
          >
            {item.emoji}
          </motion.div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, rgba(26,5,51,0.8), transparent)" }} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-4"
            style={{ textShadow: "0 0 40px rgba(255,107,0,0.8), 0 4px 20px rgba(0,0,0,0.5)" }}>
            BRAWL STARS
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 mb-10 font-medium">
            Эпические битвы 3 на 3, королевская битва и куча режимов.<br/>
            <span className="text-yellow-400 font-bold">Бесплатно — прямо сейчас!</span>
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={storeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold rounded-2xl transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #ff6b00, #ff9500)", boxShadow: "0 8px 32px rgba(255,107,0,0.5)" }}
          >
            <span className="text-2xl">{store.emoji}</span>
            <div className="text-left">
              <div className="text-xs opacity-80 uppercase tracking-wide">Скачать в</div>
              <div className="text-base font-black">{store.name}</div>
            </div>
          </a>
          <ShareButton />
        </div>
      </div>
    </div>
  );
}
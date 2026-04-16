import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Gaming landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          BRAWL STARS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-10">
          Эпические битвы 3 на 3, королевская битва и куча режимов. Бесплатно — прямо сейчас.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com/app/brawl-stars/id1229016807"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-bold hover:bg-neutral-200 transition-colors duration-300"
          >
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <div className="text-xs opacity-60 uppercase tracking-wide">Скачать в</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.supercell.brawlstars"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-bold hover:bg-neutral-200 transition-colors duration-300"
          >
            <span className="text-2xl">▶️</span>
            <div className="text-left">
              <div className="text-xs opacity-60 uppercase tracking-wide">Скачать в</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
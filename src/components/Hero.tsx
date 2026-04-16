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
        <a
          href="https://supercell.com/en/games/brawlstars/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-neutral-200 transition-colors duration-300"
        >
          Скачать бесплатно
        </a>
      </div>
    </div>
  );
}
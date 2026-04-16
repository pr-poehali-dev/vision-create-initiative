const modes = [
  { emoji: "⚔️", name: "Жаркий матч", desc: "3 на 3, уничтожь команду врага", color: "from-red-500 to-orange-500" },
  { emoji: "💎", name: "Кража кристаллов", desc: "Собери 10 кристаллов и удержи их", color: "from-cyan-500 to-blue-600" },
  { emoji: "🏆", name: "Захват звезды", desc: "Контролируй зону и набирай очки", color: "from-yellow-400 to-orange-500" },
  { emoji: "💣", name: "Взрывная охота", desc: "Выживи в королевской битве", color: "from-purple-500 to-pink-600" },
];

export default function Featured() {
  return (
    <div
      className="min-h-screen px-6 py-20 flex flex-col justify-center"
      style={{ background: "linear-gradient(160deg, #0f0c29, #302b63, #24243e)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <p className="uppercase text-purple-400 text-sm tracking-widest mb-3 text-center">Brawl Stars — от Supercell</p>
        <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 leading-tight">
          Более <span className="text-yellow-400">70 бравлеров</span><br />и куча режимов!
        </h2>
        <p className="text-neutral-400 text-center text-lg mb-14 max-w-xl mx-auto">
          Сражайся с друзьями или против всего мира — совершенно бесплатно.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {modes.map((m, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${m.color} rounded-2xl p-6 flex items-center gap-5 hover:scale-105 transition-transform duration-300`}
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <span className="text-5xl">{m.emoji}</span>
              <div>
                <h4 className="text-white font-black text-xl mb-1">{m.name}</h4>
                <p className="text-white/80 text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://supercell.com/en/games/brawlstars/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 font-black text-black rounded-2xl text-lg hover:scale-105 transition-transform duration-300"
            style={{ background: "linear-gradient(135deg, #ffd700, #ff9500)", boxShadow: "0 8px 32px rgba(255,165,0,0.5)" }}
          >
            🎮 Скачать Brawl Stars
          </a>
        </div>
      </div>
    </div>
  );
}

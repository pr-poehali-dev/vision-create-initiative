const brawlers = [
  { name: "Шелли", role: "Боец ближнего боя", emoji: "💥", rarity: "Обычный", gradient: "from-orange-500 to-red-600", rarityColor: "text-orange-300", power: 80 },
  { name: "Кольт", role: "Меткий стрелок", emoji: "🔫", rarity: "Редкий", gradient: "from-blue-500 to-indigo-700", rarityColor: "text-blue-300", power: 70 },
  { name: "Эль Примо", role: "Тяжёлый боец", emoji: "🤼", rarity: "Редкий", gradient: "from-yellow-500 to-orange-600", rarityColor: "text-yellow-300", power: 90 },
  { name: "Спайк", role: "Легендарный кактус", emoji: "🌵", rarity: "Легендарный", gradient: "from-purple-600 to-pink-600", rarityColor: "text-pink-300", power: 95 },
  { name: "Кроу", role: "Ассасин", emoji: "🐦", rarity: "Легендарный", gradient: "from-slate-600 to-purple-800", rarityColor: "text-purple-300", power: 92 },
  { name: "Леон", role: "Невидимка", emoji: "🦎", rarity: "Легендарный", gradient: "from-green-500 to-teal-700", rarityColor: "text-green-300", power: 93 },
  { name: "Нита", role: "Вызыватель медведя", emoji: "🐻", rarity: "Суперредкий", gradient: "from-amber-600 to-yellow-500", rarityColor: "text-amber-300", power: 75 },
  { name: "Бо", role: "Лучник-ловушечник", emoji: "🏹", rarity: "Суперредкий", gradient: "from-lime-500 to-green-700", rarityColor: "text-lime-300", power: 78 },
  { name: "Тик", role: "Взрывная шляпа", emoji: "🎩", rarity: "Эпический", gradient: "from-red-600 to-rose-800", rarityColor: "text-rose-300", power: 82 },
  { name: "Мортис", role: "Вампир-ассасин", emoji: "🧛", rarity: "Мифический", gradient: "from-violet-700 to-indigo-900", rarityColor: "text-violet-300", power: 88 },
  { name: "Динамайк", role: "Подрывник", emoji: "💣", rarity: "Редкий", gradient: "from-pink-500 to-red-600", rarityColor: "text-pink-300", power: 72 },
  { name: "Сэнди", role: "Повелитель песка", emoji: "🌪️", rarity: "Легендарный", gradient: "from-yellow-400 to-amber-600", rarityColor: "text-yellow-200", power: 91 },
];

export default function Gallery() {
  return (
    <div
      className="py-20 px-6"
      style={{ background: "linear-gradient(180deg, #0f0c29 0%, #1a0533 100%)" }}
    >
      <p className="uppercase text-pink-400 text-sm tracking-widest mb-2 text-center">Выбери бойца</p>
      <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
        🏆 Бравлеры
      </h2>
      <p className="text-neutral-400 text-center mb-12">Каждый уникален. Найди своего!</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {brawlers.map((b, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${b.gradient} rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          >
            <span className="text-5xl mb-3">{b.emoji}</span>
            <h4 className="text-white font-black text-lg mb-0.5">{b.name}</h4>
            <p className="text-white/70 text-xs mb-2">{b.role}</p>
            <span className={`text-xs font-bold uppercase tracking-widest ${b.rarityColor} mb-3`}>{b.rarity}</span>
            <div className="w-full bg-black/30 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-white/80"
                style={{ width: `${b.power}%` }}
              />
            </div>
            <p className="text-white/50 text-xs mt-1">Сила: {b.power}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

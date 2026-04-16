const brawlers = [
  {
    name: "Шелли",
    role: "Боец ближнего боя",
    emoji: "💥",
    rarity: "Обычный",
    gradient: "from-orange-500 to-red-600",
    rarityColor: "text-orange-300",
  },
  {
    name: "Кольт",
    role: "Меткий стрелок",
    emoji: "🔫",
    rarity: "Редкий",
    gradient: "from-blue-500 to-indigo-700",
    rarityColor: "text-blue-300",
  },
  {
    name: "Эль Примо",
    role: "Тяжёлый боец",
    emoji: "🤼",
    rarity: "Редкий",
    gradient: "from-yellow-500 to-orange-600",
    rarityColor: "text-yellow-300",
  },
  {
    name: "Спайк",
    role: "Легендарный кактус",
    emoji: "🌵",
    rarity: "Легендарный",
    gradient: "from-purple-600 to-pink-600",
    rarityColor: "text-pink-300",
  },
  {
    name: "Кроу",
    role: "Ассасин",
    emoji: "🐦",
    rarity: "Легендарный",
    gradient: "from-slate-600 to-purple-800",
    rarityColor: "text-purple-300",
  },
  {
    name: "Леон",
    role: "Невидимка",
    emoji: "🦎",
    rarity: "Легендарный",
    gradient: "from-green-500 to-teal-700",
    rarityColor: "text-green-300",
  },
];

export default function Gallery() {
  return (
    <div className="bg-neutral-950 py-16 px-6">
      <h3 className="uppercase text-neutral-400 text-sm tracking-widest mb-2 text-center">Бравлеры</h3>
      <p className="text-neutral-500 text-center text-sm mb-10">Выбери своего бойца и иди в бой</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {brawlers.map((b, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${b.gradient} rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
          >
            <span className="text-6xl mb-3">{b.emoji}</span>
            <h4 className="text-white font-bold text-xl mb-1">{b.name}</h4>
            <p className="text-white/70 text-sm mb-2">{b.role}</p>
            <span className={`text-xs font-bold uppercase tracking-widest ${b.rarityColor}`}>{b.rarity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
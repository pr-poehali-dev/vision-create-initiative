const images = [
  {
    src: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5vnt.jpg",
    alt: "Brawl Stars gameplay 1",
  },
  {
    src: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5vnu.jpg",
    alt: "Brawl Stars gameplay 2",
  },
  {
    src: "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc5vnv.jpg",
    alt: "Brawl Stars gameplay 3",
  },
];

export default function Gallery() {
  return (
    <div className="bg-neutral-950 py-16 px-6">
      <h3 className="uppercase text-neutral-400 text-sm tracking-widest mb-8 text-center">Скриншоты из игры</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="aspect-video overflow-hidden bg-neutral-800 flex items-center justify-center">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement) {
                  target.parentElement.innerHTML = `<span style="font-size:80px">🎮</span>`;
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

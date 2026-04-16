const images = [
  {
    src: "https://cdn.brawlstars.com/brawlstars-assets/screenshot-1.jpg",
    fallback: "https://static.wikia.nocookie.net/brawlstars/images/0/0e/Brawl_Stars_gameplay.jpg",
    alt: "Brawl Stars gameplay",
  },
  {
    src: "https://cdn.brawlstars.com/brawlstars-assets/screenshot-2.jpg",
    fallback: "https://static.wikia.nocookie.net/brawlstars/images/b/b3/Brawl_Stars_brawlers.jpg",
    alt: "Brawl Stars brawlers",
  },
  {
    src: "https://cdn.brawlstars.com/brawlstars-assets/screenshot-3.jpg",
    fallback: "https://static.wikia.nocookie.net/brawlstars/images/4/4f/Brawl_Stars_map.jpg",
    alt: "Brawl Stars map",
  },
];

export default function Gallery() {
  return (
    <div className="bg-neutral-950 py-16 px-6">
      <h3 className="uppercase text-neutral-400 text-sm tracking-widest mb-8 text-center">Скриншоты из игры</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="aspect-video overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = img.fallback;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

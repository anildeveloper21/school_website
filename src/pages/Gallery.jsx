import { useState } from "react";

const imagesData = [
  { src: new URL("../gallery/img1.jpg", import.meta.url).href, category: "Events" },
  { src: new URL("../gallery/img2.jpg", import.meta.url).href, category: "School" },
  { src: new URL("../gallery/img3.jpg", import.meta.url).href, category: "Sports" },
  { src: new URL("../gallery/img4.jpg", import.meta.url).href, category: "Events" },
  { src: new URL("../gallery/img5.jpg", import.meta.url).href, category: "School" },
  { src: new URL("../gallery/img6.jpg", import.meta.url).href, category: "Sports" },
  // add more...
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // 🎯 Filter logic
  const filteredImages =
    activeCategory === "All"
      ? imagesData
      : imagesData.filter((img) => img.category === activeCategory);

  const visibleImages = showAll
    ? filteredImages
    : filteredImages.slice(0, 8);

  return (
    <div className="pt-24 px-4 bg-gray-100 min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Our Gallery
      </h1>

      {/* 🔥 Category Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["All", "Events", "School", "Sports",].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setShowAll(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 shadow hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {visibleImages.map((img, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelected(img.src)}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-sm">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      {filteredImages.length > 8 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selected} className="max-w-3xl w-full rounded-lg" />
        </div>
      )}

    </div>
  );
}
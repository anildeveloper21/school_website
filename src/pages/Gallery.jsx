import { useState } from "react";

// 🔥 Auto import all images from assets folder
const modules = import.meta.glob("../gallery/*.{jpg,jpeg,png}", {
  eager: true,
});

// Convert to usable array
const images = Object.values(modules).map((mod) => mod.default);

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <div className="pt-24 px-4 bg-gray-100 min-h-screen">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Our Gallery
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {visibleImages.map((img, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt=""
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-sm">View</span>
            </div>
          </div>
        ))}

      </div>

      {/* View More */}
      {images.length > 8 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-3xl w-full rounded-lg shadow-lg"
          />
        </div>
      )}

    </div>
  );
}
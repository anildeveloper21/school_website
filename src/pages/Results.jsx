import { motion } from "framer-motion";

const toppers = [
  {
    name: "Rahul Sharma",
    percentage: "98%",
    image: "/assets/topper1.jpg",
    rank: "1st",
  },
  {
    name: "Priya Verma",
    percentage: "96%",
    image: "/assets/topper2.jpg",
    rank: "2nd",
  },
  {
    name: "Aman Gupta",
    percentage: "95%",
    image: "/assets/topper3.jpg",
    rank: "3rd",
  },
];

export default function Toppers() {
  return (
    <section className="py-18 bg-gray-100">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800">
          Our Toppers
        </h2>
        <p className="text-gray-600 mt-2">
          Celebrating Excellence & Hard Work
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {toppers.map((student, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative group"
          >

            {/* Rank Badge */}
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-sm rounded-full shadow">
              #{student.rank}
            </div>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {student.name}
              </h3>

              <p className="text-blue-600 font-bold text-lg mt-2">
                {student.percentage}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                CBSE Class 10 Topper
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

import topper1 from "../assets/topper1.jpg";
import topper2 from "../assets/topper2.jpeg";
import topper3 from "../assets/topper3.jpeg";
import topper4 from "../assets/topper4.jpeg";
import topper5 from "../assets/topper5.jpeg";
import topper6 from "../assets/topper6.jpeg";
import topper7 from "../assets/topper7.jpg";
import topper8 from "../assets/topper8.jpeg";
import topper9 from "../assets/topper9.jpeg";
import topper10 from "../assets/topper10.jpeg";
import topper11 from "../assets/topper11.jpg";

const toppers = [
  { name: "Krishan Gopal", percentage: "96%", image: topper1, rank: "1st" },
  { name: "Sneha Agrawal", percentage: "93%", image: topper2, rank: "2nd" },
  { name: "Ruchi Dixit", percentage: "92.8%", image: topper3, rank: "3rd" },
  { name: "Priyanka", percentage: "92.8%", image: topper4 },
  { name: "Anshu", percentage: "92.6%", image: topper5 },
  { name: "Vandana Dixit", percentage: "90.8%", image: topper6 },
  { name: "Vanshika", percentage: "90.6%", image: topper7 },
  { name: "Payal", percentage: "90.6%", image: topper8 },
  { name: "Monika", percentage: "90.6%", image: topper9 },
  { name: "Bhawna Sharma", percentage: "90.4%", image: topper10 },
  { name: "Prachi", percentage: "90%", image: topper11 },
];

export default function Toppers() {
  return (
    <section className="py-20 bg-gray-100">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-800">
          Our Toppers
        </h2>
        <p className="text-gray-600 mt-2">
          Celebrating Excellence & Hard Work
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">

        {toppers.map((student, i) => {

          // 🎯 Rank show only for top 3
          const showRank = ["1st", "2nd", "3rd"].includes(student.rank);

          // 🎨 Rank Colors
          const rankColor =
            student.rank === "1st"
              ? "from-yellow-400 to-yellow-600"
              : student.rank === "2nd"
              ? "from-gray-300 to-gray-500"
              : student.rank === "3rd"
              ? "from-orange-400 to-orange-600"
              : "";

          return (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center relative"
            >

              {/* Rank Badge (only top 3) */}
              {showRank && (
                <div
                  className={`absolute top-3 left-3 text-white px-3 py-1 text-xs rounded-full bg-gradient-to-r ${rankColor} shadow`}
                >
                  #{student.rank}
                </div>
              )}

              {/* Image with Premium Frame */}
              <div className="relative w-28 h-28 mx-auto mb-4">

                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px]">

                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>

                </div>
              </div>

              {/* Info */}
              <h3 className="text-md font-semibold text-gray-800">
                {student.name}
              </h3>

              <p className="text-blue-600 font-bold mt-1">
                {student.percentage}
              </p>

              <p className="text-gray-400 text-xs mt-1">
                CBSE Class 10
              </p>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
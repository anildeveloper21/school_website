import { motion } from "framer-motion";

const eventsData = [
  {
    title: "Annual Function",
    date: "January 2026",
    desc: "A grand celebration with cultural performances by students.",
  },
  {
    title: "Sports Day",
    date: "February 2026",
    desc: "Outdoor games and competitions to promote fitness.",
  },
  {
    title: "Science Exhibition",
    date: "March 2026",
    desc: "Students showcase innovative science projects.",
  },
];

export default function Events() {
  return (
    <div className="pt-24 p-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        School Events
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {eventsData.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold">{event.title}</h2>

            <p className="text-blue-600 mt-2">{event.date}</p>

            <p className="text-gray-600 mt-3">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
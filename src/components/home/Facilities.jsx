import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  GraduationCap,
  Trophy,
  Computer,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const facilities = [
  {
    title: "Smart Classrooms",
    desc: "Modern digital classrooms with smart boards for interactive learning.",
    icon: MonitorSmartphone,
  },
  {
    title: "Experienced Teachers",
    desc: "Highly qualified and dedicated teachers for quality education.",
    icon: GraduationCap,
  },
  {
    title: "Sports Activities",
    desc: "Regular sports and physical activities for overall development.",
    icon: Trophy,
  },
  {
    title: "Computer Lab",
    desc: "Well-equipped computer lab with latest technology and internet access.",
    icon: Computer,
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-gray-100">
      
      <SectionTitle
        title="Our Facilities"
        subtitle="What we offer to our students"
      />

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        
        {facilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Icon className="text-blue-700" size={32} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
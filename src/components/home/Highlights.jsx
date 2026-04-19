import { motion } from "framer-motion";
import { Award, BookOpenCheck, ShieldCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const highlights = [
  {
    title: "100% Result",
    desc: "Consistently excellent academic performance with high success rates.",
    icon: Award,
  },
  {
    title: "Modern Education",
    desc: "Updated curriculum with smart classes and innovative teaching methods.",
    icon: BookOpenCheck,
  },
  {
    title: "Safe Environment",
    desc: "Secure and disciplined campus ensuring student safety at all times.",
    icon: ShieldCheck,
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-gray-100">
      
      <SectionTitle 
        title="Highlights" 
        subtitle="Why choose us" 
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        
        {highlights.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.07 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <Icon className="text-yellow-600" size={30} />
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
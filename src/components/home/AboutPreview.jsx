import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-100">
      
      <SectionTitle
        title="About Our School"
        subtitle="Shaping future with quality education"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center px-4"
      >
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          <span className="font-semibold text-blue-800">
            Adarsh Vidya Mandir
          </span>{" "}
          is dedicated to delivering high-quality education that focuses on
          academic excellence along with strong moral values. Our school
          provides a positive and disciplined environment where students are
          encouraged to explore their potential, develop confidence, and grow
          into responsible citizens.
          <br /><br />
          With experienced teachers, modern teaching methods, and a focus on
          overall development, we ensure that every student receives the right
          guidance to succeed not only in academics but also in life.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center"
        >
          <GraduationCap className="mx-auto text-blue-700 mb-3" size={40} />
          <h3 className="font-semibold text-lg text-blue-800 mb-2">
            Quality Education
          </h3>
          <p className="text-gray-600 text-sm">
            Focused on academic excellence with modern teaching techniques.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center"
        >
          <BookOpen className="mx-auto text-blue-700 mb-3" size={40} />
          <h3 className="font-semibold text-lg text-blue-800 mb-2">
            Strong Values
          </h3>
          <p className="text-gray-600 text-sm">
            Discipline, respect, and moral values are core to our teaching.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center"
        >
          <Users className="mx-auto text-blue-700 mb-3" size={40} />
          <h3 className="font-semibold text-lg text-blue-800 mb-2">
            Overall Development
          </h3>
          <p className="text-gray-600 text-sm">
            Encouraging students in sports, activities, and personality growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
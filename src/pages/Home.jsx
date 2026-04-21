import { motion } from "framer-motion";
import AboutPreview from "../components/home/AboutPreview";
import Facilities from "../components/home/Facilities";
import Highlights from "../components/home/Highlights";
import { Testimonials } from "../components/home/Testimonial";
import ContactUs from "../components/home/ContactUs";
import AnnouncementBar from "../components/home/AnnouncementBar";

export default function Home() {
  return (
    <div className="pt-20">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background Image */}
        <img
          src="/school.jpg"   // 👉 apni image yaha daalo (public folder me rakho)
          alt="School"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Optional Gradient Overlay (extra premium look) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/40"></div>

        {/* Content */}
        <div className="relative z-10 px-4">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Adarsh Vidya Mandir
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-gray-200"
          >
            Building Future Leaders with Knowledge & Values
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg"
          >
            Apply Now
          </motion.button>

        </div>
      </section>


      {/* OTHER SECTIONS */}
      <AnnouncementBar />
      <AboutPreview />
      <Facilities />
      <Highlights />
      <Testimonials />
      <ContactUs />


    </div>
  );
}
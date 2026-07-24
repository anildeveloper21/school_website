import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import {
  FaArrowDown,
  FaPhoneAlt,
  FaGraduationCap,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import AboutPreview from "../components/home/AboutPreview";
import Facilities from "../components/home/Facilities";
import Highlights from "../components/home/Highlights";
import { Testimonials } from "../components/home/Testimonial";
import ContactUs from "../components/home/ContactUs";
import AnnouncementBar from "../components/home/AnnouncementBar";

const heroImages = [
  "/hero/hero1.png",
  "/hero/hero2.png",
  "/hero/hero3.png",
  "/hero/hero4.png",
  "/hero/hero5.png",
];

export default function Home() {
  return (
    <div className="pt-20">

      <section className="relative h-screen overflow-hidden">

        {/* Background Slider */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="absolute inset-0 w-full h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden h-full">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover animate-zoom"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55 z-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-transparent to-blue-700/40 z-10" />

        {/* Content */}

        <div className="absolute inset-0 z-20 flex items-center justify-center px-5">

          <div className="max-w-4xl text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl px-8 py-10 shadow-2xl">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold"
            >
              <FaGraduationCap />
              Admission Open 2026-27
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 text-5xl md:text-7xl font-extrabold text-white"
            >
              Adarsh Vidya Mandir
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }}
              className="mt-6 text-gray-200 text-lg md:text-2xl leading-relaxed"
            >
              Nurturing Young Minds with Excellence,
              Discipline, Innovation and Strong Values.
            </motion.p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold shadow-xl"
              >
                Apply Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                Contact Us
              </motion.button>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white"
        >
          <FaArrowDown size={28} />
        </motion.div>

        {/* Bottom Wave */}

        <svg
          className="absolute bottom-0 left-0 w-full z-20"
          viewBox="0 0 1440 150"
        >
          <path
            fill="#ffffff"
            d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,69.3C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128V160H0Z"
          />
        </svg>

      </section>

      <AnnouncementBar />
      <AboutPreview />
      <Facilities />
      <Highlights />
      <Testimonials />
      <ContactUs />

    </div>
  );
}
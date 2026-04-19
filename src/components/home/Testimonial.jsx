import { AnimatedItem } from "../../components/AnimatedSection"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "This school not only focuses on academics but also builds strong character and confidence in students.",
    author: "Rahul Sharma",
    role: "Parent",
    rating: 5,
    image: "/user1.jpg"
  },
  {
    id: "2",
    quote:
      "The teachers are very supportive and the environment is perfect for learning and growth.",
    author: "Priya Verma",
    role: "Student",
    rating: 5,
    image: "/user2.jpg"
  },
  {
    id: "3",
    quote:
      "I have seen great improvement in my child’s performance and personality.",
    author: "Amit Kumar",
    role: "Parent",
    rating: 4,
    image: "/user3.jpg"
  }
]

function CounterStat({ label, target, suffix, prefix = "", isFloat = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const numericTarget = Number.parseFloat(target) || 0

  useEffect(() => {
    if (!inView) return
    let current = 0
    const increment = numericTarget / 50

    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(isFloat ? current.toFixed(1) : Math.floor(current))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [inView, numericTarget, isFloat])

  return (
    <div ref={ref} className="text-center hover:scale-105 transition">
      <div className="text-4xl font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-white/60 uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

const STATS = [
  { label: "Rating", target: "4.9", suffix: "/5", isFloat: true },
  { label: "Students", target: "1500", suffix: "+" },
  { label: "Experience", target: "25", suffix: "+" },
  { label: "Satisfaction", target: "99", suffix: "%" }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = (dir) => {
    setDirection(dir)
    setActiveIndex(
      (prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length
    )
  }

  const current = TESTIMONIALS[activeIndex]

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}
      <img
        src="/school.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Stats */}
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <AnimatedItem key={i}>
              <CounterStat {...stat} />
            </AnimatedItem>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-xl">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.4 }}
            >

              {/* Profile Image */}
              <img
                src={current.image}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white/40"
              />

              {/* Stars */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex justify-center gap-1 mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < current.rating ? "#facc15" : "transparent"}
                    className="text-yellow-400"
                  />
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-lg md:text-xl italic leading-loose text-white/90 mb-6">
                "{current.quote}"
              </p>

              {/* Author */}
              <h3 className="font-semibold text-white">
                {current.author}
              </h3>
              <p className="text-sm text-white/60">
                {current.role}
              </p>

            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
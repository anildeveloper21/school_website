import { motion } from "framer-motion"

const directionVariants = {
  up: { y: 32, opacity: 0 },
  down: { y: -32, opacity: 0 },
  left: { x: 32, opacity: 0 },
  right: { x: -32, opacity: 0 },
  none: { opacity: 0 }
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedItem({
  children,
  className = "",
  index = 0,
  direction = "up"
}) {
  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

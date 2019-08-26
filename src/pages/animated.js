import React from 'react'
import { motion } from 'framer-motion'

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const AnimatedPage = () => (
  <>
    <h1>Animated On Page Mount</h1>
    <motion.ul variants={container} initial="hidden" animate="visible">
      <motion.li variants={item}>Lorem Ipsum</motion.li>
      <motion.li variants={item}>Dolor Set</motion.li>
      <motion.li variants={item}>Amet</motion.li>
    </motion.ul>
  </>
)

export default AnimatedPage

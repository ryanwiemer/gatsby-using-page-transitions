import React from "react";
import { motion } from "framer-motion";

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const item = {
  initial: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedPage = () => (
  <>
    <h1>Animated After Page Mount</h1>
    <p>
      As mentioned on{" "}
      <a
        href="https://github.com/framer/motion/issues/294#issuecomment-629353859"
        target="_blank"
        rel="noopener noreferrer"
      >
        framer/motion#294
      </a>{" "}
      the child variant keys need to be named the same as the parent variant
      keys. This may change in the future but just something to be aware of.{" "}
    </p>
    <motion.ul variants={container}>
      <motion.li variants={item}>I am</motion.li>
      <motion.li variants={item}>staggered content</motion.li>
      <motion.li variants={item}>that animates in</motion.li>
      <motion.li variants={item}>after the initial</motion.li>
      <motion.li variants={item}>page fade</motion.li>
    </motion.ul>
  </>
);

export default AnimatedPage;

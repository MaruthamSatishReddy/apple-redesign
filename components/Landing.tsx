import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';

function Landing() {
  const easing = [0.6, -0.5, 1, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8"
    >
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <motion.span
            animate={{ x: 70 }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            Powered
          </motion.span>
          <motion.span
            animate={{ x: 70 }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="block"
          >
            By Intellect
          </motion.span>
          <motion.span
            animate={{ x: 100 }}
            transition={{ ease: 'easeOut', duration: 3 }}
            className="block"
          >
            Driven By Values
          </motion.span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]"
      >
        <Image src="/iphone.png" layout="fill" objectFit="contain" alt="" />
      </motion.div>
    </motion.section>
  );
}

export default Landing;

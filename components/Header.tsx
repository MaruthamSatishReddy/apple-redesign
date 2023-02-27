import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline';
import AccountScreen from './Account';
function Header() {
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
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4 scrollbar-thin overflow-y-scroll overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="flex items-center justify-center md:w-1/5"
      >
        <Link href="">
          <motion.div
            variants={fadeInUp}
            className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100"
          >
            <Image
              src="/Images/logo.webp"
              alt={''}
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </Link>
      </motion.div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />

        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        <Link href="/">
          <UserIcon className="headerIcon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;

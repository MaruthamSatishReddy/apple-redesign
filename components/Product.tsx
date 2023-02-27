import { ShoppingBagIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { Product } from '../typings';
import React from 'react';
import { urlFor } from '../sanity';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { addToBasket } from '../redux/basketSlice';
import Link from 'next/link';
import Rating from './Rating';

interface Props {
  product: Product;
}

function Product({ product }: Props) {
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
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success(`${product.title} Added To Basket`, {
      position: 'bottom-center',
    });
  };
  const handleRatingChange = (value: any) => {
    console.log(`New rating value: ${value}`);
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10 "
    >
      <motion.div variants={fadeInUp} className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={''}
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <Link href={`/products/${product.slug.current}`}>
            <p>{product.title}</p>
          </Link>
          <p>{product.price}</p>
          <Rating
            defaultValue={product.ratings}
            onChange={handleRatingChange}
          />
        </div>

        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]"
          onClick={addItemToBasket}
        >
          <ShoppingBagIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </motion.div>
  );
}
export default Product;

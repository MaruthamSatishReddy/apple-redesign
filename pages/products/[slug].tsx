import React from 'react';
import { sanityClient } from '../../sanity';
import { Product } from '../../typings';
import { urlFor } from '../../sanity';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToBasket } from '../../redux/basketSlice';
import { groq } from 'next-sanity';
import Header from '../../components/Header';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

interface Props {
  product: Product;
}
const Product = ({ product }: Props) => {
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

  return (
    <>
      <Header />
      <div>
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
          <div>
            <div className="grid grid-rows-4 gap-4">
              <div className='border-3 rounded-md bg-slate-600 shadow-2xl cursor-pointer hover:opacity-80 hover:shadow-lg hover:bg-white transition duration-200 ease-out"'>
                <Image
                  src={urlFor(product.image[0]).url()}
                  alt={''}
                  width={70}
                  height={70}
                  className="rounded-md"
                />
              </div>
              <div className='border-3 rounded-md bg-slate-600 shadow-2xl cursor-pointer hover:opacity-80 hover:shadow-lg hover:bg-white transition duration-200 ease-out"'>
                <Image
                  src={urlFor(product.image[0]).url()}
                  alt={''}
                  width={70}
                  height={70}
                  className="rounded-md"
                />
              </div>
              <div className='border-3 rounded-md bg-slate-600 shadow-2xl cursor-pointer hover:opacity-80 hover:shadow-lg hover:bg-white transition duration-200 ease-out"'>
                <Image
                  src={urlFor(product.image[0]).url()}
                  alt={''}
                  width={70}
                  height={70}
                  className="rounded-md"
                />
              </div>
              <div className='border-3 rounded-md bg-slate-600 shadow-2xl cursor-pointer hover:opacity-80 hover:shadow-lg hover:bg-white transition duration-200 ease-out"'>
                <Image
                  src={urlFor(product.image[0]).url()}
                  width={70}
                  height={70}
                  alt={''}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="rounded-md relative md:h-52 md:w-80 flex-shrink-0 mt-3 ml-10">
            <Image
              src={urlFor(product.image[0]).url()}
              alt={''}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
              <p></p>
              <HeartIcon className="h-7 cursor-pointer" />
            </div>
            <h4 className="text-xl">{product.title}</h4>
            <div className="border-b w-10 pt-2" />
            <p className="pt-2 text-sm text-gray-500 flex-row">Description</p>
            <div className="flex justify-between items-end">
              <p className="flex items-center">
                Reviews
                <StarIcon className="h-5  text-red-500" />
              </p>
            </div>
            <div>
              <p className="text-right lg:text-2xl font-semibold pb-2">
                {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: '' | undefined };
}) {
  const { slug = '' } = context.params;
  const product = await sanityClient.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      product,
    },
  };
}

export default Product;

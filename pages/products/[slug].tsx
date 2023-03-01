import React, { useState } from 'react';
import { sanityClient } from '../../sanity';
import { Product } from '../../typings';
import { urlFor } from '../../sanity';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToBasket } from '../../redux/basketSlice';
import { groq } from 'next-sanity';
import Header from '../../components/Header';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

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
    toast.success(`${product?.title} Added To Basket`, {
      position: 'bottom-center',
    });
  };
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [privewImages] = useState(product?.privewImages);
  const handleImageChange = (imageUrl: any) => {
    setActiveImage(imageUrl);
  };
  const handleRatingChange = (value: any) => {
    console.log(`New rating value: ${value}`);
  };
  return (
    <>
      <div className="h-screen max-w-full overflow-x-hidden bg-white scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        <Header />
        <div className="container mx-auto py-6 px-4 mt-10">
          <p className="mt-5">
            <BackButton />
          </p>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="md:w-1/2 relative bg-gray-200 shadow-lg rounded-md">
              <Image
                src={product?.image && urlFor(activeImage).url()}
                alt={product?.title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
              <div className="grid grid-rows-5 space-x-2 mt-2 gap-3">
                {privewImages?.map((imageUrl) => (
                  <button
                    onMouseOver={() => handleImageChange(imageUrl)}
                    className={`w-20 h-20 relative rounded-lg focus:outline-none ${
                      activeImage === imageUrl
                    }
                        ? 'border-2 border-yellow-500'
                        : 'border border-gray-300'
                    }`}
                  >
                    {' '}
                    <Image
                      src={product?.image && urlFor(imageUrl).url()}
                      alt={product?.title}
                      layout="fill"
                      objectFit="contain"
                      className="border-3 rounded-md bg-gray-400 shadow-2xl cursor-pointer hover:opacity-80 hover:shadow-lg hover:bg-white hover:border-2 border-blue-500 transition duration-200 ease-out"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl font-medium mb-4">{product?.title}</h1>
              <div className="flex items-center">
                <div className="flex items-center text-lg text-[#F7AB0A]/80 space-x-2">
                  <Rating
                    defaultValue={product?.ratings}
                    onChange={handleRatingChange}
                  />
                </div>
                <p className="text-sm text-gray-500 ml-2">Reviews</p>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-xl font-bold text-green-500 mr-2">
                  {product?.price}
                </p>
                <p className="text-sm text-gray-500">Discount</p>
              </div>
              <div className="flex items-center mt-4">
                <p className="text-gray-500 font-medium mr-2">
                  Inclusive of all taxes
                </p>
                <ChevronDownIcon height={20} width={20} />
              </div>
              <div className="flex items-center flex-row gap-2 mt-2">
                <Button title="Add To Cart" width="20" />
                <Button title="Buy Now" width="20" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-medium mb-4">Product Description</h2>
            <p className="text-gray-500">{product?.description}</p>
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

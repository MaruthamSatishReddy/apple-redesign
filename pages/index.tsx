import { Tab } from '@headlessui/react';
import type { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';
import { Category, Product as ProductType } from '../typings';
import Product from '../components/Product';
import Header from '../components/Header';
import Landing from '../components/Landing';
import { sanityClient } from '../sanity';
import Basket from '../components/Basket';
type Props = {
  categories: Category[];
  products: ProductType[];
};

const Home = ({ categories, products }: Props) => {
  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />);
  };
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Easy To Buy</title>
        <meta name="description" content="Easy To Buy" />
        <link rel="icon" href="/Images/logo.webp" />
      </Head>
      <Header />
      <Basket />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-xl font-semibold outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? 'borderGradient bg-[#35383C] text-white'
                        : 'border-b-2 border-[#35383C] text-[#747474]'
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slug = 'macbook-air-with-m2-chip';
  const categoryQuery = groq`
*[_type=="category"]`;
  const productQuery = groq`
*[_type=="product"]`;
  const productQuery1 = groq`
 
*[_type=="product" && slug.current == slug]`;

  const categories: Category[] = await sanityClient.fetch(categoryQuery);
  const products: ProductType[] = await sanityClient.fetch(productQuery);

  return {
    props: { categories, products },
    revalidate: 10,
  };
};

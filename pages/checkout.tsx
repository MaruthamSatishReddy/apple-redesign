import Header from '../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/basketSlice';

import { Product } from '../typings';
import Button from '../components/Button';
import { urlFor } from '../sanity';

const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(items.length);
  const removeFromCartHandler = () => {
    dispatch(removeFromCart(items));
  };
  return (
    <>
      <div className="h-screen max-w-full overflow-x-hidden bg-gray-200 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        <Header />
        <div className="container md:ml-4 lg:grid grid-cols-12 gap-4 items-start pb-16 pt-4 lg:ml-10 shadow-lg">
          <div className="xl:col-span-8 lg:col-span-8 ">
            <div className="bg-white shadow-lg rounded-md">
              <h3 className="text-gray-800 text-lg mb-4 font-medium mt-0 py-4 px-3 border-b-2 uppercase shadow-lg">
                Shopping Cart
              </h3>
              {items.map((item: any, index: any) => (
                <div className="grid gap-1" key={`${item._id}+${index}`}>
                  <div className="card card-side ml-3 bg-white shadow-xl cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
                    <figure>
                      <Image
                        src={urlFor(item.image[0]).url()}
                        width={70}
                        height={70}
                        className="rounded-md"
                        alt={''}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="font-medium">{item.title}</h2>
                      <h2 className="font-medium text-green-700">In Stock</h2>
                      <h2 className="font-medium">
                        Eligible for FREE Shipping
                      </h2>

                      <div className="card-actions justify-start">
                        {' '}
                        <div className="flex items-center card-title">
                          Quantity: {quantity}
                        </div>
                        <div>
                          <a className="linkDeleteSaveLater font-medium">
                            Delete
                          </a>
                          |
                          <a className="linkDeleteSaveLater font-medium">
                            Save for Later
                          </a>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <h2 className="font-medium">{item.price}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-b-2 border-black"></div>
            </div>

            <>
              <div className="py-0.5"></div>
            </>
          </div>

          <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-6 rounded mt-6 lg:mt-0 bg-white">
            <h3 className="text-gray-800 text-lg mb-4 font-medium uppercase ">
              Order Summary
            </h3>

            <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200 ">
              <div className="flex justify-between font-medium">
                <p>Subtotal</p>
                <p>{basketTotal}</p>
              </div>

              <div className="flex justify-between font-medium">
                <p>Delivery</p>
                <p>Free</p>
              </div>

              <div className="flex justify-between font-medium">
                <p>Tax</p>
                <p>Free</p>
              </div>
            </div>

            <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
              <h4>Total</h4>
              <h4>{basketTotal} </h4>
            </div>

            <div className="flex mb-4">
              <input
                type="text"
                className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm bg-white"
                placeholder="Coupon"
              />

              <div className="space-x-8">
                <Button title="Apply" />
              </div>
            </div>
            <Button title="CHECKOUT" width="100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

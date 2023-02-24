import Header from '../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import Image from 'next/image';

import { Product } from '../typings';
import Button from '../components/Button';
import { urlFor } from '../sanity';
const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  const [loading, setLoading] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  const handleQuantityChange = (e: any) => {
    setQuantity(e.target.value);
  };
  return (
    <>
      <Header />
      <div className="h-screen min-w-full bg-gray-200 overflow-x-hidden scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
        <div className="container lg:grid grid-cols-12 gap-4 items-start pb-16 pt-4 ml-10">
          <div className="xl:col-span-8 lg:col-span-8 ">
            <div className="bg-white">
              <div className="text-start text-black font-semibold mt-3 py-4 px-3 border-b-2 border-gray-400">
                Shopping Cart
              </div>
              {items.map((item) => (
                <div className="grid gap-1" key={item._id}>
                  <div
                    className="card card-side bg-white shadow-xl"
                    key={item._id}
                  >
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
                          <select
                            id="quantity-select"
                            className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-300 border-collapse shadow-lg font-medium"
                            value={quantity}
                            onChange={handleQuantityChange}
                          >
                            {' '}
                            <option
                              key={quantity}
                              value={quantity}
                              className="font-medium"
                            >
                              Qty : {quantity}
                            </option>
                            {[...Array(10)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <a className="linkDeleteSaveLater font-medium">
                          Delete
                        </a>
                        |
                        <a className="linkDeleteSaveLater font-medium">
                          Save for Later
                        </a>
                      </div>
                      <div className="card-actions justify-end">
                        <h2 className="font-medium">{item.price}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <>
              <div className="py-0.5"></div>
            </>
          </div>

          <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0 bg-white">
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

            <Button title="CHECKOUT" width="20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

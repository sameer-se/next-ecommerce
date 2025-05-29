import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '@/redux/Slice/CartSlice';
import { FaTrash } from 'react-icons/fa';
import Noimg from "@/assets/noimg.jpeg";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary">Shopping Cart</p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/cart">
            <span>Cart</span>
          </Link>
        </div>
      </div>

      <div className="container my-8 px-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <Link href="/products">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-4 px-6 text-left">Product</th>
                      <th className="py-4 px-6 text-center">Price</th>
                      <th className="py-4 px-6 text-center">Quantity</th>
                      <th className="py-4 px-6 text-center">Total</th>
                      <th className="py-4 px-6 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                              {item.images && item.images.length > 0 ? (
                                <Image
                                  src={item.images[0]}
                                  alt={item.name}
                                  width={80}
                                  height={80}
                                  className="h-full w-full object-cover object-center"
                                />
                              ) : (
                                <Image
                                  src={Noimg}
                                  alt="No image"
                                  width={80}
                                  height={80}
                                  className="h-full w-full object-cover object-center"
                                />
                              )}
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-gray-900">
                                {item.name}
                              </h3>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-gray-900">${item.price}</span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => handleDecreaseQuantity(item._id)}
                              className="text-gray-500 focus:outline-none focus:text-gray-600 border border-gray-300 rounded-l-md px-3 py-1"
                            >
                              -
                            </button>
                            <span className="text-gray-700 px-4 py-1 border-t border-b border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleIncreaseQuantity(item)}
                              className="text-gray-500 focus:outline-none focus:text-gray-600 border border-gray-300 rounded-r-md px-3 py-1"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <button
                            onClick={() => handleDecreaseQuantity(item._id)}
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-between">
                <Link href="/products">
                  <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                    Continue Shopping
                  </button>
                </Link>
                <button
                  onClick={handleClearCart}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal ({totalQuantity} items)</span>
                    <span className="text-gray-900">${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">Free</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">${(totalAmount * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${(totalAmount + (totalAmount * 0.1)).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link href="/checkout">
                  <button className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

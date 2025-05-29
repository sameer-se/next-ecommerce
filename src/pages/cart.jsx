import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '@/redux/Slice/CartSlice';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
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
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Shopping Cart</h1>
          <div className="flex items-center text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 bg-gray-50">
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="mb-6 text-gray-300">
              <FaShoppingCart className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added anything to your cart yet. Browse our products and find something you&apos;ll love.
            </p>
            <Link href="/products">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium">
                Browse Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6 flex justify-between items-center border-b">
                  <h2 className="text-xl font-bold text-gray-800">Shopping Cart <span className="text-gray-500 text-base font-normal">({totalQuantity} items)</span></h2>
                  <button
                    onClick={handleClearCart}
                    className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm font-medium"
                  >
                    <FaTrash className="w-3 h-3" /> Clear All
                  </button>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item._id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                      {/* Product Image and Info */}
                      <div className="flex items-start gap-4 flex-1 mb-4 sm:mb-0">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
                          {item.images && item.images.length > 0 ? (
                            <Image
                              src={item.images[0]}
                              alt={item.name}
                              width={96}
                              height={96}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <Image
                              src={Noimg}
                              alt="No image"
                              width={96}
                              height={96}
                              className="h-full w-full object-contain"
                            />
                          )}
                          
                          <button
                            onClick={() => handleDecreaseQuantity(item._id)}
                            className="absolute -top-2 -right-2 bg-white text-red-500 hover:text-red-700 p-1 rounded-full shadow-sm border border-gray-200 hover:bg-red-50 transition-colors"
                            aria-label="Remove item"
                          >
                            <FaTrash className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <div>
                          <Link href={`/products/${item._id}`}>
                            <h3 className="text-base font-medium text-gray-900 hover:text-primary transition-colors mb-1">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-500 mb-2">Unit Price: <span className="font-medium text-gray-900">${item.price}</span></p>
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>
                        </div>
                      </div>
                      
                      {/* Quantity and Price */}
                      <div className="flex items-center gap-6 justify-between sm:justify-end sm:w-auto">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleDecreaseQuantity(item._id)}
                            className="w-8 h-8 rounded-l-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600"
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            value={item.quantity} 
                            readOnly
                            className="w-12 h-8 border-t border-b border-gray-300 text-center text-gray-700 text-sm"
                          />
                          <button
                            onClick={() => handleIncreaseQuantity(item)}
                            className="w-8 h-8 rounded-r-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/products">
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  <span>←</span> Continue Shopping
                </button>
              </Link>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md sticky top-6">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-800 mb-1">Order Summary</h2>
                  <p className="text-sm text-gray-500">Prices and shipping calculated at checkout</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({totalQuantity} items)</span>
                      <span className="text-gray-900 font-medium">${totalAmount.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Tax</span>
                      <span className="text-gray-900 font-medium">${(totalAmount * 0.1).toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-lg font-bold pt-4 border-t">
                      <span className="text-gray-900">Total</span>
                      <span className="text-primary">
                        ${(totalAmount + (totalAmount * 0.1)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Link href="/checkout">
                      <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium flex items-center justify-center gap-2">
                        Proceed to Checkout
                      </button>
                    </Link>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Secure Checkout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

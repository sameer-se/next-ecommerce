import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '@/redux/Slice/CartSlice';
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function OrderConfirmation() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  // Clear the cart when the component mounts
  useEffect(() => {
    // Only clear if there are items (prevents clearing on refresh)
    if (cartItems.length > 0) {
      dispatch(clearCart());
    }
  }, [cartItems.length, dispatch]);

  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary">Order Confirmation</p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/order-confirmation">
            <span>Order Confirmation</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Order!</h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Your order has been received and is now being processed. Your order details 
            have been sent to your email.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Information</h2>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium">Credit Card</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping Method:</span>
              <span className="font-medium">Standard Shipping</span>
            </div>
            
            <div className="flex justify-between pt-4 border-t border-gray-200 mt-4">
              <span className="text-gray-800 font-semibold">Total Amount:</span>
              <span className="text-primary font-bold">
                ${totalAmount > 0 ? (totalAmount + (totalAmount * 0.1)).toFixed(2) : '0.00'}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                Back to Home
              </button>
            </Link>
            
            <Link href="/products">
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

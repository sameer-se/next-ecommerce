import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '@/redux/Slice/WishlistSlice';
import { addToCart } from '@/redux/Slice/CartSlice';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import Noimg from "@/assets/noimg.jpeg";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    alert("Product added to cart!");
  };

  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">My Wishlist</h1>
          <div className="flex items-center text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Wishlist</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 bg-gray-50">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="mb-6 text-gray-300">
              <FaTrash className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Items added to your wishlist will be saved here. Start exploring our products to find items you love.
            </p>
            <Link href="/products">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors font-medium">
                Discover Products
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Saved Items <span className="text-gray-500 text-lg">({wishlistItems.length})</span></h1>
              <Link href="/products">
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center">
                  Continue Shopping
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div 
                  key={item._id} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="relative">
                    <div className="h-64 bg-gray-100 overflow-hidden">
                      {item.images && item.images.length > 0 ? (
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                        />
                      ) : (
                        <Image
                          src={Noimg}
                          alt="No image"
                          width={300}
                          height={300}
                          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                        />
                      )}
                    </div>
                    
                    <button 
                      onClick={() => handleRemoveFromWishlist(item._id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                      title="Remove from wishlist"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="p-5">
                    <Link href={`/products/${item._id}`}>
                      <h2 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors mb-2 line-clamp-1">
                        {item.name}
                      </h2>
                    </Link>
                    
                    <div className="flex items-center text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(4.5)</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-primary font-bold text-xl">${item.price}</span>
                        <span className="text-gray-500 text-sm line-through ml-2">${Math.round(item.price * 1.2)}</span>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>
                    </div>
                    
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

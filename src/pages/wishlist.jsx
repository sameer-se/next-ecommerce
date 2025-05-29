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
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary">My Wishlist</p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/wishlist">
            <span>Wishlist</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-600 mb-6">Your wishlist is empty</p>
            <Link href="/products">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                Discover Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div 
                key={item._id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-gray-100">
                  {item.images && item.images.length > 0 ? (
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={Noimg}
                      alt="No image"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="p-4">
                  <Link href={`/products/${item._id}`}>
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors mb-2">
                      {item.name}
                    </h2>
                  </Link>
                  
                  <p className="text-primary font-bold mb-4">
                    ${item.price}
                  </p>
                  
                  <div className="flex justify-between">
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary transition-colors"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                    
                    <button 
                      onClick={() => handleRemoveFromWishlist(item._id)}
                      className="text-red-500 hover:text-red-700 p-2"
                      title="Remove from wishlist"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

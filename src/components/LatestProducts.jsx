import React from "react";
import Noimg from "@/assets/noimg.jpeg";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "@/redux/Slice/WishlistSlice";
import { useRouter } from "next/router";

export default function LatestProducts({ product }) {
  let { name, price, images, _id } = product;
  const dispatch = useDispatch();
  const router = useRouter();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.some(item => item._id === _id);
  
  // Ensure price is always available and is a number
  price = typeof price === 'number' ? price : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    dispatch(addToCart({
      _id,
      name,
      price,
      images: images || [],
      quantity: 1
    }));
    
    // Use a more subtle notification instead of alert
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
    notification.textContent = 'Product added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 2000);
  };

  const handleViewDetails = () => {
    router.push(`/products/${_id}`);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(_id));
      
      // Use a more subtle notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = 'Removed from wishlist!';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);
    } else {
      dispatch(addToWishlist({
        _id,
        name,
        price,
        images: images || []
      }));
      
      // Use a more subtle notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = 'Added to wishlist!';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);
    }
  };

  return (
    <div className="group">
      <div 
        onClick={handleViewDetails}
        className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02] cursor-pointer border border-gray-100"
      >
        {/* Discount Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            NEW
          </div>
        </div>
        
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden bg-gray-100 rounded-t-xl">
          {images.length == 0 ? (
            <Image
              src={Noimg}
              alt="Product Image"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              height={300}
              width={300}
            />
          ) : (
            <Image
              src={images[0]}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              height={300}
              width={300}
            />
          )}
          
          {/* Quick Action Buttons */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <button 
                onClick={handleAddToCart}
                className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Add to cart"
              >
                <BsCart2 className="h-5 w-5" />
              </button>
              
              <button 
                onClick={handleToggleWishlist}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
                  isInWishlist 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-primary hover:bg-primary hover:text-white'
                }`}
                aria-label="Add to wishlist"
              >
                <AiOutlineHeart className="h-5 w-5" />
              </button>
              
              <button 
                onClick={handleViewDetails}
                className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Quick view"
              >
                <AiOutlineZoomIn className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize line-clamp-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
          
          <div className="flex items-center text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 ml-2 text-sm">(18 reviews)</span>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-primary font-bold text-xl">${price}</span>
              <span className="text-gray-500 text-sm line-through ml-2">${Math.round(price * 1.2)}</span>
            </div>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">Premium quality furniture piece designed for comfort and style. Perfect addition to any modern home.</p>
          
          <div className="flex gap-2 mt-2">
            <button 
              onClick={handleAddToCart}
              className="flex-1 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <BsCart2 /> Add To Cart
            </button>
            <button 
              onClick={handleViewDetails}
              className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

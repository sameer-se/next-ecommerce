import React from "react";
import Noimg from "@/assets/noimg.jpeg";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "@/redux/Slice/WishlistSlice";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TrendingProducts({ trending }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.some(item => item._id === trending._id);
  
  // Ensure price is always available and is a number
  const price = typeof trending.price === 'number' ? trending.price : 
               typeof trending.prices === 'number' ? trending.prices : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    dispatch(addToCart({
      _id: trending._id,
      name: trending.name,
      price: price,
      images: trending.images || [],
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
    router.push(`/products/${trending._id}`);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(trending._id));
      
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
        _id: trending._id,
        name: trending.name,
        price: price,
        images: trending.images || []
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
    <div>
      <div className="pb-2">
        <div 
          onClick={handleViewDetails}
          className="h-[400px] border-2 rounded-xl hover:shadow-lg hover:scale-105 hover:border-primary relative cursor-pointer"
        >
          <div className="h-[70%] bg-[#F6F7FB] rounded-t-xl">
            {trending.images.length == 0 ? (
              <Image
                alt="noimg"
                src={Noimg}
                height={300}
                width={300}
                className="h-full w-full rounded-t-xl"
              />
            ) : (
              <Image
                src={trending.images[0]}
                alt="product img"
                height={300}
                width={300}
                className="h-full w-full rounded-t-xl"
              />
            )}
          </div>
          <ul className="text-center">
            <li className="text-secondary text-2xl capitalize">
              {trending.name}
            </li>
            <li className="text-[#151875]">code-Y523201</li>
            <li className="text-[#151875]">${trending.prices || trending.price}</li>
          </ul>
          <ul className="flex absolute top-3 left-2 gap-2">
            <li 
              onClick={handleAddToCart}
              className="bg-primary-shade w-8 h-8 flex justify-center items-center p-2 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors"
            >
              <BsCart2 className="h-4 w-4" />
            </li>
            <li 
              onClick={handleToggleWishlist}
              className={`w-8 h-8 flex justify-center items-center p-2 rounded-full cursor-pointer transition-colors ${isInWishlist ? 'bg-primary text-white' : 'bg-primary-shade hover:bg-primary hover:text-white'}`}
            >
              <AiOutlineHeart className="h-4 w-4" />
            </li>
            <li 
              onClick={handleViewDetails}
              className="bg-primary-shade w-8 h-8 flex justify-center items-center p-2 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors"
            >
              <AiOutlineZoomIn className="h-4 w-4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


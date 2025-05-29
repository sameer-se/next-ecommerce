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
    <div>
      <div 
        onClick={handleViewDetails}
        className="border-2 hover:scale-105 hover:shadow-xl hover:border-primary rounded-xl relative cursor-pointer"
      >
        <div className="h-[85%] bg-primary-shade rounded-t-xl">
          {images.length == 0 ? (
            <Image
              src={Noimg}
              alt="product img"
              className="w-full aspect-square object-fill rounded-t-xl"
              height={300}
              width={300}
            />
          ) : (
            <Image
              src={images[0]}
              alt="product img"
              className="w-full aspect-square object-fill rounded-t-xl"
              height={300}
              width={300}
            />
          )}
        </div>
        <ul className="flex justify-between items-center p-4 flex-wrap">
          <li className="text-secondary text-2xl capitalize">
            <p className="h-8 overflow-clip">{name}</p>
          </li>
          <li className="text-[#151875]">$ {price}</li>
        </ul>
        <ul className="absolute top-3 left-2 gap-2">
          <li 
            onClick={handleAddToCart}
            className="bg-primary-shade w-10 h-10 flex justify-center items-center p-2 mb-4 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors"
          >
            <BsCart2 className="h-6 w-6" />
          </li>
          <li 
            onClick={handleToggleWishlist}
            className={`w-10 h-10 flex justify-center items-center p-2 mb-4 rounded-full cursor-pointer transition-colors ${isInWishlist ? 'bg-primary text-white' : 'bg-primary-shade hover:bg-primary hover:text-white'}`}
          >
            <AiOutlineHeart className="h-6 w-6" />
          </li>
          <li 
            onClick={handleViewDetails}
            className="bg-primary-shade w-10 h-10 flex justify-center items-center p-2 mb-4 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors"
          >
            <AiOutlineZoomIn className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </div>
  );
}

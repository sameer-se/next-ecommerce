/* eslint-disable react/jsx-key */
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import { FaShippingFast, FaRegCreditCard, FaShieldAlt, FaExchangeAlt, FaImage } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "@/redux/Slice/WishlistSlice";
import { useRouter } from "next/router";
import { mockProducts, mockTrending } from "@/utils/mockData";
import Noimg from "@/assets/noimg.jpeg";

export default function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.some(item => item._id === product._id);
  
  // Handle wishlist toggle without alerts
  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
      // No alert notification
    } else {
      dispatch(addToWishlist({
        _id: product._id,
        name: product.name,
        price: product.price,
        images: product.images
      }));
      // No alert notification
    }
  };
  
  // Handle quantity changes
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  // Handle add to cart with quantity
  const handleAddToCart = () => {
    setIsLoading(true);
    
    // Simulate loading for demo purposes
    setTimeout(() => {
      dispatch(addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: quantity
      }));
      setIsLoading(false);
      // No alert notification
    }, 800);
  };
  
  // Handle buy now with quantity
  const handleBuyNow = () => {
    setIsLoading(true);
    
    // Simulate loading for demo purposes
    setTimeout(() => {
      dispatch(addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: quantity
      }));
      setIsLoading(false);
      router.push('/cart');
    }, 800);
  };
  
  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedImage(index)
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* HEADER BANNER */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2 capitalize">{product.name}</h1>
          <div className="flex items-center text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* PRODUCT DETAILS */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Slider {...settings} className="product-slider">
                  {product.images && product.images.length > 0 ? (
                    product.images.map((img, index) => (
                      <div key={index} className="outline-none">
                        <div className="h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          <Image
                            src={img || Noimg}
                            alt={`${product.name} - Image ${index + 1}`}
                            width={400}
                            height={400}
                            className="object-contain max-h-[380px]"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = Noimg.src;
                            }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="outline-none">
                      <div className="h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <FaImage className="text-gray-300 w-20 h-20 mb-4" />
                        <p className="text-gray-500 font-medium">No product image available</p>
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images && product.images.length > 0 ? (
                  product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`h-20 w-20 rounded cursor-pointer border-2 flex items-center justify-center bg-gray-50 ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img || Noimg}
                        alt={`Thumbnail ${index + 1}`}
                        width={60}
                        height={60}
                        className="object-contain rounded max-h-[60px] max-w-[60px]"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = Noimg.src;
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="h-20 w-20 rounded border-2 border-transparent flex items-center justify-center bg-gray-50">
                    <FaImage className="text-gray-300 w-6 h-6" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6 flex flex-col">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 capitalize">{product.name}</h1>
              
              {/* Ratings */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <MdStarRate key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">(23 reviews)</span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  <span className="text-gray-500 line-through text-lg">${(product.price * 1.2).toFixed(2)}</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">20% OFF</span>
                </div>
                <p className="text-green-600 mt-1">In Stock</p>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600">
                  {product.description || "Premium quality product designed with attention to detail. This item features excellent craftsmanship, durable materials, and a stylish design that will complement any home decor. Perfect as a gift or for your personal collection."}
                </p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                  >
                    <AiOutlineMinus />
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center"
                  />
                  <button 
                    onClick={increaseQuantity}
                    className="w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : null}
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  disabled={isLoading}
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="inline-block h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : null}
                  Buy Now
                </button>
              </div>
              
              {/* Wishlist and Share */}
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={handleToggleWishlist}
                  className={`flex items-center gap-2 py-2 px-4 rounded-lg border transition-colors duration-300 ${
                    isInWishlist 
                      ? 'bg-pink-50 text-pink-600 border-pink-200' 
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <AiOutlineHeart className={`h-5 w-5 ${isInWishlist ? 'text-pink-600' : 'text-gray-600'}`} />
                  <span>{isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
                </button>
                <button className="flex items-center gap-2 py-2 px-4 rounded-lg bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors duration-300">
                  <RiShareForwardFill className="h-5 w-5 text-gray-600" />
                  <span>Share</span>
                </button>
              </div>
              
              {/* Product Features */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <FaShippingFast className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-full">
                    <FaRegCreditCard className="text-green-600 w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-600">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-50 p-2 rounded-full">
                    <FaShieldAlt className="text-purple-600 w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-600">Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <FaExchangeAlt className="text-orange-600 w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-600">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  try {
    // Find product by ID from mock data
    const productId = ctx.query.slug;
    let product = [...mockProducts, ...mockTrending].find(p => p._id === productId);
    
    // If product not found in mock data, try API
    if (!product) {
      try {
        let res = await axios.get(
          `https://ecommerce-sagartmg2.vercel.app/api/products/${productId}`
        );
        product = res.data.data;
      } catch (apiError) {
        console.error('API error:', apiError);
        // If API fails, use first product from mock data
        product = mockProducts[0];
      }
    }
    
    if (!product) {
      return {
        notFound: true,
        props: {},
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    // Fallback to first product in mock data
    return {
      props: {
        product: mockProducts[0],
      },
    };
  }
}

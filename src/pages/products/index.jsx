/* eslint-disable react/jsx-key */
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsFillGridFill, BsCart2 } from "react-icons/bs";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Noimg from "@/assets/noimg.jpeg";
import { MdStarRate } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { mockProducts, mockCategories } from "@/utils/mockData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/Slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "@/redux/Slice/WishlistSlice";

export default function Products({ products, categories }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [loading, setLoading] = useState({});
  
  // Handle add to cart functionality
  const handleAddToCart = (product) => {
    setLoading(prev => ({ ...prev, [product._id]: 'cart' }));
    
    // Simulate loading for better UX
    setTimeout(() => {
      dispatch(addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: 1
      }));
      setLoading(prev => ({ ...prev, [product._id]: null }));
      // No alert notification
    }, 500);
  };
  
  // Handle wishlist functionality
  const handleToggleWishlist = (product) => {
    setLoading(prev => ({ ...prev, [product._id]: 'wishlist' }));
    
    const isInWishlist = wishlistItems.some(item => item._id === product._id);
    
    // Simulate loading for better UX
    setTimeout(() => {
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
      setLoading(prev => ({ ...prev, [product._id]: null }));
    }, 500);
  };
  
  // Handle quick view functionality
  const handleQuickView = (productId) => {
    router.push(`/products/${productId}`);
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER BANNER */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
          <div className="flex items-center text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* FILTER AND SORT SECTION */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                Premium Furniture Collection
              </h2>
              <p className="text-gray-500">Showing {products.length} products</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <select
                  onChange={(e) => {
                    router.push(`${router.route}?per_page=${e.target.value}`);
                  }}
                  className="appearance-none bg-gray-100 border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Items per page</option>
                  <option value="3">3 per page</option>
                  <option value="5">5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="15">15 per page</option>
                  <option value="20">20 per page</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select
                  onChange={(e) => {
                    router.push(`${router.route}?sort=${e.target.value}`);
                  }}
                  className="appearance-none bg-gray-100 border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sort by</option>
                  <option value="nameasc">Name: A to Z</option>
                  <option value="namedesc">Name: Z to A</option>
                  <option value="priceasc">Price: Low to High</option>
                  <option value="pricedesc">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex bg-gray-100 rounded-lg overflow-hidden">
                <button className="px-4 py-2 bg-primary text-white">
                  <BsFillGridFill />
                </button>
                <button className="px-4 py-2 hover:bg-gray-200 transition-colors">
                  <AiOutlineUnorderedList />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 pb-2 border-b">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      onChange={(e) => {
                        router.push(`${router.route}?search_term=${e.target.name}`);
                      }}
                      type="checkbox"
                      name={`${cat}`}
                      id={`${cat}-${index}`}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor={`${cat}-${index}`} className="ml-3 text-gray-700 capitalize hover:text-primary cursor-pointer">
                      {cat}
                    </label>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-6 mt-8 text-gray-800 pb-2 border-b">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                  <label htmlFor="price-1" className="ml-3 text-gray-700">$0 - $50</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                  <label htmlFor="price-2" className="ml-3 text-gray-700">$50 - $100</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                  <label htmlFor="price-3" className="ml-3 text-gray-700">$100 - $200</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                  <label htmlFor="price-4" className="ml-3 text-gray-700">$200+</label>
                </div>
              </div>
              
              <button className="mt-8 w-full py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* PRODUCTS GRID */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product._id} 
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 cursor-pointer"
                  onClick={() => handleQuickView(product._id)}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    {/* Sale Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        SALE
                      </div>
                    </div>
                    
                    {/* Product Image */}
                    {product.images.length == 0 ? (
                      <Image
                        src={Noimg}
                        alt="Product Image"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        height={300}
                        width={300}
                      />
                    ) : (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        height={300}
                        width={300}
                      />
                    )}
                    
                    {/* Quick Action Buttons */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          disabled={loading[product._id] === 'cart'}
                          className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                          aria-label="Add to cart"
                        >
                          {loading[product._id] === 'cart' ? (
                            <span className="inline-block h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                          ) : (
                            <BsCart2 className="h-5 w-5" />
                          )}
                        </button>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleWishlist(product);
                          }}
                          disabled={loading[product._id] === 'wishlist'}
                          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${
                            wishlistItems.some(item => item._id === product._id) 
                              ? 'bg-primary text-white' 
                              : 'bg-white text-primary hover:bg-primary hover:text-white'
                          }`}
                          aria-label="Add to wishlist"
                        >
                          {loading[product._id] === 'wishlist' ? (
                            <span className="inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                          ) : (
                            <AiOutlineHeart className="h-5 w-5" />
                          )}
                        </button>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickView(product._id);
                          }}
                          className="bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                          aria-label="Quick view"
                        >
                          <AiOutlineMessage className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <Link href={`products/${product._id}`}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    </Link>
                    
                    <div className="flex items-center text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <MdStarRate key={i} className="h-5 w-5" />
                      ))}
                      <span className="text-gray-500 ml-2 text-sm">(23 reviews)</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-primary font-bold text-xl">${product.price}</span>
                        <span className="text-gray-500 text-sm line-through ml-2">${Math.round(product.price * 1.2)}</span>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Stock</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description || "Premium quality furniture piece designed for comfort and style. Perfect addition to any modern home."}</p>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-2">
                        <BsCart2 /> Add To Cart
                      </button>
                      <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>
                  Previous
                </button>
                <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">3</button>
                <span className="px-3 py-1">...</span>
                <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">8</button>
                <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  try {
    // Always use mock data for reliable development
    return {
      props: {
        products: mockProducts,
        categories: mockCategories,
      },
    };
    
    /* Commented out API calls to prevent errors
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products?";
    let params = Object.entries(ctx.query);
    params.forEach((parameter) => {
      url += `${parameter[0]}=${parameter[1]}&`;
    });
    let res = await axios.get(url);

    let categories_res = await axios.get(
      `https://ecommerce-sagartmg2.vercel.app/api/products/categories`
    );
    
    // Handle different possible response structures
    let products = [];
    if (res.data && res.data.data) {
      if (Array.isArray(res.data.data)) {
        products = res.data.data;
      } else if (res.data.data[0] && res.data.data[0].data) {
        products = res.data.data[0].data;
      }
    }
    
    // Use mock data if API fails
    if (!products.length) {
      products = mockProducts;
    }
    
    let categories = categories_res.data || mockCategories;
    
    return {
      props: {
        products,
        categories,
      },
    };
    */
  } catch (error) {
    console.error('Error fetching products data:', error);
    
    // Return mock data if API fails
    return {
      props: {
        products: mockProducts,
        categories: mockCategories,
      },
    };
  }
}

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { BsCart2, BsGrid, BsListUl } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineZoomIn } from 'react-icons/ai';
import { FaFilter, FaSlidersH, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { addToCart } from '@/redux/Slice/CartSlice';
import { addToWishlist, removeFromWishlist } from '@/redux/Slice/WishlistSlice';
import Noimg from '@/assets/noimg.jpeg';
import { mockProducts, mockTrending, mockCategories } from '@/utils/mockData';

export default function Shop() {
  const router = useRouter();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  
  // State for products and filtering
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Initialize products and categories
  useEffect(() => {
    // Combine all products for the shop page
    const allProducts = [...mockProducts, ...mockTrending];
    setProducts(allProducts);
    setFilteredProducts(allProducts);
    setCategories(mockCategories);
  }, []);
  
  // Apply filters when dependencies change
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => 
        product.category === selectedCategory || 
        // If product doesn't have category, assume it's in the first category for demo purposes
        (!product.category && selectedCategory === mockCategories[0])
      );
    }
    
    // Apply price range filter
    result = result.filter(product => {
      const price = product.price || product.prices || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        (product.description && product.description.toLowerCase().includes(term))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => (a.price || a.prices || 0) - (b.price || b.prices || 0));
        break;
      case 'price-high-low':
        result.sort((a, b) => (b.price || b.prices || 0) - (a.price || a.prices || 0));
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      // featured is default, no sorting needed
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, sortBy, searchTerm]);
  
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    
    dispatch(addToCart({
      _id: product._id,
      name: product.name,
      price: product.price || product.prices || 0,
      images: product.images || [],
      quantity: 1
    }));
    
    // Use a subtle notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
    notification.textContent = 'Product added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 2000);
  };

  const handleToggleWishlist = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    
    const isInWishlist = wishlistItems.some(item => item._id === product._id);
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id));
      
      // Use a subtle notification
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
        _id: product._id,
        name: product.name,
        price: product.price || product.prices || 0,
        images: product.images || []
      }));
      
      // Use a subtle notification
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

  const handleViewDetails = (productId) => {
    router.push(`/products/${productId}`);
  };
  
  // Render star ratings
  const renderRating = (rating = 4) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    
    return <div className="flex">{stars}</div>;
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Shop</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Shop</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Top Controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-auto">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors"
              >
                <FaFilter /> 
                <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
                <button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-1 rounded ${viewMode === 'grid' ? 'text-primary' : 'text-gray-400'}`}
                >
                  <BsGrid className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setViewMode('list')} 
                  className={`p-1 rounded ${viewMode === 'list' ? 'text-primary' : 'text-gray-400'}`}
                >
                  <BsListUl className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm h-fit">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="all" className="ml-2 text-gray-700">All Categories</label>
                  </div>
                  
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={category}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={category} className="ml-2 text-gray-700 capitalize">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Price Range</h3>
                <div className="px-2">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">${priceRange[0]}</span>
                    <span className="text-gray-600">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`rating-${rating}`}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                        {renderRating(rating)}
                        <span className="ml-1 text-gray-600">& Up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid/List */}
          <div className={`w-full ${showFilters ? 'md:w-3/4' : 'md:w-full'}`}>
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isInWishlist = wishlistItems.some(item => item._id === product._id);
                  const price = product.price || product.prices || 0;
                  
                  return (
                    <div 
                      key={product._id} 
                      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div 
                        onClick={() => handleViewDetails(product._id)}
                        className="cursor-pointer"
                      >
                        <div className="h-48 bg-gray-100 relative">
                          {product.images && product.images.length > 0 ? (
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <Image
                              src={Noimg}
                              alt="No image available"
                              fill
                              className="object-cover"
                            />
                          )}
                          
                          <div className="absolute top-2 right-2 flex flex-col gap-2">
                            <button 
                              onClick={(e) => handleAddToCart(e, product)}
                              className="bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
                            >
                              <BsCart2 className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={(e) => handleToggleWishlist(e, product)}
                              className={`p-2 rounded-full shadow transition-colors ${
                                isInWishlist 
                                  ? 'bg-primary text-white' 
                                  : 'bg-white hover:bg-primary hover:text-white'
                              }`}
                            >
                              <AiOutlineHeart className="h-5 w-5" />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleViewDetails(product._id);
                              }}
                              className="bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
                            >
                              <AiOutlineZoomIn className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="mb-2">{renderRating()}</div>
                          <h3 className="text-lg font-medium text-gray-900 mb-1 capitalize">{product.name}</h3>
                          <p className="text-primary font-medium">${price.toFixed(2)}</p>
                          {product.description && (
                            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product) => {
                  const isInWishlist = wishlistItems.some(item => item._id === product._id);
                  const price = product.price || product.prices || 0;
                  
                  return (
                    <div 
                      key={product._id} 
                      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div 
                        onClick={() => handleViewDetails(product._id)}
                        className="flex flex-col sm:flex-row cursor-pointer"
                      >
                        <div className="sm:w-1/4 h-48 sm:h-auto bg-gray-100 relative">
                          {product.images && product.images.length > 0 ? (
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <Image
                              src={Noimg}
                              alt="No image available"
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        
                        <div className="sm:w-3/4 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="mb-2">{renderRating()}</div>
                              <h3 className="text-xl font-medium text-gray-900 mb-2 capitalize">{product.name}</h3>
                              <p className="text-primary font-medium text-lg mb-3">${price.toFixed(2)}</p>
                              {product.description && (
                                <p className="text-gray-600">{product.description}</p>
                              )}
                            </div>
                            
                            <div className="flex gap-2">
                              <button 
                                onClick={(e) => handleAddToCart(e, product)}
                                className="bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
                              >
                                <BsCart2 className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={(e) => handleToggleWishlist(e, product)}
                                className={`p-2 rounded-full shadow transition-colors ${
                                  isInWishlist 
                                    ? 'bg-primary text-white' 
                                    : 'bg-white hover:bg-primary hover:text-white'
                                }`}
                              >
                                <AiOutlineHeart className="h-5 w-5" />
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  handleViewDetails(product._id);
                                }}
                                className="bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
                              >
                                <AiOutlineZoomIn className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                          
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              handleAddToCart(e, product);
                            }}
                            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">&laquo;</button>
                  <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
                  <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">&raquo;</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

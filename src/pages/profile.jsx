import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FaUser, FaShoppingBag, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { setReduxUser } from '@/redux/Slice/UserSlice';
import Image from 'next/image';

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [activeTab, setActiveTab] = useState('profile');
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  
  // Mock order history data - in a real app, this would come from an API
  const orderHistory = [
    { id: '1001', date: '2024-05-20', status: 'Delivered', total: 125.99 },
    { id: '1002', date: '2024-05-15', status: 'Processing', total: 89.50 },
    { id: '1003', date: '2024-05-10', status: 'Delivered', total: 210.75 },
  ];

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      router.push('/login');
      return;
    }
    
    // Initialize form data with user information
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || ''
    });
  }, [user, router]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // In a real app, you would make an API call here
    // For now, we'll just update the Redux store
    setTimeout(() => {
      dispatch(setReduxUser({
        ...user,
        ...formData
      }));
      setIsUpdating(false);
      
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
      notification.textContent = 'Profile updated successfully!';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 2000);
    }, 1000);
  };
  
  const handleLogout = () => {
    // Clear user data from Redux store
    dispatch(setReduxUser(null));
    
    // Redirect to login page
    router.push('/login');
  };

  if (!user) {
    return <div className="container mx-auto p-8 text-center">Loading...</div>;
  }

  return (
    <div>
      {/* HEADER BANNER */}
      <div className="bg-primary-shade w-full">
        <div className="container m-4 p-4">
          <p className="text-3xl font text-primary">My Account</p>
          <Link href="/" className="">
            <span>Home</span>
          </Link>
          <span>.</span>
          <Link href="/profile">
            <span>Profile</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto p-4 my-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary-shade rounded-full p-4">
                  <FaUser className="text-primary text-2xl" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{user.name || 'User'}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-2 p-3 rounded-md ${activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                >
                  <FaUser />
                  <span>Profile Information</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-2 p-3 rounded-md ${activeTab === 'orders' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                >
                  <FaShoppingBag />
                  <span>Order History</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center space-x-2 p-3 rounded-md ${activeTab === 'wishlist' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
                >
                  <FaHeart />
                  <span>Wishlist</span>
                </button>
                
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 p-3 rounded-md text-red-500 hover:bg-red-50"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Profile Information */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                  
                  <form className="space-y-6" onSubmit={handleUpdateProfile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                          readOnly
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Role
                        </label>
                        <input 
                          type="text" 
                          value={user.role || 'Customer'}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                          readOnly
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        rows="3"
                        placeholder="Enter your shipping address"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        disabled={isUpdating}
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isUpdating ? 'Updating...' : 'Update Profile'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Order History */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Order History</h2>
                  
                  {orderHistory.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Order ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Total
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {orderHistory.map((order) => (
                            <tr key={order.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">{order.date}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${order.total.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-primary hover:text-secondary">
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">You haven&apos;t placed any orders yet.</p>
                      <Link href="/products">
                        <button className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors">
                          Start Shopping
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {/* Wishlist */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
                  
                  {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishlistItems.map((item) => (
                        <div key={item._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 h-48 flex items-center justify-center">
                            {item.images && item.images.length > 0 ? (
                              <Image 
                                src={item.images[0]} 
                                alt={item.name} 
                                width={200} 
                                height={200} 
                                className="object-cover h-full w-full"
                              />
                            ) : (
                              <div className="text-gray-400 text-6xl">
                                <FaHeart />
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                            <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                            <div className="mt-4 flex justify-between">
                              <button 
                                onClick={() => {
                                  dispatch(addToCart({
                                    _id: item._id,
                                    name: item.name,
                                    price: item.price,
                                    images: item.images,
                                    quantity: 1
                                  }));
                                  
                                  // Show notification
                                  const notification = document.createElement('div');
                                  notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
                                  notification.textContent = 'Added to cart!';
                                  document.body.appendChild(notification);
                                  
                                  setTimeout(() => {
                                    notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
                                    setTimeout(() => document.body.removeChild(notification), 500);
                                  }, 2000);
                                }}
                                className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary transition-colors"
                              >
                                Add to Cart
                              </button>
                              <button 
                                onClick={() => {
                                  dispatch(removeFromWishlist(item._id));
                                  
                                  // Show notification
                                  const notification = document.createElement('div');
                                  notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50';
                                  notification.textContent = 'Removed from wishlist!';
                                  document.body.appendChild(notification);
                                  
                                  setTimeout(() => {
                                    notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
                                    setTimeout(() => document.body.removeChild(notification), 500);
                                  }, 2000);
                                }}
                                className="text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-6xl mb-4 flex justify-center">
                        <FaHeart />
                      </div>
                      <p className="text-xl mb-4">Your wishlist is empty</p>
                      <Link href="/products" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors">
                        Browse Products
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUser } from "@/redux/Slice/UserSlice";

// Icons
import { FiSearch, FiMail, FiPhone, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { BsCart2, BsHeart } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// Logo
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const user = useSelector((state) => state.user.value);
  
  // State for UI controls
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set active link based on current path
    const path = router.pathname;
    setActiveLink(path);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname]);
  
  // Handle search submission
  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.search_term.value.trim();
    if (searchTerm) {
      router.push(`/products?search_term=${searchTerm}`);
      setSearchOpen(false);
    }
  }
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close other menus when opening mobile menu
    if (!mobileMenuOpen) {
      setSearchOpen(false);
      setDropdownOpen(false);
    }
  };
  
  // Toggle search form
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    // Close other menus when opening search
    if (!searchOpen) {
      setMobileMenuOpen(false);
      setDropdownOpen(false);
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    dispatch(setReduxUser(null));
    router.push('/login');
    setDropdownOpen(false);
  };
  
  return (
    <>
      
      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 w-full bg-white ${scrolled ? 'shadow-md' : ''} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold text-primary hover:text-secondary transition-colors">Hekto</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={`nav-link ${activeLink === '/' ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'} transition-colors`}>
                Home
              </Link>
              <Link href="/pages" className={`nav-link ${activeLink === '/pages' ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'} transition-colors`}>
                Pages
              </Link>
              <Link href="/products" className={`nav-link ${activeLink === '/products' ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'} transition-colors`}>
                Products
              </Link>
              <Link href="/blog" className={`nav-link ${activeLink === '/blog' ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'} transition-colors`}>
                Blog
              </Link>
              <Link href="/shop" className={`nav-link ${activeLink === '/shop' ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'} transition-colors`}>
                Shop
              </Link>
              <Link href="/contact" className={`nav-link ${activeLink === '/contact' ? 'text-secondary font-medium' : 'text-gray-700 hover:text-secondary'} transition-colors`}>
                Contact
              </Link>
            </nav>
            
            {/* Desktop Right Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Search Icon */}
              <button 
                onClick={toggleSearch} 
                className="text-gray-700 hover:text-secondary transition-colors focus:outline-none"
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>
              
              {/* Wishlist Icon */}
              <Link 
                href="/wishlist" 
                className="text-gray-700 hover:text-secondary transition-colors relative"
                aria-label="Wishlist"
              >
                <BsHeart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              
              {/* Cart Icon */}
              <Link 
                href="/cart" 
                className="text-gray-700 hover:text-secondary transition-colors relative"
                aria-label="Cart"
              >
                <BsCart2 className="w-5 h-5" />
                {cartTotalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartTotalQuantity}
                  </span>
                )}
              </Link>
              
              {/* User Account */}
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)} 
                  className="flex items-center text-gray-700 hover:text-secondary transition-colors focus:outline-none"
                  aria-label="User account"
                >
                  <FiUser className="w-5 h-5 mr-1" />
                  <span className="hidden xl:inline-block">
                    {user ? (user.name?.split(' ')[0] || 'Account') : 'Account'}
                  </span>
                  <IoIosArrowDown className="ml-1 w-4 h-4" />
                </button>
                
                {/* User Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {user ? (
                      <>
                        <Link 
                          href="/profile" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDropdownOpen(false)}
                        >
                          My Profile
                        </Link>
                        <Link 
                          href="/orders" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDropdownOpen(false)}
                        >
                          My Orders
                        </Link>
                        <button 
                          onClick={handleLogout} 
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link 
                          href="/login" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Login
                        </Link>
                        <Link 
                          href="/signup" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 lg:hidden">
              <Link 
                href="/cart" 
                className="text-gray-700 hover:text-secondary transition-colors relative"
                aria-label="Cart"
              >
                <BsCart2 className="w-5 h-5" />
                {cartTotalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartTotalQuantity}
                  </span>
                )}
              </Link>
              
              <button 
                onClick={toggleMobileMenu} 
                className="text-gray-700 hover:text-secondary transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Search Bar (conditional) */}
          {searchOpen && (
            <div className="py-4 border-t border-gray-200">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="search"
                  name="search_term"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  autoFocus
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-secondary transition-colors"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>
        
        {/* Mobile Menu (conditional) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className={`py-2 ${activeLink === '/' ? 'text-secondary font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/pages" 
                  className={`py-2 ${activeLink === '/pages' ? 'text-secondary font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pages
                </Link>
                <Link 
                  href="/products" 
                  className={`py-2 ${activeLink === '/products' ? 'text-secondary font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  href="/blog" 
                  className={`py-2 ${activeLink === '/blog' ? 'text-secondary font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/shop" 
                  className={`py-2 ${activeLink === '/shop' ? 'text-secondary font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link 
                  href="/contact" 
                  className={`py-2 ${activeLink === '/contact' ? 'text-secondary font-medium' : 'text-gray-700'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="pt-2 border-t border-gray-200">
                  <Link 
                    href="/wishlist" 
                    className="flex items-center py-2 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <BsHeart className="mr-3 w-5 h-5" />
                    <span>Wishlist</span>
                    {wishlistItems.length > 0 && (
                      <span className="ml-auto bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlistItems.length}
                      </span>
                    )}
                  </Link>
                  
                  {user ? (
                    <>
                      <Link 
                        href="/profile" 
                        className="flex items-center py-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FiUser className="mr-3 w-5 h-5" />
                        <span>My Profile</span>
                      </Link>
                      <button 
                        onClick={handleLogout} 
                        className="flex items-center py-2 text-red-600 w-full"
                      >
                        <FiUser className="mr-3 w-5 h-5" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <Link 
                      href="/login" 
                      className="flex items-center py-2 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FiUser className="mr-3 w-5 h-5" />
                      <span>Login / Register</span>
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

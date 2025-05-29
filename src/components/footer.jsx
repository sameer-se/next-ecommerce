import { FiSearch, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaCreditCard, FaShippingFast, FaHeadset, FaGift } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  function handelSearch(e) {
    e.preventDefault();
    router.push("/products?search_term=" + e.target.search_term.value);
  }
  return (
    <div>
      {/* Features Section */}
      <div className="bg-gray-50 py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaShippingFast className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Free Shipping</h3>
                <p className="text-gray-600 text-sm">Free shipping on all orders over $99</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaCreditCard className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Secure Payment</h3>
                <p className="text-gray-600 text-sm">100% secure payment methods</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaHeadset className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Dedicated support team</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaGift className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Special Offers</h3>
                <p className="text-gray-600 text-sm">Save up to 25% on your first order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <h2 className="text-3xl font-bold text-white">Hekto</h2>
              </Link>
              
              <p className="text-gray-400 mb-6">
                Premium furniture and home decor for modern living. Quality craftsmanship for every room.
              </p>
              
              <form className="flex mb-6" onSubmit={handelSearch}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-gray-200 px-4 py-3 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-r-md transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* Categories */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:bottom-[-8px]">
                  Categories
                </span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-primary transition duration-300">
                    Living Room Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-primary transition duration-300">
                    Bedroom Collections
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-primary transition duration-300">
                    Dining & Kitchen
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-primary transition duration-300">
                    Office Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-primary transition duration-300">
                    Home Decor & Accessories
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:bottom-[-8px]">
                  Customer Service
                </span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/pages" className="text-gray-400 hover:text-primary transition duration-300">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/pages" className="text-gray-400 hover:text-primary transition duration-300">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="/pages" className="text-gray-400 hover:text-primary transition duration-300">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/pages" className="text-gray-400 hover:text-primary transition duration-300">
                    FAQs & Help
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-primary transition duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block">
                <span className="after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-primary after:left-0 after:bottom-[-8px]">
                  Contact Us
                </span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiPhone className="text-primary flex-shrink-0" />
                  <span className="text-gray-400">+44 20 7946 0958</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiMail className="text-primary flex-shrink-0" />
                  <span className="text-gray-400">support@hekto.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

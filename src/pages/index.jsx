import Image from "next/image";
import Shell from "@/assets/shell.png";
import TrendingProducts from "@/components/TrendingProducts";
import LatestProducts from "@/components/LatestProducts";
import axios from "axios";
import { mockProducts, mockTrending, mockCategories } from "@/utils/mockData";
import Link from "next/link";
import {
  FaArrowRight,
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export default function Home({ products, trending }) {
  return (
    <div className="overflow-x-hidden">
      <main>
        {/* HERO BANNER */}
        <div className="bg-gradient-to-r from-[#F2F0FF] to-[#E6E3FF] py-12 overflow-hidden">
          <div className="container mx-auto px-4 lg:flex items-center">
            <div className="lg:w-[50%] animate-fadeIn">
              <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
                <p className="text-secondary font-medium mb-3 text-lg lg:text-2xl xl:text-3xl">
                  Best Furniture For Your Home
                </p>
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  New Furniture Collection <br /> Trends in{" "}
                  {new Date().getFullYear()}
                </h1>
                <p className="mb-6 text-gray-600 lg:text-lg xl:text-xl leading-relaxed">
                  Discover our carefully curated collection of premium furniture
                  pieces designed to transform your living space into a stylish
                  sanctuary.
                </p>
                <div className="flex gap-4">
                  <Link href="/shop">
                    <button className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-secondary transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                      Shop Now <FaArrowRight />
                    </button>
                  </Link>
                  <Link href="/products">
                    <button className="border-2 border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                      View Collection
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0 relative animate-slideInRight">
              <div className="absolute h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] bg-circle opacity-30 rounded-full animate-pulse"></div>
              <div className="absolute h-[280px] w-[280px] sm:h-[420px] sm:w-[420px] bg-circle opacity-30 rounded-full animate-pulse delay-300 left-12"></div>
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500 hover:rotate-3">
                <Image
                  className="h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] drop-shadow-2xl"
                  src={Shell}
                  alt="Premium Furniture"
                  height={450}
                  width={450}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY HIGHLIGHTS */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-center font-bold text-3xl md:text-4xl mb-2">
            Shop By Category
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Browse our extensive collection of furniture categories to find
            exactly what you need
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {mockCategories.slice(0, 4).map((category, index) => (
              <Link href={`/category/${category}`} key={index}>
                <div className="bg-gray-100 rounded-xl p-6 text-center h-40 flex flex-col items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl cursor-pointer">
                  <h3 className="text-xl font-semibold capitalize">
                    {category}
                  </h3>
                  <p className="mt-2 text-sm">View Collection</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* TRENDING PRODUCTS */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Trending Products
                </h2>
                <p className="text-gray-600">
                  Discover our most popular furniture pieces
                </p>
              </div>
              <Link
                href="/products"
                className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-secondary"
              >
                View All Products <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {trending.map((trending) => (
                <TrendingProducts trending={trending} key={trending._id} />
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-center font-bold text-3xl md:text-4xl mb-2">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We pride ourselves on providing exceptional service and quality
            products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaTruck className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $50
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MdPayment className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment methods</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaHeadset className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support anytime</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-105">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Money-Back Guarantee
              </h3>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
          </div>
        </div>

        {/* LATEST PRODUCTS */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-bold text-3xl md:text-4xl mb-2">
              Latest Products
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our newest additions to elevate your home
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button className="px-6 py-2 rounded-full bg-primary text-white hover:bg-secondary transition-all duration-300">
                New Arrival
              </button>
              <button className="px-6 py-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-all duration-300">
                Best Seller
              </button>
              <button className="px-6 py-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-all duration-300">
                Featured
              </button>
              <button className="px-6 py-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-all duration-300">
                Special
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <LatestProducts product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-bold text-3xl md:text-4xl mb-2">
              What Our Customers Say
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &ldquo;The quality of the furniture exceeded my expectations.
                  The delivery was prompt and the customer service was
                  excellent.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-500 text-sm">Loyal Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &ldquo;I&apos;ve purchased multiple items from this store and
                  have always been impressed with the quality and durability of
                  their products.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Thompson</h4>
                    <p className="text-gray-500 text-sm">Repeat Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &ldquo;The modern design and comfort of my new sofa has
                  transformed my living room. I couldn&apos;t be happier with my
                  purchase.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Emily Davis</h4>
                    <p className="text-gray-500 text-sm">New Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG PREVIEW */}
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Latest From Our Blog
              </h2>
              <p className="text-gray-600">
                Discover tips, trends, and inspiration for your home
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-secondary"
            >
              View All Posts <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-[1.02]">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">May 15, 2024</p>
                <h3 className="text-xl font-semibold mb-3">
                  How to Choose the Perfect Sofa for Your Living Room
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover expert tips on selecting a sofa that combines style,
                  comfort, and durability.
                </p>
                <Link
                  href="/blog/perfect-sofa"
                  className="text-primary hover:text-secondary inline-flex items-center"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-[1.02]">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">May 8, 2024</p>
                <h3 className="text-xl font-semibold mb-3">
                  5 Interior Design Trends to Watch in 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay ahead of the curve with these emerging interior design
                  trends that are defining homes this year.
                </p>
                <Link
                  href="/blog/design-trends-2024"
                  className="text-primary hover:text-secondary inline-flex items-center"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:scale-[1.02]">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">April 29, 2024</p>
                <h3 className="text-xl font-semibold mb-3">
                  Small Space Solutions: Furniture for Compact Living
                </h3>
                <p className="text-gray-600 mb-4">
                  Maximize your small living space with these clever furniture
                  solutions and design tips.
                </p>
                <Link
                  href="/blog/small-space-solutions"
                  className="text-primary hover:text-secondary inline-flex items-center"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    // Always use mock data for reliable development
    return {
      props: {
        products: mockProducts,
        trending: mockTrending,
      },
    };

    /* Commented out API calls to prevent errors
    // Fetch latest products
    let res = await axios.get(
      "https://ecommerce-sagartmg2.vercel.app/api/products?per_page=8"
    );
    
    // Fetch trending products
    let trending_res = await axios.get(
      `https://ecommerce-sagartmg2.vercel.app/api/products/trending`
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
    
    // Handle trending products response
    let trending = [];
    if (trending_res.data && trending_res.data.data) {
      trending = trending_res.data.data;
    } else if (trending_res.data) {
      trending = trending_res.data;
    }
    
    // Use mock data if API fails to provide data
    if (!products.length) {
      products = mockProducts;
    }
    
    if (!trending.length) {
      trending = mockTrending;
    }
    
    return {
      props: {
        products,
        trending,
      },
    };
    */
  } catch (error) {
    console.error("Error fetching data:", error);

    // Return mock data if API fails
    return {
      props: {
        products: mockProducts,
        trending: mockTrending,
      },
    };
  }
}

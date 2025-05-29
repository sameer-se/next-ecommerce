import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaSearch, FaArrowRight } from 'react-icons/fa';

// Mock blog data
const blogPosts = [
  {
    id: 'perfect-sofa',
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    excerpt: 'Discover expert tips on selecting a sofa that combines style, comfort, and durability for your living space.',
    content: 'When choosing a sofa for your living room, consider the size of your space, the style of your existing décor, and the comfort level you desire. Measure your space carefully before purchasing, and think about the layout of your room. Consider the frame material, cushion filling, and fabric durability, especially if you have children or pets. Test the sofa for comfort if possible, and don\'t forget to check the warranty and return policy.',
    category: 'Furniture',
    date: 'May 15, 2024',
    author: 'Sarah Johnson',
    tags: ['sofa', 'living room', 'furniture', 'interior design'],
    imageUrl: '/placeholder.jpg',
    featured: true
  },
  {
    id: 'design-trends-2024',
    title: '5 Interior Design Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with these emerging interior design trends that are defining homes this year.',
    content: 'The interior design trends of 2024 include sustainable materials, curved furniture, nature-inspired elements, bold colors, and multifunctional spaces. Sustainable materials like bamboo, cork, and recycled plastics are becoming increasingly popular as environmental consciousness grows. Curved furniture adds a soft, welcoming feel to spaces, while nature-inspired elements bring the outdoors in. Bold colors, particularly jewel tones, are making a comeback, and multifunctional spaces are essential as more people work from home.',
    category: 'Design Trends',
    date: 'May 8, 2024',
    author: 'Michael Thompson',
    tags: ['trends', 'interior design', '2024', 'home decor'],
    imageUrl: '/placeholder.jpg',
    featured: true
  },
  {
    id: 'small-space-solutions',
    title: 'Small Space Solutions: Furniture for Compact Living',
    excerpt: 'Maximize your small living space with these clever furniture solutions and design tips.',
    content: 'For small spaces, consider multifunctional furniture like sofa beds, extendable dining tables, and ottomans with storage. Wall-mounted shelves and cabinets save floor space, while mirrors create the illusion of a larger room. Choose light colors for walls and large furniture pieces to make the space feel more open. Consider furniture with exposed legs to create a sense of openness, and use vertical space effectively with tall bookcases or shelving units.',
    category: 'Small Spaces',
    date: 'April 29, 2024',
    author: 'Emily Davis',
    tags: ['small spaces', 'compact living', 'furniture', 'space-saving'],
    imageUrl: '/placeholder.jpg',
    featured: true
  },
  {
    id: 'sustainable-furniture',
    title: 'Sustainable Furniture: Eco-Friendly Choices for Your Home',
    excerpt: 'Learn about sustainable furniture options that are both stylish and environmentally responsible.',
    content: 'Sustainable furniture includes pieces made from reclaimed wood, bamboo, or other renewable materials, as well as items produced using eco-friendly manufacturing processes. Look for certifications like FSC (Forest Stewardship Council) for wood products, or GREENGUARD for low chemical emissions. Consider buying vintage or secondhand furniture to reduce waste, and look for companies with transparent supply chains and ethical labor practices. Investing in high-quality, durable pieces that will last for years is also a sustainable choice.',
    category: 'Sustainability',
    date: 'April 22, 2024',
    author: 'David Wilson',
    tags: ['sustainability', 'eco-friendly', 'furniture', 'green living'],
    imageUrl: '/placeholder.jpg'
  },
  {
    id: 'color-psychology',
    title: 'Color Psychology in Interior Design: How Colors Affect Your Mood',
    excerpt: 'Explore how different colors in your home can influence your emotions and well-being.',
    content: 'Colors have a profound effect on our mood and emotions. Blue promotes calm and relaxation, making it ideal for bedrooms. Yellow brings energy and happiness, perfect for kitchens or dining areas. Green connects us to nature and promotes balance, while red stimulates conversation and appetite, suitable for dining rooms in small doses. Purple adds luxury and creativity, and neutral tones provide versatility and timelessness. Consider the purpose of each room when choosing colors, and remember that lighting can significantly affect how colors appear.',
    category: 'Interior Design',
    date: 'April 15, 2024',
    author: 'Jessica Brown',
    tags: ['color psychology', 'interior design', 'home decor', 'mood'],
    imageUrl: '/placeholder.jpg'
  },
  {
    id: 'bedroom-makeover',
    title: 'Bedroom Makeover: Transform Your Space on a Budget',
    excerpt: 'Discover affordable ways to refresh your bedroom and create a relaxing retreat.',
    content: 'Transform your bedroom on a budget by repainting the walls, updating bedding, adding new pillows, or installing different lighting. Rearranging furniture can give the room a fresh feel without spending anything. Consider DIY projects like painting furniture or creating your own artwork. Add plants for a touch of nature, and declutter to create a more peaceful environment. Shop secondhand for unique pieces, and update hardware on dressers or nightstands for an inexpensive refresh.',
    category: 'DIY & Budget',
    date: 'April 8, 2024',
    author: 'Amanda Lee',
    tags: ['bedroom', 'budget', 'makeover', 'DIY'],
    imageUrl: '/placeholder.jpg'
  }
];

const categories = [
  'All',
  'Furniture',
  'Design Trends',
  'Small Spaces',
  'Sustainability',
  'Interior Design',
  'DIY & Budget'
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  
  // Featured posts for the hero section
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Discover tips, trends, and inspiration for creating your perfect home
          </p>
          
          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <FaUser className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary hover:text-secondary inline-flex items-center">
                    Read More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            {/* Search and Filter */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Blog Post List */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gray-200"></div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mr-3">
                          {post.category}
                        </span>
                        <FaCalendarAlt className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <Link href={`/blog/${post.id}`} className="text-primary hover:text-secondary inline-flex items-center">
                          Read More <FaArrowRight className="ml-2" />
                        </Link>
                        <div className="text-gray-500 text-sm">
                          <FaUser className="inline mr-2" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* About */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">About Our Blog</h3>
              <p className="text-gray-600 mb-4">
                Welcome to our furniture blog, where we share tips, trends, and inspiration to help you create the perfect living space.
              </p>
              <Link href="/about" className="text-primary hover:text-secondary inline-flex items-center">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== 'All').map((category) => (
                  <li key={category} className="flex justify-between items-center">
                    <button
                      className="text-gray-700 hover:text-primary transition-colors duration-300"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {blogPosts.filter(post => post.category === category).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4 opacity-90">
                Stay updated with our latest articles, tips, and special offers.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com", 
      "ecommerce-sagartmg2.vercel.app",
      "via.placeholder.com",
      "images.unsplash.com"
    ],
    unoptimized: true
  },
  // Ensure Next.js doesn't fail on build with missing files
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  }
};

module.exports = nextConfig;

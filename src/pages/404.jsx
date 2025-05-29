import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaShoppingBag,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Next E-Commerce</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist"
        />
      </Head>

      {/* Header Banner */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">404 Error</h1>
          <div className="flex items-center text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Page Not Found</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-[60vh] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Illustration */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 flex items-center justify-center md:w-1/2">
                <div className="text-center">
                  <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <FaExclamationTriangle className="text-primary text-6xl" />
                  </div>
                  <h2 className="text-5xl font-bold text-primary mb-2">404</h2>
                  <p className="text-gray-600">Page Not Found</p>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 md:p-12 md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-600 mb-8">
                  The page you&apos;re looking for doesn&apos;t exist or has
                  been moved. Don&apos;t worry, you can find plenty of other
                  things on our homepage.
                </p>

                <div className="space-y-4 ">
                  <div className="flex flex-col gap-4">
                    <Link href="/">
                      <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                        <FaHome /> Return to Home
                      </button>
                    </Link>
                    <Link href="/products">
                      <button className="w-full border border-primary text-primary py-3 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                        <FaShoppingBag /> Browse Products
                      </button>
                    </Link>
                  </div>

                  <div className="pt-6 border-t mt-2">
                    <p className="text-gray-500 text-sm mb-4">
                      Or try searching for what you need:
                    </p>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full py-3 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                        <FaSearch />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

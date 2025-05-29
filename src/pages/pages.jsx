import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShippingFast, FaMoneyBillWave, FaHeadset, FaShieldAlt, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// FAQ Accordion Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        {isOpen ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
      </button>
      <div className={`mt-2 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default function Pages() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER BANNER */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Pages</h1>
          <div className="flex items-center text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Pages</span>
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Our Company</h2>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2015, our furniture company began with a simple mission: to create beautiful, functional, and affordable furniture for modern homes. What started as a small workshop has grown into a beloved brand known for quality craftsmanship and innovative designs.
              </p>
              <p className="text-gray-600">
                We believe that everyone deserves to live in a space that reflects their personality and meets their needs. That&apos;s why we work with talented designers to create furniture pieces that combine style, comfort, and practicality.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Quality</h4>
                  <p className="text-gray-600">We use only the finest materials and employ skilled craftspeople to ensure every piece meets our high standards.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Sustainability</h4>
                  <p className="text-gray-600">We&apos;re committed to environmentally responsible practices, from sourcing materials to packaging.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
                  <p className="text-gray-600">We constantly explore new designs and technologies to create furniture that meets the evolving needs of our customers.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Customer Focus</h4>
                  <p className="text-gray-600">Your satisfaction is our priority. We&apos;re dedicated to providing exceptional service from browsing to delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SERVICES SECTION */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShippingFast className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Free Shipping</h3>
              <p className="text-gray-600 text-center">
                We offer free shipping on all orders over $50. Your furniture will be carefully packaged and delivered to your doorstep.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaMoneyBillWave className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Easy Returns</h3>
              <p className="text-gray-600 text-center">
                Not satisfied with your purchase? We offer a 30-day return policy for all our products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHeadset className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-center">
                Our customer service team is available around the clock to answer your questions and address concerns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShieldAlt className="text-primary text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Secure Payment</h3>
              <p className="text-gray-600 text-center">
                Shop with confidence knowing that your payment information is protected by industry-leading security measures.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SHIPPING & RETURNS SECTION */}
      <section id="shipping" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Shipping & Returns</h2>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Shipping Policy</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p><strong>Processing Time:</strong> Orders are typically processed within 1-2 business days.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p><strong>Shipping Methods:</strong> We offer standard shipping (5-7 business days) and express shipping (2-3 business days).</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p><strong>Free Shipping:</strong> All orders over $50 qualify for free standard shipping.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p><strong>International Shipping:</strong> We ship to select countries. International shipping rates and delivery times vary by location.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Return Policy</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p><strong>Return Window:</strong> You may return most items within 30 days of delivery for a full refund.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p><strong>Condition:</strong> Items must be in their original condition and packaging.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p><strong>Return Shipping:</strong> Return shipping costs are the responsibility of the customer unless the return is due to our error.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p><strong>Refund Process:</strong> Refunds are typically processed within 5-7 business days after we receive the returned item.</p>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-700">
                  <strong>Note:</strong> Custom-made furniture and clearance items are not eligible for return unless they arrive damaged or defective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <FAQItem 
                question="How long will it take to receive my order?" 
                answer="Standard shipping typically takes 5-7 business days after processing, while express shipping takes 2-3 business days. Processing time is usually 1-2 business days."
              />
              
              <FAQItem 
                question="Do you offer assembly services?" 
                answer="Yes, we offer assembly services for an additional fee. You can select this option during checkout. Our professional team will assemble your furniture at your home."
              />
              
              <FAQItem 
                question="What if I receive damaged furniture?" 
                answer="If your furniture arrives damaged, please contact our customer service team within 48 hours with photos of the damage. We'll arrange for a replacement or refund."
              />
              
              <FAQItem 
                question="Can I modify my order after it's been placed?" 
                answer="You can modify or cancel your order within 24 hours of placing it. After that, the order may have entered processing and cannot be changed."
              />
              
              <FAQItem 
                question="Do you offer financing options?" 
                answer="Yes, we offer financing options through our partner financial institutions. You can select the financing option at checkout to see if you qualify."
              />
              
              <FAQItem 
                question="What materials do you use in your furniture?" 
                answer="We use a variety of high-quality materials including solid wood, engineered wood, metal, glass, and premium upholstery fabrics. Each product page specifies the materials used."
              />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Still have questions? Contact our customer support team.</p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300">
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* TERMS & PRIVACY SECTION */}
      <section id="terms" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Terms & Privacy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary">Terms of Service</h3>
                <p className="text-gray-600 mb-4">
                  Our terms of service outline the rules and guidelines for using our website and purchasing our products.
                </p>
                <Link href="/terms" className="text-primary hover:text-secondary inline-flex items-center">
                  Read Full Terms <FaArrowRight className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary">Privacy Policy</h3>
                <p className="text-gray-600 mb-4">
                  Our privacy policy explains how we collect, use, and protect your personal information when you use our website.
                </p>
                <Link href="/privacy" className="text-primary hover:text-secondary inline-flex items-center">
                  Read Privacy Policy <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

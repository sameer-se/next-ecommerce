import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Contact</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      123 Commerce Street, Shopville, SV 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600">info@yourstore.com</p>
                    <p className="text-gray-600">support@yourstore.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaClock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday - Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us A Message
              </h2>

              {submitSuccess && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-500">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Your message has been sent successfully! We&apos;ll get
                        back to you soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Location
            </h2>
            <div className="h-96 w-full rounded-lg overflow-hidden">
              {/* Replace with actual map implementation if needed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-gray-600">
                    Map placeholder - In a real application, you would integrate
                    Google Maps or another mapping service here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  What are your shipping rates?
                </h3>
                <p className="text-gray-600">
                  We offer free shipping on all orders over $50. For orders
                  under $50, a flat shipping rate of $5.99 applies.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  How can I track my order?
                </h3>
                <p className="text-gray-600">
                  Once your order ships, you will receive a tracking number via
                  email. You can use this number to track your package on our
                  website or the carrier&apos;s website.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  What is your return policy?
                </h3>
                <p className="text-gray-600">
                  We accept returns within 30 days of purchase. Items must be in
                  their original condition with tags attached. Please contact
                  our customer service team to initiate a return.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International
                  shipping rates vary based on location and order size. Customs
                  fees may apply depending on your country&apos;s regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

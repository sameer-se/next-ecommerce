import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// Icons
import { FaFacebookF, FaGoogle, FaTwitter, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaUser, FaUserTag } from "react-icons/fa";

export default function Signup() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    message: ""
  });
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let validation = true;
    
    // Reset errors
    setErrors({
      name: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
      message: ""
    });
    
    // Validate name
    if (!name) {
      setErrors(prev => ({ ...prev, name: "Full name is required" }));
      validation = false;
    }
    
    // Validate email
    if (!email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      validation = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
      validation = false;
    }
    
    // Validate role
    if (!role) {
      setErrors(prev => ({ ...prev, role: "Please select a role" }));
      validation = false;
    }
    
    // Validate password
    if (!password) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      validation = false;
    } else if (password.length < 6) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 6 characters" }));
      validation = false;
    }
    
    // Validate confirm password
    if (!confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Please confirm your password" }));
      validation = false;
    } else if (password !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
      validation = false;
    }
    
    if (validation) {
      setIsLoading(true);
      
      // For development, simulate API call
      setTimeout(() => {
        // Show success notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
        notification.textContent = 'Account created successfully! Redirecting to login...';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
          setTimeout(() => document.body.removeChild(notification), 500);
          // Redirect to login page after successful signup
          router.push('/login');
        }, 2000);
        
        setIsLoading(false);
      }, 1500);
      
      /* Commented out API call to prevent errors
      fetch("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          password: password,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Signup failed');
          }
          return response.json();
        })
        .then(data => {
          // Show success message and redirect to login
          router.push("/login");
        })
        .catch(err => {
          console.error(err);
          if (err.response?.data?.errors && err.response.data.errors.length > 0) {
            let temp = {};
            err.response.data.errors.forEach((individual_error) => {
              temp[individual_error.param] = individual_error.msg;
            });
            setErrors(prev => ({ ...prev, ...temp }));
          } else {
            setErrors(prev => ({ ...prev, message: "Registration failed. Please try again." }));
          }
          setIsLoading(false);
        });
      */
    }
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Sign Up</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Signup Form Header */}
            <div className="bg-primary/5 p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
              <p className="text-center text-gray-600 mt-2">Create your account and start shopping</p>
            </div>
            
            {/* Signup Form */}
            <div className="p-6">
              {error.message && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-red-500">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error.message}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  {error.name && (
                    <p className="mt-1 text-sm text-red-600">{error.name}</p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  {error.email && (
                    <p className="mt-1 text-sm text-red-600">{error.email}</p>
                  )}
                </div>
                
                {/* Role Selection */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUserTag className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="role"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary appearance-none"
                    >
                      <option value="">Select your role</option>
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {error.role && (
                    <p className="mt-1 text-sm text-red-600">{error.role}</p>
                  )}
                </div>
                
                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="u2022u2022u2022u2022u2022u2022u2022u2022"
                      className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <FaEyeSlash className="h-5 w-5" />
                        ) : (
                          <FaEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  {error.password && (
                    <p className="mt-1 text-sm text-red-600">{error.password}</p>
                  )}
                </div>
                
                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="u2022u2022u2022u2022u2022u2022u2022u2022"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  {error.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{error.confirmPassword}</p>
                  )}
                </div>
                
                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-600">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary hover:text-secondary transition-colors">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                
                {/* Signup Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </form>
              
              {/* Social Signup */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <FaGoogle className="h-5 w-5 text-red-500" />
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <FaFacebookF className="h-5 w-5 text-blue-600" />
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <FaTwitter className="h-5 w-5 text-blue-400" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-primary hover:text-secondary transition-colors">
                  Sign in now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setReduxUser } from "@/redux/Slice/UserSlice";

// Icons
import { FaFacebookF, FaGoogle, FaTwitter, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setErrors] = useState({
    email: "",
    password: "",
    message: "",
  });
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  
  // Load saved email if available
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let validation = true;
    
    // Reset previous errors
    setErrors({
      email: "",
      password: "",
      message: "",
    });

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      validation = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
      validation = false;
    }

    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      validation = false;
    } else if (password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
      validation = false;
    }
    
    if (validation) {
      setIsLoading(true);
      
      // Save email if remember me is checked
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      
      // For development, use mock data instead of actual API
      setTimeout(() => {
        const mockUser = {
          _id: "user123",
          name: "John Doe",
          email: email,
          role: "buyer"
        };
        
        // Dispatch the user data to Redux
        dispatch(setReduxUser(mockUser));
        
        // Show success notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50';
        notification.textContent = 'Login successful! Redirecting...';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
          setTimeout(() => document.body.removeChild(notification), 500);
          // Redirect to homepage after successful login
          router.push('/');
        }, 1500);
        
        setIsLoading(false);
      }, 1000);
      
      /* Commented out API call to prevent errors
      fetch("https://ecommerce-sagartmg2.vercel.app/api/users/Login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then(data => {
          // Store user data in Redux
          dispatch(setReduxUser(data.data));
          // Redirect to homepage after successful login
          router.push("/");
        })
        .catch(err => {
          setErrors((prev) => ({ ...prev, message: "Login failed. Please check your credentials and try again." }));
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
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Login</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Login Form Header */}
            <div className="bg-primary/5 p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 text-center">Sign In</h2>
              <p className="text-center text-gray-600 mt-2">Access your account and manage your orders</p>
            </div>
            
            {/* Login Form */}
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
                
                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:text-secondary transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
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
                
                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                {/* Login Button */}
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
                        Signing in...
                      </>
                    ) : (
                      'Sign in'
                    )}
                  </button>
                </div>
              </form>
              
              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-medium text-primary hover:text-secondary transition-colors">
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center max-w-sm w-full mx-4">
        <div className="relative mb-4">
          {/* Outer spinning circle */}
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-opacity-30"></div>
          
          {/* Inner spinning circle (opposite direction) */}
          <div className="absolute top-0 left-0 rounded-full h-16 w-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-[spin_0.8s_linear_infinite]"></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Loading</h3>
        <p className="text-gray-500 text-center">Please wait while we prepare your experience</p>
        
        {/* Loading dots animation */}
        <div className="flex items-center justify-center mt-3">
          <span className="h-2 w-2 bg-primary rounded-full mx-1 animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="h-2 w-2 bg-primary rounded-full mx-1 animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="h-2 w-2 bg-primary rounded-full mx-1 animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}

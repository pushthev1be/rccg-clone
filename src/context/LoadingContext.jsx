"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add event listeners for route changes
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setTimeout(() => setLoading(false), 800); // Slight delay to ensure content is rendered
    };

    // Set loading to false after initial load
    window.addEventListener('load', handleComplete);

    // Handle initial page load
    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      setTimeout(handleComplete, 1500); // Fallback timeout
    }

    return () => {
      window.removeEventListener('load', handleComplete);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <LoadingScreen />}
      <div className={loading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

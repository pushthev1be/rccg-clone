"use client";

import { useState, useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';

export function usePageLoading() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    // When all content is loaded
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Give time for all resources to render
    };

    // Start with loading
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [setLoading]);
}

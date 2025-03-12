"use client";

import React, { createContext, useContext, useState } from "react";

// Create context with default values
const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => null,
});

// Provider component that wraps your app and makes loading state available
export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

// Custom hook to access the loading context
export const useLoading = () => useContext(LoadingContext);

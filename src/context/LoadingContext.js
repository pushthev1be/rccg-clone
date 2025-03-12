import React, { createContext, useContext, useState } from "react";

// Create context with default values
const LoadingContext = createContext({
  loading: false,
  setLoading: () => {},
});

// Provider component that wraps your app and makes loading state available
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

// Custom hook to access the loading context
export function useLoading() {
  return useContext(LoadingContext);
}

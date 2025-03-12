"use client";

import { useEffect } from "react";
import { useLoading } from "../context/LoadingContext";

export function usePageLoading() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Set loading to false when component mounts (page is ready)
    setIsLoading(false);

    return () => {
      // Set loading to true when navigating away
      setIsLoading(true);
    };
  }, [setIsLoading]);
}

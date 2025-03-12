import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white_color">
      <div className="flex flex-col items-center">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <p className="mt-4 text-gray-800 text-lg animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

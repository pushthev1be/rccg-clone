"use client";
import React, { useEffect, useState } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("https://image-backend-mii5.onrender.com/api/images");
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Gallery</h2>
      <p className="text-gray-500 mb-10 text-center">
        Browse our collection of images from church events.
      </p>

      {images.length === 0 ? (
        <p className="text-center text-gray-400">No images uploaded yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <div key={img._id} className="rounded-lg overflow-hidden shadow">
              <img
                src={img.url}
                alt={img.title || "Church event"}
                className="w-full h-48 object-cover"
              />
              {img.title && <p className="p-2 text-gray-700 font-semibold">{img.title}</p>}
              {img.description && <p className="px-2 pb-2 text-gray-500 text-sm">{img.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

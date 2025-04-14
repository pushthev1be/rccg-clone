"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);
        if (title) formData.append("title", title);
        if (description) formData.append("description", description);

        const res = await fetch("https://image-backend-mii5.onrender.com/api/images", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("Failed to upload image");
      }

      setFiles([]);
      setTitle("");
      setDescription("");
      alert("Images uploaded successfully! Go back to gallery to view.");
    } catch (err) {
      setError("Failed to upload images. Please try again.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <motion.div
      className="container-xs px-4 py-12 min-h-screen bg-wine"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-wine-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            📤 Upload Images
          </motion.h2>
          <Link
            href="/gallery"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            Back to Gallery
          </Link>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="images">
            Select Images
          </label>
          <motion.input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-light bg-gray-50"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        {files.length > 0 && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 mb-2">Preview:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {files.map((file, index) => (
                <motion.img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-28 object-cover rounded-md shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                />
              ))}
            </div>
          </motion.div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
            Title (Optional)
          </label>
          <motion.input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-light bg-gray-50"
            placeholder="Enter image title"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description (Optional)
          </label>
          <motion.textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-light bg-gray-50"
            placeholder="Enter image description"
            rows={4}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        {error && (
          <motion.p
            className="text-red-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={uploading}
          className={`w-full py-3 rounded-md text-white font-medium ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-wine-light hover:bg-wine transition-colors duration-300"
          }`}
          whileHover={{ scale: uploading ? 1 : 1.05 }}
          whileTap={{ scale: uploading ? 1 : 0.95 }}
        >
          {uploading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Uploading...
            </span>
          ) : (
            "Upload Images"
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Upload;
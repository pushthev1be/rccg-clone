// app/contact/page.jsx
"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white_color text-charcoal py-12 px-6 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="mb-8 text-center text-lg">
          We'd love to hear from you. Whether you have a question about our services, events, or anything else — our team is ready to answer.
        </p>

        <form className="grid gap-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-a400 hover:bg-blue-900 text-white py-3 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

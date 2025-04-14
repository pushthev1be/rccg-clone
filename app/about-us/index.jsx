import "../../../styles/index.css";
import "../../../styles/font.css";
import Link from "next/link";

export const metadata = {
  title: "RCCG Image Gallery",
  description: "Upload and view pictures from church events.",
};

export default function GalleryLayout({ children }) {
  return (
    <div className="font-inter min-h-screen bg-wine text-gray-100">
      <header className="sticky top-0 z-10 bg-wine-light shadow-md">
        <div className="container-xs px-4 py-4 flex justify-between items-center">
          <Link href="/gallery">
            <h1 className="text-2xl md:text-3xl font-semibold text-white hover:text-gray-200 transition-colors">
              📸 RCCG Gallery
            </h1>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="/gallery/upload"
            className="bg-blue-a400 text-white px-5 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300"
          >
            Upload Images
          </Link>
        </div>
      </header>
      <main className="container-xs px-4 py-8">{children}</main>
    </div>
  );
}

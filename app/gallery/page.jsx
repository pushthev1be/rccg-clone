import "../styles/index.css"; // Should already be correct
import "../styles/font.css"; // Should already be correct
import { LoadingProvider } from "../context/LoadingContext";
import Link from "next/link";

export const metadata = {
  title: "Welcome to RCCG Rod Of God Parish, Indianapolis - Home",
  description:
    "Join the Redeemed Christian Church of God, Rod Of God Parish in Indianapolis for spiritual growth and community events. Experience love and worship with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="font-inter">
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="container-xs px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                RCCG Rod Of God Parish
              </h1>
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/gallery/upload"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Upload
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}

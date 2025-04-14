import Link from "next/link";

export default function GalleryPage() {
  // Placeholder for gallery content
  return (
    <div className="py-8">
      <h2 className="text-3xl font-semibold text-white mb-6">Gallery</h2>
      <p className="text-gray-300 mb-4">
        Browse our collection of images from church events.
      </p>
      {/* Add gallery content here */}
      <Link href="/gallery/upload" className="text-blue-a400 hover:underline">
        Upload new images
      </Link>
    </div>
  );
}
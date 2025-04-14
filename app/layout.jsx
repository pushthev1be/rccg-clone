import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import { LoadingProvider } from "../context/LoadingContext";

export const metadata = {
  title: "RCCG Image Gallery",
  description: "Upload and view pictures from church events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
          <LoadingProvider>{children}</LoadingProvider>
        </div>
      </body>
    </html>
  );
}

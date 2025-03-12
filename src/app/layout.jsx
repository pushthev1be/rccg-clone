// import React from "react";
import "@/styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";
import { LoadingProvider } from "../context/LoadingContext";

export const metadata = {
    title: "Welcome to RCCG Rod Of God Parish, Indianapolis - Home",
    description:
      "Join the Redeemed Christian Church of God, Rod Of God Parish in Indianapolis for spiritual growth and community events. Experience love and worship with us.",
  };

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
export default RootLayout;

import localFont from "next/font/local";

export const gotham = localFont({
  src: [
    { path: "../fonts/GothamBook.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GothamBook-Italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/GothamBold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/GothamBold-Italic.woff2", weight: "700", style: "italic" },
    { path: "../fonts/GothamBlack.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

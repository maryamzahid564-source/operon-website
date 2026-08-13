import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gotham } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Operon Middle East | Facilities Management, UAE",
  description:
    "Operon Middle East delivers integrated facilities management across the UAE. Part of the UEM Edgenta Group, established in the UAE since 2008.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-ink antialiased">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

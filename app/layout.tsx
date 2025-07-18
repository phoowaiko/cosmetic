import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Cosmetic Products",
  description: "Buy Cool products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-grow w-full mx-auto px-4 py-8 "> {children}</main>
      </body>
    </html>
  );
}

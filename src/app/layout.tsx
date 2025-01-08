import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satya Prakash | Software Engineer",
  description: "Portfolio website of Satya Prakash - Full Stack Developer and AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "bg-gradient-to-b from-gray-900 to-black text-white min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}

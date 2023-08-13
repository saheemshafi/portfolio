import Navbar from "@/components/Navigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/contexts/ThemeProvider";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mir Saheem Shafi - Fullstack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "min-h-screen overflow-x-hidden bg-slate-main pb-[64px] sm:pb-0",
        )}
      >
        <ThemeContextProvider>
          <Navbar />
          <MobileNavigation />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}

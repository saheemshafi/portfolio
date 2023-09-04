import Navbar from "@/components/Navigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import { ThemeContextProvider } from "@/contexts/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          "min-h-screen overflow-x-hidden bg-slate-main pb-[64px] sm:pb-0 [&_strong]:font-semibold",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-theme/[0.02] to-transparent"
        ></div>
        <ThemeContextProvider>
          <Navbar />
          <MobileNavigation />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}

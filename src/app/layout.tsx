import Navbar from "@/components/Navigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import { ThemeContextProvider } from "@/contexts/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/zod/envSchema";

const inter = Inter({ subsets: ["latin"] });

const { title, description } = {
  title: "Mir Saheem Shafi - Fullstack Developer",
  description:
    "I build awesome stuff on the web. From sleek designs to smooth functionality. Got a cool project in mind? Let's chat and make it happen!",
};

export const metadata: Metadata = {
  title,
  description,
  category: "portfolio",
  colorScheme: "dark",
  keywords:
    "web developer, frontend web developer, nextjs developer, react developer, angular developer",
  icons: ["/favicon.ico"],
  openGraph: {
    type: "website",
    countryName: "India",
    siteName: "Mir Saheem Shafi",
    title,
    description,
    url: env.APP_URL,
    images: [env.SUPABASE_BUCKET_URL.concat("project-images/portfolio.jpg")],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-skyblue scroll-smooth">
      <body
        className={cn(
          inter.className,
          "pb-[calc(64px_-_16px] min-h-screen overflow-x-hidden bg-slate-main sm:pb-0 [&_strong]:font-semibold",
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

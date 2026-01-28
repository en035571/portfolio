import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// ========================================
// EDIT YOUR SITE METADATA HERE
// ========================================
export const metadata: Metadata = {
  title: "Eric Nguyen | Portfolio",
  description: "Creative portfolio showcasing video, graphic design, photography, and creative direction work.",
  // Add more metadata as needed:
  // openGraph: { ... },
  // twitter: { ... },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light-bg dark:bg-dark-bg`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

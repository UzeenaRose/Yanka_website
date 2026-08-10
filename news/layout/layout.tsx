import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"], // Regular, SemiBold, Bold, ExtraBold
  variable: "--font-manrope" 
});

export const metadata: Metadata = {
  title: "Yanka Agri - News & Media",
  description: "The latest stories, press releases, and announcements from Yanka Agri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${manrope.variable} antialiased bg-white text-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
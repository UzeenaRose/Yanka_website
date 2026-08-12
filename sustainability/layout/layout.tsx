import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"], // Regular, Medium, SemiBold, Bold, ExtraBold
  variable: "--font-manrope" 
});

export const metadata: Metadata = {
  title: "Nature & Sustainability",
  description: "Preserving & Regenerating Nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased bg-white text-[#1a1a1a]`}>
        {children}
      </body>
    </html>
  );
}
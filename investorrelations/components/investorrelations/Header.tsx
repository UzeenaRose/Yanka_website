"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = ["Home", "Our Businesses", "About Us", "Sustainability", "Investor Relations", "Media", "Board"];

export const Header = () => {
  const [active, setActive] = useState("Investor Relations");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f2744] bg-[#080c18]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <Link href="/" className="[font-family:var(--font-manrope)] text-xl font-bold tracking-tight text-white hover:text-[#00e5d0] transition-colors">
          Yanka Group
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#8892b0] [font-family:var(--font-manrope)]">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative transition-colors hover:text-white ${
                active === item ? "text-white" : ""
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00e5d0] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <button className="bg-[#00e5d0] hover:bg-[#00ccb9] text-[#080c18] font-bold py-2 px-6 rounded-full text-sm transition-colors [font-family:var(--font-manrope)]">
          Contact Us
        </button>
      </div>
    </header>
  );
};
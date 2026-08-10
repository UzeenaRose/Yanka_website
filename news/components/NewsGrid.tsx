"use client";

import { useState } from "react";

const filters = ["All", "Press Releases", "Sustainability", "Announcements", "Innovation", "Awards"];

const articles = [
  { title: "Yanka Agri completes acquisition of AI agritech startup", category: "Press Releases", date: "12 Feb 2026" },
  { title: "12,000 rural farmers onboarded to smallholder farming program", category: "Sustainability", date: "10 Feb 2026" },
  { title: "Yanka Agri takes Academy Awards to 1,000 students", category: "Announcements", date: "8 Feb 2026" },
  { title: "Partnerships to support fertilizer distribution", category: "Press Releases", date: "30 Jan 2026" },
  { title: "EdTech platform reaches 10,000 students", category: "Sustainability", date: "22 Jan 2026" },
  { title: "Yanka Agri named 'Agribusiness of the Year'", category: "Awards", date: "18 Jan 2026" },
  { title: "New rural development fund is largest investment in African agriculture", category: "Innovation", date: "10 Jan 2026" },
  { title: "Yanka Agri announces expanded school meal program", category: "Press Releases", date: "5 Jan 2026" },
  { title: "Annual summit to address key challenges in agri-food systems", category: "Innovation", date: "21 Dec 2025" },
  { title: "5-year growth plan targets food security & sustainability", category: "Sustainability", date: "15 Dec 2025" },
  { title: "AI-powered training for smallholder farmers", category: "Innovation", date: "5 Dec 2025" },
  { title: "Regional expansion to support 1M new households", category: "Announcements", date: "23 Nov 2025" },
];

export const NewsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="w-full bg-white py-20 border-b border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-colors [font-family:var(--font-manrope)] ${
                activeFilter === filter 
                  ? "bg-[#00bfa5] text-white" 
                  : "bg-gray-100 text-[#5c6577] hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-transparent hover:border-[#00bfa5]/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full cursor-pointer">
              
              {/* Image Placeholder */}
              <div className="bg-[#eaeaea] rounded-lg aspect-video mb-5 flex items-center justify-center group-hover:bg-[#e0e0e0] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="[font-family:var(--font-manrope)] text-[#00bfa5] text-xs font-bold uppercase">{article.category}</span>
                  <span className="[font-family:var(--font-manrope)] text-[#9ca3af] text-xs">{article.date}</span>
                </div>
                <h3 className="[font-family:var(--font-manrope)] text-[16px] font-bold leading-snug text-[#1a1a1a] group-hover:text-[#00bfa5] transition-colors mb-4">
                  {article.title}
                </h3>
                <div className="mt-auto pt-4">
                  <span className="[font-family:var(--font-manrope)] text-xs font-semibold text-[#00bfa5] group-hover:translate-x-1 transition-transform inline-block">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#00bfa5] hover:bg-[#00a891] text-white font-bold py-3 px-8 rounded-full text-sm transition-colors [font-family:var(--font-manrope)]">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};
export const NewsHero = () => {
  return (
    <section className="w-full bg-[#0f1217] text-white border-b border-[#252932] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="[font-family:var(--font-manrope)] text-[#00bfa5] text-xs font-bold uppercase tracking-widest mb-4">
          Newsroom
        </div>
        <h1 className="[font-family:var(--font-manrope)] text-[40px] md:text-[52px] font-extrabold leading-tight mb-16 max-w-2xl">
          News & Media
        </h1>
        <p className="[font-family:var(--font-manrope)] text-base text-[#8c94a3] max-w-xl -mt-12 mb-16">
          The latest stories, press releases, and announcements from Yanka Agri and its subsidiaries.
        </p>

        {/* Feature Article Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#181c25] rounded-2xl p-6 md:p-10 border border-[#252932]">
          {/* Left: Image Placeholder */}
          <div className="bg-[#222731] rounded-xl aspect-video flex items-center justify-center w-full relative">
            <div className="flex flex-col items-center text-[#5c6577]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span className="text-xs mt-2">Featured Image</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="[font-family:var(--font-manrope)] text-[#00bfa5] text-xs font-bold uppercase">Featured</span>
              <span className="[font-family:var(--font-manrope)] text-[#5c6577] text-xs">24 Jan 2026</span>
            </div>
            <h2 className="[font-family:var(--font-manrope)] text-[26px] font-extrabold leading-tight mb-4 hover:text-[#00bfa5] transition-colors cursor-pointer">
              Yanka Agri unveils five-year plan to double regional food production
            </h2>
            <p className="[font-family:var(--font-manrope)] text-sm text-[#8c94a3] leading-relaxed mb-6 max-w-md">
              The initiative aims to modernize smallholder farms through smart irrigation and sustainable farming practices.
            </p>
            <button className="w-fit bg-[#00bfa5] hover:bg-[#00a891] text-white font-bold py-2.5 px-6 rounded-full text-sm transition-colors [font-family:var(--font-manrope)]">
              Read the full story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
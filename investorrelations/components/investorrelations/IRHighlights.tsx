const highlights = [
  { number: "5", label: "Companies in Group" },
  { number: "10+", label: "Countries of Operation", icon: true },
  { number: "10", label: "Million Users", icon: true },
  { number: "1", label: "Independent Non-Profits" },
];

export const IRHighlights = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 border-b border-[#1f2744]">
      <div className="max-w-5xl mx-auto">
        <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          Financial Highlights
        </div>
        
        <h2 className="[font-family:var(--font-source-serif)] text-[32px] font-bold leading-tight text-white max-w-2xl mb-12">
          A growing, diversified group.
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-[#0f1527] rounded-2xl p-8 border border-[#1f2744] flex flex-col items-start justify-between min-h-[120px] transition-all hover:border-[#00e5d0]/50 hover:shadow-[0_10px_30px_-10px_rgba(0,229,208,0.1)] group"
            >
              <div className="flex w-full justify-between items-start">
                <div className="[font-family:var(--font-source-serif)] text-[32px] font-bold text-white group-hover:text-[#00e5d0] transition-colors">
                  {item.number}
                </div>
                {item.icon && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M12 3v18" /><path d="M6 6h12" /><path d="M6 18h12" />
                  </svg>
                )}
              </div>
              <p className="[font-family:var(--font-manrope)] text-[14px] font-medium text-[#8892b0] mt-4 group-hover:text-white transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
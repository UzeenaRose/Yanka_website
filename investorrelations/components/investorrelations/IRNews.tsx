const articles = [
  "Yanka Group announces $20M growth strategy",
  "Yanka Pay expands SME financing program",
  "Yanka launches Africa's first crypto treasury"
];

export const IRNews = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 border-b border-[#1f2744] bg-[#060a16]">
      <div className="max-w-5xl mx-auto">
        <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          Press Releases
        </div>
        
        <h2 className="[font-family:var(--font-source-serif)] text-[32px] font-bold leading-tight text-white max-w-2xl mb-12">
          Recent investor announcements.
        </h2>
        
        <div className="flex flex-col gap-4">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="bg-[#0f1527] rounded-xl px-6 py-5 border border-[#1f2744] flex justify-between items-center cursor-pomanrope group transition-all hover:border-[#00e5d0]"
            >
              <span className="[font-family:var(--font-manrope)] text-[16px] font-medium text-white group-hover:text-[#00e5d0] transition-colors">
                {article}
              </span>
              <span className="[font-family:var(--font-manrope)] text-[13px] font-medium text-[#56607f] flex items-center gap-1 group-hover:text-[#00e5d0] transition-colors">
                Read <span className="text-lg">&rarr;</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
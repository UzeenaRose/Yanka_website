const directors = [
  { name: "Chairperson", title: "Non-Executive" },
  { name: "Vice Chairperson", title: "Non-Executive" },
  { name: "Independent Director", title: "Non-Executive" },
  { name: "Independent Director", title: "Non-Executive" },
  { name: "Independent Director", title: "Non-Executive" },
];

export const BoardOfDirectors = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 bg-[#060a16] border-b border-[#1f2744]">
      <div className="max-w-6xl mx-auto">
        <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          Governance
        </div>
        <h2 className="[font-family:var(--font-source-serif)] text-[32px] font-bold leading-tight text-white mb-12">
          Board of Directors.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {directors.map((director, index) => (
            <div key={index} className="bg-[#0f1527] rounded-2xl border border-[#1f2744] hover:border-[#00e5d0]/40 transition-all duration-300 group flex flex-col items-center justify-end p-4 pb-8 min-h-[260px]">
              {/* Placeholder for Image */}
              <div className="w-full h-32 bg-[#1a223d] rounded-xl mb-4 group-hover:bg-[#242e52] transition-colors"></div>
              <h3 className="[font-family:var(--font-manrope)] text-sm font-bold text-white group-hover:text-[#00e5d0] transition-colors">
                {director.name}
              </h3>
              <p className="[font-family:var(--font-manrope)] text-[11px] font-medium text-[#56607f] mt-1">
                {director.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
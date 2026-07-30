const reports = [
  "Annual Report 2024",
  "Sustainability Impact 2024",
  "Corporate Governance Charter",
  "Board Committee Structure"
];

export const IRReports = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 border-b border-[#1f2744] bg-[#060a16]">
      <div className="max-w-5xl mx-auto">
        <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          Annual Reports & Disclosures
        </div>
        
        <h2 className="[font-family:var(--font-source-serif)] text-[32px] font-bold leading-tight text-white max-w-2xl mb-12">
          Financial and governance documents.
        </h2>
        
        <div className="flex flex-col gap-4">
          {reports.map((report, index) => (
            <div 
              key={index}
              className="bg-[#0f1527] rounded-xl px-6 py-5 border border-[#1f2744] flex justify-between items-center cursor-pomanrope group transition-all hover:border-[#00e5d0]"
            >
              <span className="[font-family:var(--font-manrope)] text-[16px] font-medium text-white group-hover:text-[#00e5d0] transition-colors">
                {report}
              </span>
              <span className="[font-family:var(--font-manrope)] text-[13px] font-semibold text-[#00e5d0] bg-[#1a223d] group-hover:bg-[#00e5d0] group-hover:text-[#080c18] px-4 py-1.5 rounded-full transition-all">
                Download
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
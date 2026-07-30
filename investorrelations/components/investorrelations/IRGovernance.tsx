export const IRGovernance = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 border-b border-[#1f2744]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-4">
            Governance Structure
          </div>
          
          <h2 className="[font-family:var(--font-source-serif)] text-[36px] font-bold leading-tight text-white">
            How the Group is organized.
          </h2>
        </div>
        
        <div className="bg-[#0f1527] rounded-2xl p-10 md:p-16 border border-[#1f2744] flex flex-col items-center text-center">
          <div className="mb-10 pb-8 border-b border-[#1f2744] w-full max-w-2xl">
            <h3 className="[font-family:var(--font-source-serif)] text-xl font-bold text-[#00e5d0]">
              YANKA Group
            </h3>
          </div>

          <div className="w-full max-w-xl flex flex-col items-center gap-8">
            {["Board of Directors", "Group Chief Executive Officer", "Executive Leadership Team"].map((role, idx) => (
              <div key={idx} className="bg-[#1a223d] px-6 py-3 rounded-lg w-full hover:bg-[#242e52] transition-colors cursor-default">
                <span className="[font-family:var(--font-manrope)] text-[15px] font-medium text-[#8892b0]">
                  {role}
                </span>
              </div>
            ))}

            <div className="flex flex-col items-center gap-3 pt-8 border-t border-[#1f2744] w-full">
              <span className="[font-family:var(--font-manrope)] text-[13px] font-medium text-[#56607f] mb-1">Managing Directors & Subsidiaries</span>
              <div className="flex flex-wrap justify-center gap-3">
                {["Yanka Pay", "Yanka Business", "Yanka AI", "Yanka Logistics"].map((item) => (
                  <span key={item} className="bg-[#1a223d] px-4 py-2 rounded-lg text-[13px] [font-family:var(--font-manrope)] text-[#8892b0] hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
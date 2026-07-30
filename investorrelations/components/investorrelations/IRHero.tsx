export const IRHero = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 border-b border-[#1f2744]">
      <div className="max-w-5xl mx-auto">
        <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-8">
          Investor Relations
        </div>
        
        <h1 className="[font-family:var(--font-source-serif)] text-[44px] md:text-[56px] font-bold leading-[1.1] tracking-normal text-white max-w-3xl mb-20">
          Stay connected to our performance and governance.
        </h1>

        <div className="w-full border-t border-[#1f2744] pt-10">
          <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-4">
            Company Profile
          </div>
          
          <p className="[font-family:var(--font-manrope)] text-[17px] font-normal leading-[28px] text-[#8892b0] max-w-2xl mb-10">
            YANKA Group is a privately held African holding company operating five commercial subsidiaries across fintech, agriculture, logistics, textiles, and industrial materials, headquartered in Lagos, Nigeria.
          </p>
          
          <button className="bg-[#00e5d0] hover:bg-[#00ccb9] text-[#080c18] font-bold py-3.5 px-8 rounded-full [font-family:var(--font-manrope)] text-sm transition-colors shadow-[0_0_20px_rgba(0,229,208,0.2)] hover:shadow-[0_0_30px_rgba(0,229,208,0.4)]">
            Contact Investor Relations
          </button>
        </div>
      </div>
    </section>
  );
};
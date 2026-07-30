export const LeadershipHero = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 border-b border-[#1f2744]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <div className="w-full text-left mb-16">
          <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-6">
            Leadership & Governance
          </div>
          <h1 className="[font-family:var(--font-source-serif)] text-[44px] md:text-[52px] font-bold leading-[1.1] tracking-normal text-white max-w-3xl">
            The people building Yanka Group.
          </h1>
        </div>

        {/* CEO Profile */}
        <div className="flex flex-col items-center max-w-xl">
          <div className="w-32 h-32 rounded-full bg-[#121a30] mb-6 border-4 border-[#1f2744]"></div>
          <h2 className="[font-family:var(--font-source-serif)] text-xl font-bold text-white mb-1">Peter Inyang</h2>
          <p className="[font-family:var(--font-manrope)] text-sm font-medium text-[#00e5d0] mb-3">
            Founder & Group Chief Executive Officer
          </p>
          <p className="[font-family:var(--font-manrope)] text-[14px] leading-[22px] text-[#8892b0]">
            Peter brings over 18 years of experience in fintech and corporate strategy, leading Yanka Group's expansion across Africa.
          </p>
        </div>

      </div>
    </section>
  );
};
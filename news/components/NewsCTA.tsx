export const NewsCTA = () => {
  return (
    <section className="w-full bg-[#eef7f5] py-16 border-b border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="[font-family:var(--font-manrope)] text-xl font-extrabold text-[#1a1a1a] mb-1">
            Media Enquiries
          </h3>
          <p className="[font-family:var(--font-manrope)] text-sm font-medium text-[#5c6577]">
            For interview, press passes, or media partnerships, contact our communications team.
          </p>
        </div>
        <a href="mailto:media@yankaagri.com" className="[font-family:var(--font-manrope)] text-[#1a1a1a] font-bold text-base hover:text-[#00bfa5] transition-colors border-b border-[#1a1a1a] hover:border-[#00bfa5] pb-0.5">
          media@yankaagri.com
        </a>
      </div>
    </section>
  );
};
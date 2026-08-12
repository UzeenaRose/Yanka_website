export const ProtectNature = () => {
  return (
    <section className="w-full bg-[#0f1512] py-24 border-b border-[#1f2b26] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="[font-family:var(--font-manrope)] text-[32px] md:text-[36px] font-extrabold leading-tight mb-12">
          How We Protect <span className="text-[#2ebf7e]">Nature</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Managing Waste & Water", img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=2070&auto=format&fit=crop" },
            { title: "Regenerative Agriculture", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2066&auto=format&fit=crop" },
            { title: "Protecting Ecosystems", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop" }
          ].map((item, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden bg-[#1c2822] hover:bg-[#25332c] transition-colors border border-[#26332d]">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }}></div>
              <div className="p-6">
                <h3 className="[font-family:var(--font-manrope)] text-lg font-extrabold mb-2">{item.title}</h3>
                <p className="[font-family:var(--font-manrope)] text-sm font-medium text-[#8faaa0]">Learn more →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
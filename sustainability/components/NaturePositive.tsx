export const NaturePositive = () => {
  return (
    <section className="w-full bg-white py-24 border-b border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Row: 3 Columns */}
        <h2 className="[font-family:var(--font-manrope)] text-[32px] font-extrabold text-[#1a1a1a] text-center mb-12">
          Nature-Positive <span className="text-[#2ebf7e]">Initiatives</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { title: "Implementing Water Stewardship", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" },
            { title: "Protecting Forests & Biodiversity", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" },
            { title: "Countering Invasive Species", img: "https://images.unsplash.com/photo-1625246333195-09d9b630f5b8?q=80&w=2070&auto=format&fit=crop" }
          ].map((item, index) => (
            <div key={index} className="bg-[#f9fbfa] rounded-2xl overflow-hidden border border-[#eaeaea] hover:shadow-lg transition-all group">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }}></div>
              <div className="p-6 text-center md:text-left">
                <h3 className="[font-family:var(--font-manrope)] text-lg font-extrabold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="[font-family:var(--font-manrope)] text-sm text-[#5c6577] leading-relaxed">
                  Restoring natural habitats and ensuring thriving ecosystems.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Columns with Overlay Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Navigating Climate Markets", subtitle: "Integrating carbon credits into our sustainability model.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" },
            { title: "Regenerating Degraded Land", subtitle: "Turning once-barren landscapes into thriving habitats.", img: "https://images.unsplash.com/photo-1625246333195-09d9b630f5b8?q=80&w=2070&auto=format&fit=crop" }
          ].map((item, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden h-[320px] group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${item.img}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="[font-family:var(--font-manrope)] text-2xl font-extrabold text-white mb-1">{item.title}</h3>
                <p className="[font-family:var(--font-manrope)] text-sm font-medium text-[#b4c9c0]">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
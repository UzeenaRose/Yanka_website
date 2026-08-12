export const NatureHero = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-[85vh] bg-[#0a1912] overflow-hidden">
      {/* Background Image Placeholder (Forest) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1448375240586-dfd28d3f12d4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col justify-center">
        <div className="[font-family:var(--font-manrope)] text-[#2ebf7e] text-xs font-bold tracking-widest uppercase mb-4">
          Sustainability
        </div>
        <h1 className="[font-family:var(--font-manrope)] text-[42px] md:text-[60px] font-extrabold leading-[1.1] text-white max-w-3xl">
          Redefining the Value of <span className="text-[#2ebf7e]">Forests</span>
        </h1>
        <p className="[font-family:var(--font-manrope)] text-base md:text-lg text-[#d1dfd8] max-w-lg mt-6 leading-relaxed">
          We believe forests are essential to human life and the stability of the planet's climate. By prioritizing conservation and innovation, we are ensuring thriving forests for generations to come.
        </p>
        <div className="flex gap-6 mt-10 [font-family:var(--font-manrope)] text-sm font-medium text-[#d1dfd8]">
          <span>500+ Hectares protected</span>
          <span>•</span>
          <span>1K+ Trees planted</span>
        </div>
      </div>
    </section>
  );
};
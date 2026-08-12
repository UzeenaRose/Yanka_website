export const ForestCarbon = () => {
  return (
    <section className="w-full bg-[#0f1512] py-24 border-b border-[#1f2b26] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')] bg-cover bg-center"></div>

        {/* Text */}
        <div>
          <h2 className="[font-family:var(--font-manrope)] text-[28px] font-extrabold leading-tight text-[#2ebf7e] mb-4">
            Managing Waste & Water
          </h2>
          <p className="[font-family:var(--font-manrope)] text-base text-[#b4c9c0] leading-relaxed mb-4">
            Our commitment to sustainable waste and water management is at the heart of our sustainability efforts. We are reducing waste, conserving water, and promoting circular economy principles across our operations.
          </p>
          <p className="[font-family:var(--font-manrope)] text-sm text-[#8faaa0]">
            <span className="font-bold text-white">Impact:</span> 40% reduction in water usage across all managed farms.
          </p>
        </div>
      </div>
    </section>
  );
};
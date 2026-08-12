export const RegenerativeCarbon = () => {
  return (
    <section className="w-full bg-[#0f1512] py-24 border-b border-[#1f2b26] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text (Swapped to first column) */}
        <div className="order-2 lg:order-1">
          <h2 className="[font-family:var(--font-manrope)] text-[28px] font-extrabold leading-tight text-[#2ebf7e] mb-4">
            Regenerative Agriculture
          </h2>
          <p className="[font-family:var(--font-manrope)] text-base text-[#b4c9c0] leading-relaxed mb-4">
            Our regenerative agriculture initiatives promote soil health, biodiversity, and sustainable land use. By working with farmers to adopt these practices, we are building a more resilient agricultural system.
          </p>
          <p className="[font-family:var(--font-manrope)] text-sm text-[#8faaa0]">
            <span className="font-bold text-white">Impact:</span> Sequestering over 2,500 tons of carbon annually.
          </p>
        </div>

        {/* Image (Swapped to second column) */}
        <div className="order-1 lg:order-2 w-full aspect-[16/9] rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>
    </section>
  );
};
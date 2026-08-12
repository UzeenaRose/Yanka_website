export const RegenerativeIntro = () => {
  return (
    <section className="w-full py-24 bg-white border-b border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="[font-family:var(--font-manrope)] text-[32px] md:text-[38px] font-extrabold leading-tight text-[#1a1a1a] mb-6">
            Regenerative Agriculture in Action
          </h2>
          <p className="[font-family:var(--font-manrope)] text-base font-medium text-[#5c6577] leading-[1.8]">
            We are pioneering regenerative agriculture to restore ecosystems, improve soil health, and enhance farmer livelihoods. By adopting practices that prioritize long-term sustainability, we are transforming the way food is grown and consumed.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1625246333195-09d9b630f5b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

      </div>
    </section>
  );
};
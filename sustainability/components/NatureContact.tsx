export const NatureContact = () => {
  return (
    <section className="w-full bg-[#1d7a4c] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Text */}
        <div className="text-white pt-4">
          <h2 className="[font-family:var(--font-manrope)] text-[36px] font-extrabold leading-tight mb-4">
            Talk to Us
          </h2>
          <p className="[font-family:var(--font-manrope)] text-base font-medium text-[#e1f0e9] leading-relaxed mb-6 max-w-sm">
            Whether you're a potential partner, an investor, or a community member, we're here to help you connect with our mission.
          </p>
          <a href="mailto:sustainability@yankaagri.com" className="[font-family:var(--font-manrope)] text-sm font-bold text-white underline decoration-2 underline-offset-4 hover:text-[#e1f0e9]">
            sustainability@yankaagri.com
          </a>
        </div>

        {/* Right: Dark Form */}
        <div className="bg-[#1c2520] rounded-2xl p-8 shadow-xl border border-[#2f3d36]">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">First Name</label>
              <input type="text" className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-white [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]" />
            </div>
            <div className="col-span-1">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">Last Name</label>
              <input type="text" className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-white [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]" />
            </div>
            <div className="col-span-1">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">Email Address</label>
              <input type="email" className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-white [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]" />
            </div>
            <div className="col-span-1">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-white [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]" />
            </div>
            <div className="col-span-2">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">Company</label>
              <input type="text" className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-white [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]" />
            </div>
            <div className="col-span-2">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">Category</label>
              <select className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-[#8faaa0] [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]">
                <option>Select a category</option>
                <option>Partnerships</option>
                <option>Investor Relations</option>
                <option>Media Inquiry</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="[font-family:var(--font-manrope)] text-xs font-bold text-[#8faaa0] uppercase tracking-wider block mb-2">How did you hear about us?</label>
              <select className="w-full bg-[#121a16] border border-[#2f3d36] rounded-lg p-3 text-[#8faaa0] [font-family:var(--font-manrope)] text-sm focus:outline-none focus:border-[#2ebf7e]">
                <option>Select an option</option>
                <option>Google Search</option>
                <option>Social Media</option>
                <option>Referral</option>
              </select>
            </div>
            <div className="col-span-2 pt-2">
              <button type="button" className="w-full bg-[#2ebf7e] hover:bg-[#25a36a] text-white font-bold py-4 rounded-lg transition-colors [font-family:var(--font-manrope)] text-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
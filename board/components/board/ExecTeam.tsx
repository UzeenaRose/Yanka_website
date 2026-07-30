const executives = [
  { name: "Peter Inyang", role: "Founder & Group Chief Executive Officer" },
  { name: "", role: "Chief Financial & Investment Officer" },
  { name: "", role: "Chief Operating Officer" },
  { name: "", role: "Chief Technology Officer" },
  { name: "", role: "Chief People & Culture Officer" },
  { name: "", role: "Chief Marketing & Communications Officer" },
  { name: "", role: "Chief Partnerships & Growth Officer" },
  { name: "", role: "Chief Legal & Governance Officer" },
];

export const ExecutiveTeam = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-16 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="[font-family:var(--font-manrope)] text-[#00e5d0] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          Executive Team
        </div>
        <h2 className="[font-family:var(--font-source-serif)] text-[32px] font-bold leading-tight text-white mb-12">
          Group Executive Leadership.
        </h2>
        
        {/* There are no images of the people yet so im just gonna copy the the figma  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((exec, index) => (
            <div key={index} className="bg-[#0f1527] rounded-2xl border border-[#1f2744] hover:border-[#00e5d0]/40 transition-all duration-300 group flex flex-col items-center justify-end p-4 pb-8 min-h-[240px]">
              {/* Placeholder for Image */}
              <div className="w-full h-28 bg-[#1a223d] rounded-xl mb-4 group-hover:bg-[#242e52] transition-colors"></div>
              
              {/* Conditional rendering for the name */}
              {exec.name && (
                <h3 className="[font-family:var(--font-manrope)] text-sm font-bold text-white group-hover:text-[#00e5d0] transition-colors">
                  {exec.name}
                </h3>
              )}
              
              <p className={`[font-family:var(--font-manrope)] text-[11px] font-medium text-[#56607f] text-center ${exec.name ? 'mt-1' : 'mt-0'}`}>
                {exec.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
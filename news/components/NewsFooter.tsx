export const NewsFooter = () => {
  return (
    <footer className="w-full bg-[#0f1217] py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="[font-family:var(--font-manrope)] text-sm font-semibold text-white tracking-wide">
          Yanka Agri
        </div>
        <p className="[font-family:var(--font-manrope)] text-[13px] text-[#8c94a3]">
          © {new Date().getFullYear()} Yanka Agri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
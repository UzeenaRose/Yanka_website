import Link from "next/link";

const footerColumns = [
  { title: "Yanka Group", links: ["Sustainability", "Our Businesses", "Investors", "Careers", "Contact"] },
  { title: "Company", links: ["About Us", "Our Businesses"] },
  { title: "Impact", links: ["Sustainability", "SDG Initiatives"] },
  { title: "Resources", links: ["Blog", "Whitepapers", "Media Kit", "Support"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookies"] },
];

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-16 md:px-12 lg:px-16 bg-[#050812] border-t border-[#1f2744]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
        {footerColumns.map((col, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h4 className="[font-family:var(--font-manrope)] text-[15px] font-bold text-white">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="[font-family:var(--font-manrope)] text-[14px] font-medium text-[#56607f] hover:text-[#00e5d0] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto pt-8 border-t border-[#1a223d]">
        <p className="[font-family:var(--font-manrope)] text-[14px] text-[#3e4868]">
          © {new Date().getFullYear()} Yanka Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
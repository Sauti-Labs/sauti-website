import Link from "next/link";
import { cta } from "@/content/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/lv_german_school/",
      svg: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/p/Lakeview-German-School-61577376538395/",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@lvgermanschool",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23 1.01.03 2.08.68 2.83.67.77 1.71 1.15 2.71 1.01 1.02-.12 1.96-.74 2.42-1.65.31-.61.45-1.31.43-2.01V.02z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      svg: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-teal-950 border-t border-teal-800 text-white font-sans">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="text-lg font-heading font-bold tracking-tight text-white hover:text-teal-300 transition-colors"
            >
              SAUTI LABS
            </Link>
            <p className="text-sm leading-relaxed text-fog max-w-sm">
              African-language AI research, models, data, and technologies built to empower linguistic diversity across the continent.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-full bg-teal-900 text-fog hover:text-teal-950 hover:bg-sun transition-all duration-300 flex items-center justify-center"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Research Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-teal-300 font-semibold">
              Research
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/research" className="text-sm text-fog hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/research/speech-intelligence" className="text-sm text-fog hover:text-white transition-colors">
                  Speech Intelligence
                </Link>
              </li>
              <li>
                <Link href="/research/language-intelligence" className="text-sm text-fog hover:text-white transition-colors">
                  Language Intelligence
                </Link>
              </li>
              <li>
                <Link href="/research/language-resources" className="text-sm text-fog hover:text-white transition-colors">
                  Language Resources
                </Link>
              </li>
              <li>
                <Link href="/research/model-intelligence" className="text-sm text-fog hover:text-white transition-colors">
                  Model Intelligence
                </Link>
              </li>
              <li>
                <Link href="/research/responsible-ai" className="text-sm text-fog hover:text-white transition-colors">
                  Responsible AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Commitments Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-teal-300 font-semibold">
              Commitments
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/commitments/responsible-ai" className="text-sm text-fog hover:text-white transition-colors">
                  Responsible AI
                </Link>
              </li>
              <li>
                <Link href="/commitments/privacy" className="text-sm text-fog hover:text-white transition-colors">
                  Privacy and Data Protection
                </Link>
              </li>
              <li>
                <Link href="/commitments/security" className="text-sm text-fog hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/commitments/data-governance" className="text-sm text-fog hover:text-white transition-colors">
                  Data and Research Governance
                </Link>
              </li>
              <li>
                <Link href="/commitments/code-of-conduct" className="text-sm text-fog hover:text-white transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & News Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-wider text-teal-300 font-semibold">
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-sm text-fog hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/company/leadership" className="text-sm text-fog hover:text-white transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="text-sm text-fog hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/company/events" className="text-sm text-fog hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-sm text-fog hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {cta?.href && (
              <div>
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-sun hover:text-white transition-colors"
                >
                  {cta.label} &rarr;
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-teal-800 flex flex-col sm:flex-row items-center justify-between text-xs text-fog gap-4">
          <p>© {currentYear} Sauti Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/commitments/privacy" className="hover:text-white transition-colors">
              Privacy & Data Protection
            </Link>
            <Link href="/commitments/code-of-conduct" className="hover:text-white transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import Link from "next/link";
import { cta } from "@/content/navigation";
import logo from "@/public/Sauti-logo-dark-background.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/sauti-labs",
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
              className="inline-flex items-center gap-2.5 text-lg font-heading font-bold tracking-tight text-white hover:text-teal-300 transition-colors"
            >
              <Image src={logo} alt="" className="h-14 w-auto object-contain rounded" />
              
            </Link>
            <p className="text-sm leading-relaxed text-white max-w-sm">
              Building speech and language intelligence for Africa.
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
                <Link href="/research" className="text-sm text-white hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/research/speech-intelligence" className="text-sm text-white hover:text-white transition-colors">
                  Speech Intelligence
                </Link>
              </li>
              <li>
                <Link href="/research/language-intelligence" className="text-sm text-white hover:text-white transition-colors">
                  Language Intelligence
                </Link>
              </li>
              <li>
                <Link href="/research/language-resources" className="text-sm text-white hover:text-white transition-colors">
                  Language Resources
                </Link>
              </li>
              <li>
                <Link href="/research/model-intelligence" className="text-sm text-white hover:text-white transition-colors">
                  Model Intelligence
                </Link>
              </li>
              <li>
                <Link href="/research/responsible-ai" className="text-sm text-white hover:text-white transition-colors">
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
                <Link href="/commitments/responsible-ai" className="text-sm text-white hover:text-white transition-colors">
                  Responsible AI
                </Link>
              </li>
              <li>
                <Link href="/commitments/privacy" className="text-sm text-white hover:text-white transition-colors">
                  Privacy and Data Protection
                </Link>
              </li>
              <li>
                <Link href="/commitments/security" className="text-sm text-white hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/commitments/data-governance" className="text-sm text-white hover:text-white transition-colors">
                  Data and Research Governance
                </Link>
              </li>
              <li>
                <Link href="/commitments/code-of-conduct" className="text-sm text-white hover:text-white transition-colors">
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
                  <Link href="/about" className="text-sm text-white hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/company/leadership" className="text-sm text-white hover:text-white transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="text-sm text-white hover:text-white transition-colors">
                    Careers
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
          <p>&copy; {currentYear} Sauti Labs. All rights reserved.</p>
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



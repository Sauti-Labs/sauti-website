import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-semibold">Sauti</h3>
            <p className="text-sm text-slate">
              Building speech and language intelligence for Africa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-slate hover:text-ivory transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-slate hover:text-ivory transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-slate hover:text-ivory transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate hover:text-ivory transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate hover:text-ivory transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-sm text-slate hover:text-ivory transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-sm text-slate hover:text-ivory transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/sauti-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate hover:text-ivory transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/sautilabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate hover:text-ivory transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/sauti-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate hover:text-ivory transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sauti.ai"
                  className="text-sm text-slate hover:text-ivory transition-colors"
                >
                  hello@sauti.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone text-center text-sm text-slate">
          <p>&copy; {new Date().getFullYear()} Sauti Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our team to discuss partnerships, research collaborations, or product inquiries.",
  openGraph: {
    title: "Contact | Sauti Labs",
    description: "Get in touch with our team to discuss partnerships, research collaborations, or product inquiries.",
    url: "https://sauti.ai/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
            Contact
          </h1>
          <p className="text-xl font-serif text-slate">
            Get in touch with our team to discuss partnerships, research collaborations, or product inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-stone">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-ink mb-4">
                Get in touch
              </h2>
              <p className="text-slate font-serif">
                We're always interested in hearing from researchers, developers, and organizations working on African language technology.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-semibold text-ink mb-1">Email</h3>
                <a
                  href="mailto:hello@sauti.ai"
                  className="text-slate hover:text-clay transition-colors"
                >
                  hello@sauti.ai
                </a>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-ink mb-1">Location</h3>
                <p className="text-slate">Nairobi, Kenya</p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-ink mb-1">Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/sautilabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-clay transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/company/sauti-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-clay transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sauti-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-clay transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-oat p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-ink mb-2">
                Join our community
              </h3>
              <p className="text-sm text-slate mb-4">
                Connect with other researchers and developers working on African language AI.
              </p>
              <a
                href="/contribute"
                className="inline-flex items-center text-sm font-medium text-clay hover:text-clay-deep transition-colors"
              >
                Learn how to contribute →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

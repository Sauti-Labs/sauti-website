import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sauti Labs and our mission to make artificial intelligence more capable, natural, and accessible across African languages.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Sauti Labs",
    description:
      "We connect research, technology, and product development to advance AI across African languages.",
    url: "https://sautilabs.co.ke/about",
    images: [{ url: "/opengraph-image", alt: "About Sauti Labs" }],
  },
};

const sectionHeading =
  "text-2xl md:text-3xl font-heading font-semibold tracking-tight";

const bodyCopy =
  "text-base md:text-lg text-[var(--color-slate)] leading-relaxed";

const separator = "border-t border-[var(--color-line,#DCE6E5)]";

export default function About() {
  return (
    <main className="flex flex-col pt-16">
      <div className="max-w-[1440px] w-full mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start py-16 md:py-24">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight">
              Advancing AI across African languages
            </h1>
          </div>

          <div className="flex flex-col items-start gap-8 md:pt-2">
            <p className="text-lg md:text-xl text-[var(--color-slate)] leading-relaxed">
              The future of artificial intelligence should account for the
              world&apos;s linguistic diversity. Sauti Labs is an African-language
              AI company developing the technologies, infrastructure, and
              products that enable AI to understand, generate, and communicate
              across African languages.
            </p>

            <Link
              href="/company/careers"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3 bg-[var(--color-teal-600)] text-white rounded transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Join us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <div className={separator} aria-hidden="true" />

        {/* The gap */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-24">
          <div>
            <h2 className={`${sectionHeading} mb-6`}>The Gap We Saw</h2>

            <div className="space-y-5">
              <p className={bodyCopy}>
                Artificial intelligence is changing how people communicate
                with technology. Yet the quality of these experiences still
                depends heavily on the language a person speaks. Across many
                African languages, the technologies needed to make AI
                communication feel natural, work reliably, and remain
                accessible are still not where they need to be.
              </p>

              <p className={bodyCopy}>
                Sauti Labs was founded to help close this gap. We recognised
                that Africa needs more than research breakthroughs and new
                models. It needs products that translate advances in AI into
                experiences people can actually use: systems that understand
                speech, generate natural voices, and make interacting with
                technology in African languages feel intuitive rather than
                like an afterthought.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[var(--bg-alt,#F1F7F6)]">
            <Image
              src="/About.jpeg"
              alt="Visual representation of Sauti Labs and its work advancing AI across African languages"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        <div className={separator} aria-hidden="true" />

        {/* Research and future */}
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
            {/* Bridging research and product */}
            <div className="md:pr-12 lg:pr-16">
              <h2 className={`${sectionHeading} mb-6`}>
                Bridging Research and Product
              </h2>

              <div className="space-y-5">
                <p className={bodyCopy}>
                  Closing this gap means looking beyond the boundary between
                  research and product development. The quality of a speech
                  system depends on the data behind it, the models that power
                  it, the engineering that makes it reliable, and the
                  experience it delivers to the people who use it. Progress in
                  one area means little if it never translates into better
                  experiences in the real world.
                </p>

                <p className={bodyCopy}>
                  At Sauti Labs, we bring these parts together. We pursue
                  research to overcome technical limitations, develop the
                  technologies needed to address them, and engineer those
                  advances into products designed around people&apos;s needs.
                  Our work connects the foundations of African-language AI to
                  the applications through which its capabilities reach the
                  world.
                </p>
              </div>
            </div>

            {/* The future */}
            <div className="md:border-l md:border-[var(--color-line,#DCE6E5)] md:pl-12 lg:pl-16">
              <h2 className={`${sectionHeading} mb-6`}>
                The Future We&apos;re Building Towards
              </h2>

              <div className="space-y-5">
                <p className={bodyCopy}>
                  We envision a future in which language is less of a barrier
                  to accessing the benefits of artificial intelligence.
                  Developers should be able to build with capable
                  African-language technologies. Organisations should be able
                  to integrate them into the services they provide. And people
                  should be able to interact with AI through speech and
                  language experiences that feel natural, work reliably, and
                  are accessible to them.
                </p>

                <p className={bodyCopy}>
                  Realising this future requires more than demonstrating what
                  AI can do. It requires turning technical progress into
                  products that meet a high standard of quality while
                  remaining within reach of the people they are built to serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={separator} aria-hidden="true" />
        {/* Ambition */}
        <section className="py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold tracking-tight mb-10">
              Our Ambition
            </h2>

            <div
              className="w-12 h-1 bg-[var(--color-teal-600)] mx-auto mb-10"
              aria-hidden="true"
            />

            <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium leading-relaxed tracking-tight">
              We are building towards a future where African-language AI is
              <span className="text-[var(--color-teal-600)]"> useful</span>,
              <span className="text-[var(--color-teal-600)]"> dependable</span>,
              <span className="text-[var(--color-teal-600)]"> natural</span>,
              and
              <span className="text-[var(--color-teal-600)]"> accessible</span>
              {" "}— not a distant possibility, but a practical reality.
            </p>
          </div>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}

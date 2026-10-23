import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ScrollWaveCta } from "@/components/sections/trailer";


export const metadata: Metadata = {
  title: "Home",
  description:
    "Sauti Labs is an African AI research and technology organisation. We build the data, models, infrastructure and products that let machines understand and speak African languages.",
  openGraph: {
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description:
      "Sauti Labs is an African AI research and technology organisation. We build the data, models, infrastructure and products that let machines understand and speak African languages.",
    url: "https://sauti.ai",
  },
};


// Leave empty until the Dhonam-1 destination is confirmed; the button is then hidden
const READ_MORE_HREF = "";

const headlineLink =
  "underline decoration-[0.06em] underline-offset-[0.1em] transition-[text-decoration-thickness] duration-200 hover:decoration-[0.1em]";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="px-5 pb-16 pt-8 sm:px-8 md:pt-12 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: headline */}
            <Reveal>
              <h1 className="font-heading text-display">
                Building{" "}
                <Link
                  href="/research/speech-intelligence"
                  aria-label="speech — Speech Intelligence research team"
                  className={headlineLink}
                >
                  speech
                </Link>{" "}
                and{" "}
                <Link
                  href="/research/language-intelligence"
                  aria-label="language — Language Intelligence research team"
                  className={headlineLink}
                >
                  language
                </Link>{" "}
                intelligence for Africa.
              </h1>
            </Reveal>

            {/* Right: description */}
            <Reveal delay={0.12} className="lg:translate-y-[19px] lg:translate-x-[32px]">
              <p className="max-w-md font-serif text-body-lg text-muted">
                Sauti Labs is an AI research and products company building models and
                technologies that enable machines to understand and generate speech
                across Africa&apos;s linguistic diversity.
              </p>
            </Reveal>
          </div>

          {/* Dhonam-1 trailer */}
          <ScrollWaveCta/>

          {/* Read more (hidden until the destination is confirmed) */}
          {READ_MORE_HREF && (
            <Reveal delay={0.2} className="mt-8 flex justify-center">
              <Link
                href={READ_MORE_HREF}
                aria-label="Read more about Dhonam-1"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-text px-6 font-sans text-ui font-medium text-text transition-colors hover:bg-bg-alt"
              >
                Read more
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}

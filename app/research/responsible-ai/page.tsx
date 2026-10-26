import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible AI",
  description:
    "Research into responsible development, evaluation, and deployment of African-language AI systems.",
  alternates: {
    canonical: "/research/responsible-ai",
  },
  openGraph: {
    title: "Responsible AI | Sauti Labs",
    description:
      "Research into responsible development, evaluation, and deployment of African-language AI systems.",
    url: "https://sautilabs.co.ke/research/responsible-ai",
    images: [{ url: "/opengraph-image", alt: "Responsible AI research at Sauti Labs" }],
  },
};

export default function ResponsibleAI() {
  return (
    <div className="flex flex-col pt-8">
      <div className="max-w-[1440px] w-full mx-auto px-6 py-12 md:py-16">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link
            href="/research"
            className="text-[var(--color-slate)] hover:text-[var(--color-teal-600)]"
          >
            Research
          </Link>
          <span className="mx-2 text-[var(--color-slate)]">/</span>
          <span className="font-medium">Responsible AI</span>
        </nav>

        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:mb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
              Responsible AI
            </h1>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xl md:text-2xl text-[var(--color-slate,#475569)] leading-relaxed font-normal">
              As speech and language technologies become more capable, ensuring
              that they are developed and deployed responsibly becomes
              increasingly important. AI systems that recognise speech, generate
              voices, and interact with people raise questions that extend beyond
              technical performance, including fairness, consent, data governance,
              and the consequences of system failures. The Responsible AI team
              investigates these challenges across Africa’s diverse linguistic
              and social contexts, examining where systems fail, who bears the
              consequences, how data is used, and what safeguards are needed. Its
              research considers responsibility throughout the AI lifecycle, from
              data sourcing and model development to evaluation, release, and
              deployment.
            </p>

            <p className="mt-5 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
              <span className="font-semibold">Research teams:</span>{" "}
              <Link href="/research/speech-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Speech Intelligence</Link>
              {" \u00B7 "}
              <Link href="/research/language-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Language Intelligence</Link>
              {" \u00B7 "}
              <Link href="/research/language-resources" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Language Resources</Link>
              {" \u00B7 "}
              <Link href="/research/model-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Model Intelligence</Link>
              {" \u00B7 "}
              <Link href="/research/responsible-ai" aria-current="page" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Responsible AI</Link>
            </p>
          </div>
        </div>

        <div
          className="mx-4 border-t-2 border-neutral-950 md:mx-8"
          aria-hidden="true"
        />

        {/* Research Areas */}
        <section className="mt-16 md:mt-20" aria-labelledby="research-areas-heading">
          <h2
            id="research-areas-heading"
            className="mb-8 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-slate,#475569)]"
          >
            Research Areas
          </h2>

          <div className="relative mb-16 aspect-[16/7] w-full overflow-hidden bg-neutral-100 md:mb-20">
            <Image
              src="/Responsible-AI.jpeg"
              alt="Responsible AI research at Sauti Labs"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1440px"
              className="object-cover"
            />
          </div>

          <div className="border-t border-neutral-300">
            <article className="grid grid-cols-1 gap-4 border-b border-neutral-300 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <span className="text-sm tabular-nums text-[var(--color-slate,#475569)]">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Evaluation and fairness
                </h3>
              </div>
              <div className="md:col-span-7 space-y-5"><p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  AI systems do not perform equally across languages, dialects, accents and recording conditions. Aggregate results can hide failures that matter to particular communities, while evaluation datasets may inadequately represent the people a system is intended to serve.
                </p>
                  <details className="group mt-4 flex flex-col">
                    <summary className="order-2 inline-flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-[var(--color-slate,#475569)] underline underline-offset-4 transition-colors hover:text-[var(--color-teal-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Read more +</span>
                      <span className="hidden group-open:inline">Read less</span>
                    </summary>
                    <div className="order-1 mt-5 space-y-5">
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We investigate how speech and language models should be evaluated across their intended populations and operating environments. This includes language-specific benchmarks, performance disparities, dataset limitations, robustness testing and transparent reporting of results.
                </p>
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Our research is guided by the principle that model performance should be assessed in context. Evaluation should inform decisions about a system&apos;s intended uses, known limitations and readiness for release.
                </p>
                    </div>
                  </details></div>
            </article>

            <article className="grid grid-cols-1 gap-4 border-b border-neutral-300 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <span className="text-sm tabular-nums text-[var(--color-slate,#475569)]">02</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Voice safety and misuse prevention
                </h3>
              </div>
              <div className="md:col-span-7 space-y-5"><p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Speech synthesis and voice cloning introduce risks that differ from those of conventional text-based systems. Generated speech can be used to impersonate people, mislead listeners or facilitate fraud. These risks depend on the capabilities of a system, how access is provided and the context in which its outputs are used.
                </p>
                  <details className="group mt-4 flex flex-col">
                    <summary className="order-2 inline-flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-[var(--color-slate,#475569)] underline underline-offset-4 transition-colors hover:text-[var(--color-teal-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Read more +</span>
                      <span className="hidden group-open:inline">Read less</span>
                    </summary>
                    <div className="order-1 mt-5 space-y-5">
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We examine the risks associated with voice generation and voice-based interaction, including speaker consent, impersonation, access controls, misuse prevention and the identification of synthetic speech where technically feasible.
                </p>
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Our work considers safeguards across the lifecycle of voice technologies, from decisions about model capabilities and access to monitoring potential misuse and responding to newly identified risks. We investigate how safeguards should be proportionate to a system&apos;s capabilities and foreseeable harms, recognising that no single technical measure can eliminate every form of misuse.
                </p>
                    </div>
                  </details></div>
            </article>

            <article className="grid grid-cols-1 gap-4 border-b border-neutral-300 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <span className="text-sm tabular-nums text-[var(--color-slate,#475569)]">03</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Privacy and data governance
                </h3>
              </div>
              <div className="md:col-span-7 space-y-5"><p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Speech and language research depends on data, but the availability of a recording or text does not automatically establish the right to use it. Voices can reveal identity and other personal information, while datasets may carry restrictions arising from consent, licensing, provenance or the circumstances in which they were collected.
                </p>
                  <details className="group mt-4 flex flex-col">
                    <summary className="order-2 inline-flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-[var(--color-slate,#475569)] underline underline-offset-4 transition-colors hover:text-[var(--color-teal-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Read more +</span>
                      <span className="hidden group-open:inline">Read less</span>
                    </summary>
                    <div className="order-1 mt-5 space-y-5">
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We investigate the principles and technical practices that should govern data collection, provenance, consent, permitted uses, retention, access and responsible data sharing. Particular attention is given to recorded voices, speaker-identifying information and derived representations that may retain sensitive characteristics. These questions connect directly to our <Link href="/commitments/privacy" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">privacy commitments</Link>.
                </p>
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We consider governance throughout the research lifecycle: before data is accepted, while it is processed and used in model development, and when datasets, models or research outputs are shared. This includes examining what should be documented, which uses are permitted, and what restrictions or safeguards may be necessary. Our aim is to connect responsible data practices with reproducible research without treating openness as a substitute for permission or accountability.
                </p>
                    </div>
                  </details></div>
            </article>

            <article className="grid grid-cols-1 gap-4 border-b border-neutral-300 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <span className="text-sm tabular-nums text-[var(--color-slate,#475569)]">04</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Language communities and context
                </h3>
              </div>
              <div className="md:col-span-7 space-y-5"><p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Responsible AI must account for the people whose languages, voices and knowledge shape the systems being built. Languages are not interchangeable, and linguistic differences extend beyond vocabulary to pronunciation, dialect, cultural meaning and patterns of use. Systems developed without sufficient contextual understanding may exclude communities, misrepresent speech or perform poorly in settings where reliability matters.
                </p>
                  <details className="group mt-4 flex flex-col">
                    <summary className="order-2 inline-flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-[var(--color-slate,#475569)] underline underline-offset-4 transition-colors hover:text-[var(--color-teal-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Read more +</span>
                      <span className="hidden group-open:inline">Read less</span>
                    </summary>
                    <div className="order-1 mt-5 space-y-5">
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We explore ways to incorporate native-speaker expertise, linguistic knowledge and community perspectives into research design, data development, evaluation and documentation. This includes examining how language-specific needs should influence the selection of research priorities, the interpretation of evaluation results and decisions about how models are presented and used.
                </p>
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Our guiding principle is that technical development should be informed by the contexts in which systems are intended to operate. We investigate how community perspectives can meaningfully contribute to research decisions and how limitations, intended uses and potential consequences can be communicated to the people affected by these technologies.
                </p>
                    </div>
                  </details></div>
            </article>

            <article className="grid grid-cols-1 gap-4 border-b border-neutral-300 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <span className="text-sm tabular-nums text-[var(--color-slate,#475569)]">05</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  Human oversight and responsible deployment
                </h3>
              </div>
              <div className="md:col-span-7 space-y-5"><p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  AI systems can produce convincing outputs without being reliable in every situation. In applications such as voice agents, failures may affect people&apos;s understanding, decisions or access to services. Responsible deployment therefore requires more than demonstrating that a model works under controlled conditions.
                </p>
                  <details className="group mt-4 flex flex-col">
                    <summary className="order-2 inline-flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-[var(--color-slate,#475569)] underline underline-offset-4 transition-colors hover:text-[var(--color-teal-600)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Read more +</span>
                      <span className="hidden group-open:inline">Read less</span>
                    </summary>
                    <div className="order-1 mt-5 space-y-5">
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We examine appropriate boundaries for automation, human oversight, escalation and fallback, alongside the conditions under which a system may need to be restricted, corrected or withdrawn. Our research considers the relationship between model capabilities, the consequences of failure and the level of human involvement appropriate for a given application.
                </p>
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  We approach deployment as a lifecycle rather than a single release event. This means investigating how evaluation findings, known limitations, intended-use boundaries and emerging evidence of failure should inform release decisions and subsequent changes. We also consider the governance needed to assign responsibility, document important decisions and respond when a system no longer meets its intended requirements.
                </p>
<p className="text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
                  Our goal is to connect responsible AI principles with practical engineering decisions.
                </p>
                    </div>
                  </details></div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

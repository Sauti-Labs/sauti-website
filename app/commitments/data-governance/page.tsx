import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data & Research Governance | Sauti Labs",
  description:
    "How Sauti Labs approaches data provenance, research integrity, reproducibility, and the responsible use of African speech and language resources.",
  openGraph: {
    title: "Data & Research Governance | Sauti Labs",
    description:
      "Our approach to responsible data practices and rigorous research in African speech and language technology.",
  },
};

const principles = [
  {
    number: "01",
    title: "Data provenance",
    description:
      "We consider where a resource originates, who contributed to it, the circumstances of its collection, and the permissions that govern its use.",
    detail: "Sources, rights & context",
  },
  {
    number: "02",
    title: "Research integrity",
    description:
      "We distinguish measured results from assumptions, document relevant methods, and account for limitations when interpreting research findings.",
    detail: "Evidence, methods & limitations",
  },
  {
    number: "03",
    title: "Reproducibility",
    description:
      "We value research records that explain how data was prepared, how experiments were conducted, and how evaluation results were obtained.",
    detail: "Records, experiments & evaluation",
  },
  {
    number: "04",
    title: "Language representation",
    description:
      "We consider the linguistic and social context of African language resources, including dialect variation, recording conditions, and gaps in coverage.",
    detail: "Languages, speakers & context",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Source",
    description:
      "We examine a resource's origin, collection context, intended use, and applicable permissions.",
  },
  {
    number: "02",
    title: "Prepare & annotate",
    description:
      "We account for processing, filtering, transcription, labelling, and other transformations that shape the resulting data.",
  },
  {
    number: "03",
    title: "Train & evaluate",
    description:
      "We consider whether the data and evaluation methods fit the research question and support the conclusions being drawn.",
  },
  {
    number: "04",
    title: "Assess limitations",
    description:
      "We consider coverage gaps, uncertainty, data quality, and the conditions under which the results were obtained.",
  },
  {
    number: "05",
    title: "Document & maintain",
    description:
      "We value records of methods, resource changes, corrections, and findings that help make research understandable.",
  },
  {
    number: "06",
    title: "Share responsibly",
    description:
      "We consider permissions, privacy, attribution, and foreseeable risks when determining whether and how a resource can be shared.",
  },
];

const records = [
  {
    number: "01",
    title: "Dataset records",
    description:
      "Sources, collection context, intended purpose, composition, applicable terms, and known limitations.",
  },
  {
    number: "02",
    title: "Processing & annotation",
    description:
      "Preparation methods, filtering, normalisation, transcription, annotation decisions, and material transformations.",
  },
  {
    number: "03",
    title: "Experiments & evaluation",
    description:
      "Relevant configurations, evaluation design, metrics, test conditions, and the evidence behind reported results.",
  },
  {
    number: "04",
    title: "Attribution & corrections",
    description:
      "Contributions, attribution requirements, reuse conditions, known errors, and changes that affect interpretation.",
  },
];

const considerations = [
  "Language varieties and dialects",
  "Speaker representation",
  "Recording conditions and quality",
  "Annotation methods and consistency",
  "Privacy, consent, and permissions",
  "Limits on generalising results",
];

const accessOptions = [
  {
    number: "01",
    title: "Open access",
    label: "Suitable for public sharing",
    description:
      "Resources whose permissions and applicable conditions allow public release, with appropriate documentation and attribution.",
  },
  {
    number: "02",
    title: "Controlled access",
    label: "Access with conditions",
    description:
      "Resources whose legitimate use depends on additional permissions, access restrictions, or conditions on reuse.",
  },
  {
    number: "03",
    title: "Restricted release",
    label: "Not suitable for public release",
    description:
      "Resources that cannot responsibly be shared when permissions are absent or unclear, or when relevant risks remain unresolved.",
  },
];

const relatedCommitments = [
  {
    title: "Privacy",
    description: "Personal information and data protection.",
    href: "/commitments/privacy",
  },
  {
    title: "Security",
    description: "Protecting systems, resources, and access.",
    href: "/commitments/security",
  },
  {
    title: "Responsible AI",
    description: "The risks and impacts of AI systems.",
    href: "/commitments/responsible-ai",
  },
  {
    title: "Code of Conduct",
    description: "The standards that guide our work together.",
    href: "/commitments/code-of-conduct",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-xs tracking-widest text-[var(--color-accent)]">
        {number}
      </span>
      <span className="h-px w-8 bg-[var(--color-border)]" />
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {children}
      </span>
    </div>
  );
}

export default function DataGovernancePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-16 lg:py-36">
          <div>
            <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Data &amp; Research Governance
            </h1>
          </div>

          <div className="max-w-xl lg:border-l lg:border-[var(--color-border)] lg:pl-10">
            <p className="text-lg leading-8 text-[var(--color-muted)] sm:text-xl sm:leading-9">
              How we approach data provenance, research integrity,
              reproducibility, and responsible use of African speech and
              language resources.
            </p>

            <a
              href="#our-approach"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70"
            >
              Explore our approach
              <span aria-hidden="true" className="text-lg">
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Page navigation */}
      <nav
        aria-label="On this page"
        className="border-b border-[var(--color-border)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:gap-8 lg:px-16">
          <span className="shrink-0 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)]">
            On this page
          </span>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--color-muted)]">
            <a className="transition-colors hover:text-[var(--color-foreground)]" href="#our-approach">
              Principles
            </a>
            <a className="transition-colors hover:text-[var(--color-foreground)]" href="#research-lifecycle">
              Research lifecycle
            </a>
            <a className="transition-colors hover:text-[var(--color-foreground)]" href="#documentation">
              Documentation
            </a>
            <a className="transition-colors hover:text-[var(--color-foreground)]" href="#language-data">
              Language data
            </a>
            <a className="transition-colors hover:text-[var(--color-foreground)]" href="#data-access">
              Data access
            </a>
            <a className="transition-colors hover:text-[var(--color-foreground)]" href="#research-integrity">
              Research integrity
            </a>
          </div>
        </div>
      </nav>

      {/* Principles */}
      <section id="our-approach" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <SectionLabel number="01">Our approach</SectionLabel>

          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Research quality begins with understanding the data.
            </h2>

            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              The origins, composition, preparation, and permitted uses of a
              dataset shape what researchers can learn from it. These
              considerations are part of our work in African speech and
              language technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="bg-[var(--color-background)] p-7 sm:p-9 lg:p-10"
              >
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-widest text-[var(--color-accent)]">
                    {principle.number}
                  </span>
                  <span className="text-right text-xs text-[var(--color-muted)]">
                    {principle.detail}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-medium tracking-tight sm:text-2xl">
                  {principle.title}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research lifecycle */}
      <section
        id="research-lifecycle"
        className="scroll-mt-20 border-y border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <SectionLabel number="02">The research lifecycle</SectionLabel>

          <div className="mb-14 max-w-3xl">
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Data governance is part of the research, not an afterthought.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              Data decisions influence every stage of model development. Our
              approach considers a resource&apos;s origins, the transformations
              it undergoes, the evidence it supports, and the conditions under
              which it can be shared.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((stage) => (
              <article
                key={stage.number}
                className="flex min-h-56 flex-col bg-[var(--color-background)] p-7 sm:p-8"
              >
                <span className="mb-8 font-mono text-xs tracking-widest text-[var(--color-accent)]">
                  {stage.number}
                </span>

                <h3 className="mb-3 text-lg font-medium sm:text-xl">
                  {stage.title}
                </h3>

                <p className="text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <SectionLabel number="03">Research documentation</SectionLabel>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                Make the work understandable.
              </h2>

              <p className="mt-6 text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                Research records help explain how a resource was created,
                how an experiment was conducted, and where the evidence
                supports or limits a conclusion.
              </p>
            </div>

            <div className="border-t border-[var(--color-border)]">
              {records.map((record) => (
                <article
                  key={record.number}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--color-border)] py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8"
                >
                  <span className="pt-1 font-mono text-xs tracking-widest text-[var(--color-accent)]">
                    {record.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium sm:text-xl">
                      {record.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {record.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* African language data */}
      <section
        id="language-data"
        className="scroll-mt-20 border-y border-[var(--color-border)]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <div>
            <SectionLabel number="04">Language data needs context</SectionLabel>

            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
              African language data is not interchangeable.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              A dataset reflects the people, language varieties, collection
              conditions, and annotation decisions behind it. These factors
              shape how a model performs and how far research findings can
              reasonably be generalised.
            </p>
          </div>

          <div className="lg:pt-8">
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              What we consider
            </h3>

            <ul className="border-t border-[var(--color-border)]">
              {considerations.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-[var(--color-border)] py-4 text-sm leading-6 sm:text-base"
                >
                  <span className="mt-0.5 font-mono text-xs text-[var(--color-accent)]">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data access */}
      <section
        id="data-access"
        className="scroll-mt-20 bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <SectionLabel number="05">Data access &amp; sharing</SectionLabel>

          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Openness depends on the resource.
            </h2>

            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              We consider applicable permissions, privacy, attribution,
              research value, and foreseeable risks when deciding whether
              and how a resource can be shared.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
            {accessOptions.map((option) => (
              <article
                key={option.number}
                className="flex flex-col bg-[var(--color-background)] p-7 sm:p-8 lg:p-9"
              >
                <span className="mb-10 font-mono text-xs tracking-widest text-[var(--color-accent)]">
                  {option.number}
                </span>

                <h3 className="text-xl font-medium sm:text-2xl">
                  {option.title}
                </h3>

                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  {option.label}
                </p>

                <p className="mt-6 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {option.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research integrity */}
      <section
        id="research-integrity"
        className="scroll-mt-20 border-t border-[var(--color-border)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <SectionLabel number="06">Research integrity</SectionLabel>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Claims are only as strong as the evidence behind them.
            </h2>

            <div>
              <p className="text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                We distinguish demonstrated findings from hypotheses,
                recognise the contributions behind research resources,
                and account for relevant limitations when interpreting
                results.
              </p>

              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                Benchmark scores and successful demonstrations provide
                evidence under particular conditions. They do not, on
                their own, establish performance across every African
                language, dialect, speaker group, or real-world setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related commitments */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <h2 className="mb-8 text-2xl font-medium tracking-tight sm:text-3xl">
            Related commitments
          </h2>

          <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
            {relatedCommitments.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex min-h-40 flex-col bg-[var(--color-background)] p-6 transition-colors hover:bg-[var(--color-surface)] sm:p-7"
              >
                <span className="text-lg font-medium">{item.title}</span>

                <span className="mt-3 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                  {item.description}
                </span>

                <span
                  aria-hidden="true"
                  className="mt-6 text-lg transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Questions about research or data?
          </h2>

          <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
            For questions about a research resource, its provenance,
            permissions, or appropriate use, contact Sauti Labs through
            the contact channel published on our website. Include the
            relevant resource and a description of your question without
            sending unnecessary personal or sensitive information.
          </p>
        </div>
      </section>
    </main>
  );
}
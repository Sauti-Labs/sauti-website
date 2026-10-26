import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Sauti Labs approaches security across AI research, speech and language data, models, infrastructure, and applications.",
  alternates: {
    canonical: "/commitments/security",
  },
  openGraph: {
    title: "Security | Sauti Labs",
    description:
      "How Sauti Labs considers the protection of data, AI systems, infrastructure, and research processes.",
    url: "https://sauti.ai/commitments/security",
    images: [{ url: "/opengraph-image", alt: "Sauti Labs security commitments" }],
  },
};

const principles = [
  {
    number: "01",
    title: "Least privilege",
    description:
      "Access is a security consideration across the systems, information, and operations involved in our work. Permissions need to reflect legitimate responsibilities and operational requirements.",
  },
  {
    number: "02",
    title: "Integrity and provenance",
    description:
      "The origins and integrity of datasets, dependencies, code, and model artifacts matter throughout AI development. Traceability helps establish where resources come from and how they change.",
  },
  {
    number: "03",
    title: "Defense in depth",
    description:
      "Security depends on the risks associated with a system and the combination of safeguards relevant to those risks. No single measure addresses every threat.",
  },
  {
    number: "04",
    title: "Continuous assessment",
    description:
      "Security risks change with system capabilities, dependencies, exposure, and use. Our approach considers those changing conditions rather than treating security as a one-time decision.",
  },
];

const protectedAssets = [
  {
    number: "01",
    title: "Data and datasets",
    description:
      "Audio recordings, transcripts, metadata, language resources, and research datasets used in speech and language AI.",
  },
  {
    number: "02",
    title: "Models and training",
    description:
      "Training pipelines, model artifacts, configurations, evaluation resources, dependencies, and AI development workflows.",
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Computing environments, storage, development tools, deployment systems, internal services, and supporting resources.",
  },
  {
    number: "04",
    title: "Applications and APIs",
    description:
      "Web applications, service endpoints, integrations, and interfaces through which users and other systems interact with AI capabilities.",
  },
  {
    number: "05",
    title: "Identity and credentials",
    description:
      "Accounts, service identities, access permissions, API keys, tokens, and other credentials that enable access to systems.",
  },
  {
    number: "06",
    title: "Voice and AI capabilities",
    description:
      "Speech processing, voice generation, and related capabilities that raise questions about unauthorized access, impersonation, and misuse.",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Collection",
    description:
      "Data sources, permissions, provenance, sensitivity, and access requirements shape the security considerations surrounding collected resources.",
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "Input validation, data integrity, sensitive information, transformations, and processing boundaries are relevant to preparing research resources.",
  },
  {
    number: "03",
    title: "Training",
    description:
      "Training security involves the environments, credentials, dependencies, datasets, and pipeline changes used to develop AI models.",
  },
  {
    number: "04",
    title: "Evaluation",
    description:
      "Evaluation involves protecting research resources and examining weaknesses, unexpected behavior, and security-relevant model outcomes.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Access control, configuration, model integrity, service exposure, and resilience inform the security assessment of deployed systems.",
  },
  {
    number: "06",
    title: "Monitoring",
    description:
      "Security signals, reported concerns, changing exposure, and newly identified risks inform the ongoing assessment of systems.",
  },
];

const commitments = [
  {
    id: "dataset-security",
    number: "01",
    title: "Data and dataset security",
    summary:
      "Understanding the provenance, sensitivity, permissions, and integrity of speech and language resources.",
    details: [
      "Dataset sources, permissions, provenance, and usage restrictions are central considerations when assessing speech and language resources.",
      "Raw audio, transcripts, metadata, and restricted research resources can have different sensitivity levels and access requirements.",
      "Data security includes the risks of unauthorized access, accidental disclosure, improper modification, and unnecessary retention.",
      "Dataset versions and transformations are relevant to understanding the origins of a resource and the changes made to it.",
    ],
  },
  {
    id: "model-security",
    number: "02",
    title: "Model and training-pipeline security",
    summary:
      "Examining the integrity of training inputs, development environments, dependencies, and model artifacts.",
    details: [
      "Training-pipeline security involves credential handling, access restrictions, and changes to development workflows.",
      "The provenance of datasets, pretrained models, dependencies, and model artifacts helps inform assessments of development risks.",
      "Model versions, configurations, and release decisions are relevant to traceability and the integrity of AI development.",
      "External components and changes to training or inference workflows introduce security considerations that depend on their role and exposure.",
    ],
  },
  {
    id: "infrastructure-security",
    number: "03",
    title: "Infrastructure and access control",
    summary:
      "Assessing access, credentials, environments, and the systems that support research and development.",
    details: [
      "Role, responsibility, and operational need are important considerations when determining appropriate system access.",
      "Credential security includes avoiding the exposure of secrets in source code and public repositories.",
      "The separation of development, testing, and production environments depends on the architecture and risks of the system.",
      "Changes in responsibilities, unnecessary permissions, and identified security concerns are relevant to access reviews.",
    ],
  },
  {
    id: "application-security",
    number: "04",
    title: "Application and API security",
    summary:
      "Considering unauthorized access, abuse, configuration weaknesses, and software vulnerabilities.",
    details: [
      "Application and API security includes input validation, authentication, and authorization appropriate to each service.",
      "Review and testing are important considerations for changes that affect security-sensitive behavior.",
      "Dependencies and system configurations can introduce known vulnerabilities that require assessment.",
      "For services exposed to users or external systems, safeguards such as rate limits, usage controls, and abuse detection are evaluated according to the risks involved.",
    ],
  },
  {
    id: "voice-security",
    number: "05",
    title: "Voice integrity and misuse prevention",
    summary:
      "Recognizing security risks associated with synthetic speech, speaker-related resources, and voice technologies.",
    details: [
      "Voice recordings and speaker-related resources can contain identifying or sensitive information, making their access and handling important security considerations.",
      "Voice generation and cloning introduce risks that include unauthorized use, impersonation, fraud, and other foreseeable misuse.",
      "The relevance of access controls, usage restrictions, monitoring, and other safeguards depends on each system's capabilities and exposure.",
      "Generated-audio provenance and disclosure mechanisms are relevant considerations when assessing synthetic-speech risks.",
    ],
  },
  {
    id: "testing-vulnerabilities",
    number: "06",
    title: "Security testing and vulnerability management",
    summary:
      "Examining weaknesses, understanding their significance, and identifying appropriate corrective action.",
    details: [
      "Security testing is most relevant when it reflects the system's architecture, exposure, and potential impact.",
      "Security assessments can cover code, dependencies, configuration, access controls, and threats specific to AI systems.",
      "The severity, potential impact, and exposure of an identified issue help determine its significance.",
      "Identified weaknesses require assessment and appropriate corrective action based on their significance and context.",
    ],
  },
  {
    id: "incident-response",
    number: "07",
    title: "Incident response and responsible disclosure",
    summary:
      "Assessing security concerns and reducing harm when vulnerabilities or suspected incidents are reported.",
    details: [
      "The potential impact and the systems or people affected are central to assessing a reported security concern.",
      "Incident-response considerations include containment, investigation, recovery, documentation, and reducing further harm.",
      "Relevant notification obligations and affected parties are considered when applicable.",
      "Responsible vulnerability disclosure provides a way to report potential issues while minimizing unnecessary access, exposure, and disruption.",
    ],
  },
];

const pageLinks = [
  { label: "Security principles", href: "#principles" },
  { label: "What we protect", href: "#protected-assets" },
  { label: "AI security lifecycle", href: "#lifecycle" },
  { label: "Security commitments", href: "#commitments" },
  { label: "Speech and language AI", href: "#speech-ai" },
  { label: "Vulnerability reporting", href: "#reporting" },
  { label: "Related policies", href: "#related-policies" },
];

export default function SecurityPage() {
  return (
    <main className="flex flex-col pt-8">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-10 md:py-16">
        <header className="grid grid-cols-1 items-start gap-8 pb-8 md:pb-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-600)]">
              Security
            </p>

            <h1 className="max-w-3xl font-heading text-5xl font-bold leading-[1.04] tracking-tight text-[var(--color-text,#0f172a)] md:text-6xl lg:text-7xl">
              Protecting the systems behind trusted AI.
            </h1>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-6 lg:pt-8">
            <p className="text-xl leading-relaxed text-[var(--color-slate,#475569)] md:text-2xl">
              Speech and language AI depends on more than capable models. Its
              security also involves the data, infrastructure, development
              processes, and applications behind those capabilities. At Sauti
              Labs, we consider security in the context of the systems we
              develop and the people and communities affected by them.
            </p>

            <div className="relative aspect-[5/3] overflow-hidden bg-neutral-100">
              <Image
                src="/Security.jpeg"
                alt="Security at Sauti Labs: protecting the systems and processes behind AI research."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div aria-hidden="true" className="border-t-2 border-neutral-950" />

        <section
          id="principles"
          aria-labelledby="principles-heading"
          className="grid grid-cols-1 gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
              Our approach
            </p>
            <h2
              id="principles-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] md:text-4xl"
            >
              Security is an engineering discipline.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="border-t border-neutral-300 pt-5"
              >
                <p className="mb-5 text-sm font-semibold text-[var(--color-teal-600)]">
                  {principle.number}
                </p>
                <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-text,#0f172a)]">
                  {principle.title}
                </h3>
                <p className="leading-relaxed text-[var(--color-slate,#475569)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="protected-assets"
          aria-labelledby="protected-heading"
          className="border-t border-neutral-300 py-14 md:py-20"
        >
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
                Scope
              </p>
              <h2
                id="protected-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] md:text-5xl"
              >
                What security covers.
              </h2>
            </div>
            <p className="leading-relaxed text-[var(--color-slate,#475569)] md:col-span-5 md:pt-8">
              Our security approach covers the resources involved in AI
              research and development, the systems that support our work, and
              the people and communities who may be affected by security
              failures.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
            {protectedAssets.map((asset) => (
              <article
                key={asset.number}
                className="border-b border-r border-neutral-300 p-6 md:p-8"
              >
                <p className="mb-8 text-sm font-semibold text-[var(--color-teal-600)]">
                  {asset.number}
                </p>
                <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-text,#0f172a)]">
                  {asset.title}
                </h3>
                <p className="leading-relaxed text-[var(--color-slate,#475569)]">
                  {asset.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="lifecycle"
          aria-labelledby="lifecycle-heading"
          className="border-t border-neutral-300 py-14 md:py-20"
        >
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
              From data to deployment
            </p>
            <h2
              id="lifecycle-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] md:text-5xl"
            >
              Security across the AI lifecycle.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-slate,#475569)]">
              Security considerations span the lifecycle of AI systems. The
              relevant risks vary from data collection and preparation to
              training, evaluation, deployment, and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((stage) => (
              <article
                key={stage.number}
                className="border-b border-r border-neutral-300 p-6 md:p-8"
              >
                <p className="mb-5 text-sm font-semibold text-[var(--color-teal-600)]">
                  STAGE {stage.number}
                </p>
                <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-text,#0f172a)]">
                  {stage.title}
                </h3>
                <p className="leading-relaxed text-[var(--color-slate,#475569)]">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="commitments"
          aria-labelledby="commitments-heading"
          className="border-t border-neutral-300 py-14 md:py-20"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
                Areas of focus
              </p>
              <h2
                id="commitments-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] md:text-4xl"
              >
                Our security commitments.
              </h2>
              <p className="mt-5 leading-relaxed text-[var(--color-slate,#475569)]">
                Our security approach focuses on the risks associated with
                data, models, infrastructure, applications, and voice
                capabilities. Relevant safeguards depend on each system&apos;s
                design, maturity, exposure, and potential impact.
              </p>
            </div>

            <div className="border-t border-neutral-300 md:col-span-8">
              {commitments.map((item) => (
                <details
                  key={item.id}
                  id={item.id}
                  className="group border-b border-neutral-300"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="pt-1 text-sm font-semibold text-[var(--color-teal-600)]">
                      {item.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-lg font-semibold text-[var(--color-text,#0f172a)] md:text-xl">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-[var(--color-slate,#64748b)] md:text-base">
                        {item.summary}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-2 pt-1 text-2xl font-light text-[var(--color-slate,#64748b)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="pb-7 pl-9 pr-2 md:pl-12">
                    <ul className="space-y-3">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 leading-relaxed text-[var(--color-slate,#475569)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-teal-600)]"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="speech-ai"
          aria-labelledby="speech-ai-heading"
          className="border-t border-neutral-300 py-14 md:py-20"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
                Security for AI
              </p>
              <h2
                id="speech-ai-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] md:text-5xl"
              >
                Speech and language AI brings distinct risks.
              </h2>
            </div>

            <div className="space-y-5 leading-relaxed text-[var(--color-slate,#475569)] md:col-span-7">
              <p className="text-lg">
                Voice and language technologies introduce considerations that
                extend beyond conventional software security. Audio can contain
                identifying information, while speech-generation capabilities
                can be misused for impersonation, fraud, and other forms of
                abuse.
              </p>
              <p>
                Our security considerations include who can access
                speaker-related resources, how datasets and model artifacts are
                handled, and which safeguards are relevant to a particular
                capability. The assessment depends on the technology involved
                and the potential consequences of misuse.
              </p>
              <p>
                Speech recognition, voice generation, and related AI
                capabilities present different risk profiles. Security
                decisions need to reflect those differences rather than assume
                that one safeguard addresses every threat.
              </p>
            </div>
          </div>
        </section>

        <section
          id="reporting"
          aria-labelledby="reporting-heading"
          className="border-t border-neutral-300 py-14 md:py-20"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
                Responsible disclosure
              </p>
              <h2
                id="reporting-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] md:text-4xl"
              >
                Help identify security issues.
              </h2>
            </div>

            <div className="space-y-5 leading-relaxed text-[var(--color-slate,#475569)] md:col-span-7">
              <p>
                Responsible vulnerability reporting helps identify potential
                weaknesses and reduce the risk of harm. If you believe you have
                found a security issue affecting a Sauti Labs system, report it
                through an official Sauti Labs contact channel and clearly
                identify it as a security concern.
              </p>
              <p>
                Include enough information to help us understand the reported
                issue, where it is safe to do so. Avoid accessing, modifying,
                or disclosing other people&apos;s information. Do not disrupt
                services or test beyond what is necessary to establish the
                potential vulnerability.
              </p>
              <p className="text-sm text-[var(--color-slate,#64748b)]">
                A dedicated security reporting address and formal disclosure
                procedure are not currently listed on this page. Reports can
                be directed through an official Sauti Labs contact channel and
                identified clearly as security concerns.
              </p>
            </div>
          </div>
        </section>

        <footer
          id="related-policies"
          className="border-t border-neutral-300 pt-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text,#0f172a)]">
                Related policies
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <Link
                  href="/commitments/privacy"
                  className="text-[var(--color-teal-600)] hover:underline"
                >
                  Privacy &amp; Data Protection
                </Link>
                <Link
                  href="/commitments/data-governance"
                  className="text-[var(--color-teal-600)] hover:underline"
                >
                  Data &amp; Research Governance
                </Link>
              </div>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[var(--color-slate,#64748b)]">
              This page describes Sauti Labs&apos; security approach and areas
              of consideration. It does not claim security certification, an
              independent audit, or implementation of every control discussed.
            </p>
          </div>

          <nav
            aria-label="On this page"
            className="mt-8 grid grid-cols-1 gap-6 border-t border-neutral-300 pt-8 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate,#64748b)]">
                On this page
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:col-span-8 md:grid-cols-3">
              {pageLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[var(--color-slate,#475569)] transition-colors hover:text-[var(--color-teal-600)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </footer>
      </div>
    </main>
  );
}

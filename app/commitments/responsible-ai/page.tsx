import Link from "next/link";
import type { Metadata } from "next";

const pageTitle = "Responsible AI";

const pageDescription =
  "How Sauti Labs approaches responsible African-language AI through human agency, linguistic inclusion, privacy, safety, transparency, and accountability.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/commitments/responsible-ai",
  },
  openGraph: {
    title: "Responsible AI | Sauti Labs",
    description: pageDescription,
    url: "https://sautilabs.co.ke/commitments/responsible-ai",
    images: [{ url: "/opengraph-image", alt: "Sauti Labs responsible AI commitments" }],
  },
};

const principles = [
  {
    number: "01",
    title: "Human agency",
    description:
      "We approach AI as a means of supporting human capabilities and informed decision-making, not as a substitute for human judgment in every context. We consider how people understand, interact with, and rely on AI-generated information, particularly where its use can affect important decisions.",
  },
  {
    number: "02",
    title: "Linguistic inclusion",
    description:
      "We treat African languages, dialects, accents, and communication contexts as distinct and important parts of language technology research. We consider whose language varieties are represented in the resources we work with, where evidence is limited, and how differences in representation can affect system performance.",
  },
  {
    number: "03",
    title: "Privacy and consent",
    description:
      "We recognise that speech and language resources can contain personal information, identifiable voices, and sensitive material. We consider provenance, permissions, consent where applicable, data minimisation, and privacy risks when assessing information for research and development.",
  },
  {
    number: "04",
    title: "Safety and misuse prevention",
    description:
      "We recognise that speech synthesis, voice cloning, and language models can enable both beneficial applications and harmful uses. We consider foreseeable misuse, including impersonation, deception, harassment, and misleading generated content, when assessing technologies and their potential applications.",
  },
  {
    number: "05",
    title: "Transparency",
    description:
      "We distinguish demonstrated capabilities from research objectives and unverified assumptions. We communicate relevant limitations and uncertainty, describe the scope of available evidence, and avoid presenting a model, method, or result as more capable or reliable than the evidence supports.",
  },
  {
    number: "06",
    title: "Accountability",
    description:
      "We treat responsible AI as an ongoing part of technical and research decision-making. We value clear documentation, evidence-based review, constructive feedback, and the willingness to revise decisions when new evidence, limitations, or concerns emerge.",
  },
];

const contents = [
  { id: "purpose", label: "Purpose and scope" },
  { id: "principles", label: "Our principles" },
  { id: "data", label: "Data and consent" },
  { id: "evaluation", label: "Evaluation and limitations" },
  { id: "safety", label: "Safety and misuse" },
  { id: "accountability", label: "Accountability" },
];

export default function ResponsibleAI() {
  return (
    <div className="flex flex-col pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <header className="mb-20 grid grid-cols-1 gap-8 md:mb-28 md:grid-cols-2 md:items-start">
          <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Building AI with care for the people it serves.
          </h1>
          <div className="pt-8">
            <p className="text-base leading-8 text-[var(--color-slate)] md:text-lg">
              African-language AI calls for respect for the people, cultures,
              and linguistic communities whose data, knowledge, and
              participation make this work possible. These considerations
              inform how Sauti Labs approaches research, data, and AI systems.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <main className="min-w-0 lg:col-span-8">
            <section
              id="purpose"
              aria-labelledby="purpose-heading"
              className="scroll-mt-28 border-t border-[var(--color-slate)]/20 py-10 md:py-12"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                01 / Foundation
              </p>

              <h2
                id="purpose-heading"
                className="mb-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Purpose and scope
              </h2>

              <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--color-slate)]">
                <p>
                  Sauti Labs works towards African-language AI systems that
                  support speech and language understanding, generation, and
                  related applications. We recognise that the development and
                  use of these technologies carry responsibilities alongside
                  their potential benefits.
                </p>

                <p>
                  Our responsible AI approach applies to the research
                  questions we pursue, the datasets and language resources we
                  assess, the models and outputs we work with, and the
                  third-party AI tools used in our work where applicable.
                </p>

                <p>
                  We consider responsibility alongside technical capability.
                  Privacy, linguistic representation, data permissions,
                  evaluation quality, safety, and transparency are relevant to
                  how we assess research and development decisions. The
                  measures appropriate to a particular activity depend on its
                  purpose, maturity, risks, and available evidence.
                </p>
              </div>
            </section>

            <section
              id="principles"
              aria-labelledby="principles-heading"
              className="scroll-mt-28 border-t border-[var(--color-slate)]/20 py-10 md:py-12"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                02 / What guides us
              </p>

              <h2
                id="principles-heading"
                className="mb-5 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Our principles
              </h2>

              <p className="mb-10 max-w-3xl text-base leading-8 text-[var(--color-slate)]">
                These principles guide how we reason about data, research,
                model development, evaluation, and potential applications.
                They provide a shared basis for examining trade-offs,
                recognising limitations, and considering the people affected
                by our work.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="group flex h-full flex-col border border-[var(--color-slate)]/20 p-6 transition-colors duration-200 hover:border-[var(--color-teal-600)] md:p-7"
                  >
                    <span className="mb-8 text-xs font-semibold tracking-[0.16em] text-[var(--color-teal-600)]">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="mb-3 font-heading text-xl font-semibold md:text-2xl">
                        {principle.title}
                      </h3>

                      <p className="max-w-2xl text-base leading-8 text-[var(--color-slate)]">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="data"
              aria-labelledby="data-heading"
              className="scroll-mt-28 border-t border-[var(--color-slate)]/20 py-10 md:py-12"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                03 / Respect and stewardship
              </p>

              <h2
                id="data-heading"
                className="mb-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Data, consent, and community participation
              </h2>

              <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--color-slate)]">
                <p>
                  Language data is not merely a technical resource. It can
                  contain personal information, identifiable voices, cultural
                  knowledge, and material contributed by people and communities
                  with different expectations about how it should be used.
                </p>

                <p>
                  We consider the origin, provenance, permissions, licensing
                  conditions, and appropriate uses of data when assessing
                  resources for research and development. Where consent is
                  required or forms part of the conditions governing a
                  resource, we account for its scope and the purposes to which
                  the data may be put.
                </p>

                <p>
                  We distinguish access to data from permission to redistribute
                  it, publish it, use it for model training, or apply it to
                  another purpose. We also consider data minimisation,
                  sensitive information, and the limitations of removing direct
                  identifiers from speech and language resources.
                </p>

                <p>
                  We recognise language communities as more than sources of
                  data. Their linguistic knowledge, experiences, and
                  perspectives matter when identifying research priorities,
                  interpreting results, understanding local context, and
                  assessing the potential effects of language technologies.
                  We consider community perspectives alongside technical
                  evidence when they are relevant and available.
                </p>
              </div>
            </section>

            <section
              id="evaluation"
              aria-labelledby="evaluation-heading"
              className="scroll-mt-28 border-t border-[var(--color-slate)]/20 py-10 md:py-12"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                04 / Evidence and limitations
              </p>

              <h2
                id="evaluation-heading"
                className="mb-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Evaluation and limitations
              </h2>

              <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--color-slate)]">
                <p>
                  Model performance can vary across languages, dialects,
                  accents, speakers, recording conditions, and real-world
                  contexts. Results for one language or evaluation dataset do
                  not automatically establish performance in another. This is
                  particularly important for African languages, where available
                  data and evaluation resources can differ substantially.
                </p>

                <p>
                  We consider the relationship between an evaluation method,
                  the task being assessed, and the claims supported by the
                  results. Relevant questions include which language varieties
                  are represented, what conditions are tested, which failure
                  modes remain possible, and how uncertainty affects the
                  interpretation of performance.
                </p>

                <p>
                  We treat benchmarks and demonstrations as evidence with a
                  defined scope, not as universal proof of capability. Where
                  evaluation results or research findings are discussed, their
                  methodology, limitations, and context matter. Any disclosure
                  of results also takes account of privacy, licensing, security,
                  and other relevant restrictions.
                </p>

                <p>
                  Convincing generated speech or text is not, by itself,
                  evidence of accuracy, reliability, fairness, or suitability
                  for a particular use. We distinguish the quality of an
                  output from the evidence needed to support broader claims
                  about a system.
                </p>
              </div>
            </section>

            <section
              id="safety"
              aria-labelledby="safety-heading"
              className="scroll-mt-28 border-t border-[var(--color-slate)]/20 py-10 md:py-12"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                05 / Risk and responsible use
              </p>

              <h2
                id="safety-heading"
                className="mb-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Safety and misuse
              </h2>

              <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--color-slate)]">
                <p>
                  Speech and language technologies can support communication,
                  accessibility, education, and creative work. They can also
                  facilitate impersonation, deception, harassment,
                  manipulation, and other harmful uses. The potential benefits
                  of a technology do not remove the need to consider how it
                  could be misused.
                </p>

                <p>
                  We consider foreseeable risks in relation to a technology&apos;s
                  capabilities, intended applications, and surrounding context.
                  For speech synthesis and voice cloning, relevant concerns
                  include consent, impersonation, disclosure, the misuse of
                  identifiable voices, and the potential for generated audio
                  to mislead listeners.
                </p>

                <p>
                  We distinguish identifying a risk from demonstrating that
                  the risk has been adequately controlled. The safeguards
                  appropriate to a particular system depend on its capabilities,
                  deployment context, potential consequences, and maturity.
                  Where risks are identified, they inform how the technology
                  and its possible uses are assessed.
                </p>

                <p>
                  No single safeguard eliminates every form of misuse. We
                  therefore consider safety in context, remain attentive to
                  known limitations, and take relevant evidence and feedback
                  into account when reassessing risks.
                </p>
              </div>
            </section>

            <section
              id="accountability"
              aria-labelledby="accountability-heading"
              className="scroll-mt-28 border-y border-[var(--color-slate)]/20 py-10 md:py-12"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                06 / Continuous responsibility
              </p>

              <h2
                id="accountability-heading"
                className="mb-6 font-heading text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Accountability and improvement
              </h2>

              <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--color-slate)]">
                <p>
                  Responsible development requires the ability to recognise
                  mistakes, respond to concerns, and revise decisions when
                  necessary. We value clear technical reasoning, documented
                  research methods, and evidence that makes important
                  assumptions and limitations open to examination.
                </p>

                <p>
                  We recognise that responsible AI involves technical,
                  linguistic, social, and governance considerations. The
                  questions raised by a dataset, research experiment, model,
                  or potential application are not always the same. We consider
                  these differences when assessing our work and determining
                  which concerns require further attention.
                </p>

                <p>
                  We welcome constructive feedback from researchers,
                  developers, language communities, and others affected by AI
                  systems. Feedback and new evidence are valuable when they
                  clarify limitations, reveal overlooked risks, challenge
                  assumptions, or identify ways to improve the quality and
                  responsibility of our research.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="related-heading"
              className="py-12 md:py-16"
            >
              <p className="mb-4 text-sm font-medium text-[var(--color-teal-600)]">
                Further reading
              </p>

              <h2
                id="related-heading"
                className="mb-6 font-heading text-2xl font-semibold md:text-3xl"
              >
                Related commitments
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link
                  href="/commitments/privacy"
                  className="group flex min-h-36 flex-col justify-between border border-[var(--color-slate)]/20 p-6 transition-colors hover:border-[var(--color-teal-600)]"
                >
                  <span className="font-heading text-lg font-semibold">
                    Privacy
                  </span>
                  <span className="mt-5 flex items-center justify-between text-sm text-[var(--color-slate)]">
                    How we approach personal information
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>

                <Link
                  href="/commitments/security"
                  className="group flex min-h-36 flex-col justify-between border border-[var(--color-slate)]/20 p-6 transition-colors hover:border-[var(--color-teal-600)]"
                >
                  <span className="font-heading text-lg font-semibold">
                    Security
                  </span>
                  <span className="mt-5 flex items-center justify-between text-sm text-[var(--color-slate)]">
                    Protecting systems and information
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>

                <Link
                  href="/commitments/data-governance"
                  className="group flex min-h-36 flex-col justify-between border border-[var(--color-slate)]/20 p-6 transition-colors hover:border-[var(--color-teal-600)]"
                >
                  <span className="font-heading text-lg font-semibold">
                    Data governance
                  </span>
                  <span className="mt-5 flex items-center justify-between text-sm text-[var(--color-slate)]">
                    Responsible data stewardship
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>

                <Link
                  href="/research/responsible-ai"
                  className="group flex min-h-36 flex-col justify-between border border-[var(--color-slate)]/20 p-6 transition-colors hover:border-[var(--color-teal-600)]"
                >
                  <span className="font-heading text-lg font-semibold">
                    Responsible AI research
                  </span>
                  <span className="mt-5 flex items-center justify-between text-sm text-[var(--color-slate)]">
                    Principles for our research work
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </section>
          </main>

          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24 border-t border-[var(--color-slate)]/20 pt-5">
              <h2 className="mb-5 text-sm font-semibold">On this page</h2>

              <nav aria-label="On this page">
                <ul className="space-y-4">
                  {contents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-[var(--color-slate)] transition-colors hover:text-[var(--color-teal-600)]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 border-t border-[var(--color-slate)]/20 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-teal-600)]">
                  Our approach
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  We approach responsible AI through evidence, linguistic
                  inclusion, respect for people and communities, transparency,
                  and continued attention to the limitations of our work.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

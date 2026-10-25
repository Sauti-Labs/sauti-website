import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy and Data Protection",
  description:
    "How Sauti Labs protects personal information and governs speech data, language resources, and responsible African-language AI research.",
  openGraph: {
    title: "Privacy and Data Protection | Sauti Labs",
    description:
      "Our approach to privacy, speech data, language resources, and responsible AI research.",
  },
};

const commitments = [
  {
    id: "purpose",
    title: "Purpose and lawful use",
    summary:
      "We account for why information is collected and how it is used.",
    details: [
      "We assess the purpose of collecting or processing information before using it in research, development, evaluation, or operations.",
      "We consider the legal basis for processing, the expectations of the people concerned, and the context in which information was obtained.",
      "We do not treat the technical availability of data as automatic permission to use it for every purpose.",
    ],
  },
  {
    id: "minimisation",
    title: "Data minimisation",
    summary:
      "We limit information collection and use to what the task requires.",
    details: [
      "We seek to collect and process only information relevant to a defined research, development, evaluation, or operational purpose.",
      "Where appropriate, we consider whether a task can be completed using less identifying information, aggregated information, or a suitable alternative.",
      "We account for the possibility that apparently ordinary data may become identifying or sensitive when combined with other information.",
    ],
  },
  {
    id: "consent-and-sources",
    title: "Consent, permissions and data sources",
    summary:
      "We assess the permissions and conditions attached to the data we use.",
    details: [
      "We consider consent, applicable legal bases, source permissions, licensing terms, and other relevant conditions before using data.",
      "For contributed or collected speech and language resources, we account for the circumstances in which the data was obtained and the purposes for which it may be used.",
      "We distinguish permission to access a resource from permission to redistribute it, publish it, use it for model training, or use it for other purposes.",
      "Where the available permissions or provenance are unclear, we treat that uncertainty as a matter to resolve rather than assuming unrestricted use.",
    ],
  },
  {
    id: "speech-data",
    title: "Speech and language data",
    summary:
      "We recognise the privacy implications of voice recordings and language resources.",
    details: [
      "Speech recordings may contain personal information and may reveal a speaker's identity, characteristics, circumstances, or other sensitive details.",
      "We consider privacy, consent, provenance, licensing, intended use, and potential risks when handling speech recordings, transcripts, annotations, and derived resources.",
      "We recognise that removing a person's name does not necessarily make a voice recording anonymous.",
      "We distinguish datasets, model inputs, annotations, evaluation materials, and generated outputs because each may create different privacy and disclosure risks.",
      "We assess the context and permissions associated with a resource rather than assuming that all African-language data can be used under the same conditions.",
    ],
  },
  {
    id: "security",
    title: "Security and confidentiality",
    summary:
      "We treat the protection of information as part of responsible data handling.",
    details: [
      "We consider the sensitivity of information and the risks associated with unauthorised access, disclosure, alteration, loss, or misuse.",
      "We limit access to information according to the needs of the relevant work and the responsibilities of the people involved.",
      "We consider appropriate safeguards when information is stored, transferred, accessed, processed, or shared.",
      "We treat security as an ongoing responsibility throughout the data lifecycle, not solely as a matter of storage.",
    ],
  },
  {
    id: "retention-and-sharing",
    title: "Retention, sharing and deletion",
    summary:
      "We consider how long information is needed and the conditions for sharing it.",
    details: [
      "We assess retention in relation to the purpose of processing, applicable obligations, research requirements, and relevant permissions.",
      "We do not assume that information should be retained indefinitely merely because storage is available.",
      "Before sharing data or making resources publicly available, we consider privacy risks, licensing, consent, contractual conditions, and the possibility of re-identification.",
      "Where deletion or withdrawal is applicable, we consider the information concerned, the relevant obligations, and the technical and operational circumstances.",
      "We recognise that removing a dataset from active use may not automatically remove copies, backups, derived materials, or previously distributed resources.",
    ],
  },
  {
    id: "individual-rights",
    title: "Individual rights and privacy requests",
    summary:
      "We recognise that people may have rights concerning their personal information.",
    details: [
      "We take privacy questions and requests concerning personal information seriously.",
      "We assess requests in light of applicable law, the information involved, our role in processing it, and any relevant legal exceptions.",
      "Where a request concerns information held by another organisation or service, we may need to direct the requester to the organisation responsible for that information.",
      "We do not promise that every request can be fulfilled in every circumstance, but we aim to handle requests responsibly and transparently.",
    ],
  },
  {
    id: "website-data",
    title: "Website data and cookies",
    summary:
      "We consider privacy in the operation and improvement of our website.",
    details: [
      "Information submitted through our website or communications channels may be used to respond to enquiries and support the relevant interaction.",
      "Technical information may be processed to operate, secure, maintain, and improve the website, subject to the technologies and services in use.",
      "Where cookies or comparable technologies are used, their purposes and applicable choices should be communicated in accordance with relevant requirements.",
      "We do not describe a technology as being in use unless it is actually implemented in the relevant environment.",
    ],
  },
];

const pageLinks = [
  { label: "Purpose and lawful use", href: "#purpose" },
  { label: "Data minimisation", href: "#minimisation" },
  { label: "Consent and data sources", href: "#consent-and-sources" },
  { label: "Speech and language data", href: "#speech-data" },
  { label: "Security and confidentiality", href: "#security" },
  { label: "Retention and sharing", href: "#retention-and-sharing" },
  { label: "Individual rights", href: "#individual-rights" },
  { label: "Website data and cookies", href: "#website-data" },
];

const lifecycle = [
  {
    number: "01",
    title: "Collection",
    description:
      "We consider the source, purpose, permissions, and context in which information is obtained.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We assess relevance, sensitivity, provenance, applicable conditions, and potential privacy risks.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "We consider minimisation, access, documentation, and appropriate handling before use.",
  },
  {
    number: "04",
    title: "Use",
    description:
      "We account for the purpose and conditions governing research, development, and evaluation.",
  },
  {
    number: "05",
    title: "Sharing",
    description:
      "We consider authorisation, privacy risks, licensing, and disclosure before sharing resources.",
  },
  {
    number: "06",
    title: "Retention",
    description:
      "We consider continuing need, applicable obligations, and appropriate retention or deletion.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#172B35]">
      <section className="border-b border-[#DCE5E8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Privacy and data protection
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#52666F]">
              We protect personal information by accounting for how it is
              collected, assessed, used, stored, and shared throughout our
              research and development activities.
            </p>
          </div>

          <div className="border-l-2 border-[#168A91] pl-6 lg:ml-auto lg:max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
              Our approach
            </p>
            <p className="mt-4 text-xl leading-8">
              Privacy is part of responsible speech and language technology.
              It informs how we handle data, evaluate risk, and determine
              whether a resource is appropriate for a particular use.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.7fr_1.3fr]">
        <aside>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
            On this page
          </p>
          <nav className="mt-6 space-y-3">
            {pageLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm leading-6 text-[#52666F] transition-colors hover:text-[#168A91]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              How we approach privacy
            </h2>
            <p className="mt-6 text-base leading-8 text-[#52666F]">
              Sauti Labs works with speech, language resources, datasets,
              models, and related research materials. These activities can
              involve personal information and data subject to different
              permissions and restrictions. Our approach considers those
              differences rather than treating all data as interchangeable.
            </p>
            <p className="mt-4 text-base leading-8 text-[#52666F]">
              The commitments below describe the principles we apply when
              assessing and handling information. They do not mean that every
              possible technical control, certification, or formal compliance
              process is in place in every environment.
            </p>
          </div>

          <div className="mt-12 divide-y divide-[#DCE5E8] border-y border-[#DCE5E8]">
            {commitments.map((item) => (
              <details key={item.id} id={item.id} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#52666F]">
                      {item.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-2xl text-[#168A91] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <ul className="mt-5 space-y-3 pr-8 text-sm leading-7 text-[#52666F]">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
              Speech and language data
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Privacy across the data lifecycle
            </h2>
            <p className="mt-6 text-base leading-8 text-[#52666F]">
              Data handling is not a single decision. We consider privacy and
              permissions across the stages through which a resource passes,
              from its source to its use, sharing, and eventual retention or
              deletion.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-[#DCE5E8] bg-white sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((item) => (
              <article key={item.number} className="bg-white p-7 md:p-9">
                <p className="text-sm font-semibold tracking-[0.12em] text-[#168A91]">
                  {item.number}
                </p>
                <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#52666F]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
            Responsible handling
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Sharing, retention, and deletion
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#52666F]">
          <p>
            We consider the conditions attached to information before
            disclosing it, distributing a dataset, publishing a research
            resource, or making material available to others. Public
            accessibility does not by itself establish permission for every
            subsequent use.
          </p>
          <p>
            Retention and deletion depend on the purpose of processing,
            applicable requirements, the permissions governing the resource,
            and the technical circumstances. We avoid making blanket promises
            about removing every copy or derived artefact where that outcome
            cannot be guaranteed.
          </p>
          <p>
            When working with third-party services or collaborators, we
            consider the information involved, the purpose of the transfer,
            and the conditions governing its handling.
          </p>
        </div>
      </section>

      <section className="border-y border-[#DCE5E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
              Legal framework
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Privacy obligations and accountability
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#52666F]">
            <p>
              Our privacy approach takes account of applicable data protection
              requirements, including Kenya&apos;s Data Protection Act, 2019,
              where relevant to our activities.
            </p>
            <p>
              The legal obligations that apply to a particular activity depend
              on factors such as the nature of the information, the purpose of
              processing, the parties involved, and the relevant jurisdiction.
            </p>
            <p>
              This page provides general information about our approach. It is
              not legal advice, does not replace applicable agreements or
              notices, and should not be read as a claim of certification or
              independent legal verification.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
            Get in touch
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Privacy questions and requests
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#52666F]">
            Contact Sauti Labs if you have a question about this page, the
            handling of personal information, or a privacy-related request.
            Please avoid including sensitive personal information in your
            initial enquiry unless it is necessary.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center border-t border-[#DCE5E8] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="text-base leading-8 text-[#52666F]">
            For general enquiries, reach out through our website contact
            channel. We will assess the nature of the request and determine
            the appropriate next steps.
          </p>
          <Link
            href="/about#contact"
            className="mt-6 inline-flex items-center gap-3 border-b border-[#168A91] pb-2 text-sm font-semibold text-[#168A91] transition-colors hover:text-[#126C72]"
          >
            Contact Sauti Labs <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section className="bg-white text-[#202D32]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
              Related commitments
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.02em]">
              Explore how we approach responsible AI
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/commitments/security"
              className="text-[#52666F] transition-colors hover:text-[#168A91]"
            >
              Security
            </Link>
            <Link
              href="/commitments/responsible-ai"
              className="text-[#52666F] transition-colors hover:text-[#168A91]"
            >
              Responsible AI
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
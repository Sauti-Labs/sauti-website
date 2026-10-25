"use client";

import { useState } from "react";

const opportunityGroups = [
  {
    number: "01",
    title: "Machine Learning Research",
    description:
      "Investigate the methods, architectures, and training approaches that can advance speech and language technology for African languages.",
    roles: [
      {
        title: "Machine Learning Researcher",
        description:
          "Investigate modelling approaches, design experiments, analyse results, and contribute to reproducible research.",
        skills: "Machine learning, deep learning, experimental design, Python, and scientific reasoning.",
      },
      {
        title: "Speech Researcher",
        description:
          "Explore speech recognition, speech synthesis, audio representation learning, and other speech technology problems.",
        skills: "Speech processing, signal processing, deep learning, audio, and research methodology.",
      },
      {
        title: "Natural Language Processing Researcher",
        description:
          "Investigate language modelling, multilingual learning, text processing, and methods for improving NLP in African languages.",
        skills: "NLP, language models, machine learning, computational linguistics, and evaluation.",
      },
      {
        title: "Model Evaluation Researcher",
        description:
          "Develop evaluation methods, analyse model errors, investigate language-specific weaknesses, and improve research reproducibility.",
        skills: "Evaluation methodology, statistics, experimental design, dataset analysis, and technical writing.",
      },
    ],
  },
  {
    number: "02",
    title: "AI Systems & Engineering",
    description:
      "Build the software, infrastructure, and engineering systems that connect research, data, models, and practical applications.",
    roles: [
      {
        title: "Machine Learning Engineer",
        description:
          "Implement model training and inference workflows, prepare experiments, and help turn research ideas into working systems.",
        skills: "Python, machine learning frameworks, testing, data pipelines, and model development.",
      },
      {
        title: "AI Systems Engineer",
        description:
          "Design and build the systems connecting datasets, models, evaluation workflows, inference, and applications.",
        skills: "Software engineering, systems design, Python, Linux, APIs, and performance analysis.",
      },
      {
        title: "ML Infrastructure Engineer",
        description:
          "Improve experiment reproducibility, model packaging, computational efficiency, training workflows, and deployment infrastructure.",
        skills: "Linux, containers, automation, cloud or compute infrastructure, monitoring, and reproducible workflows.",
      },
      {
        title: "Backend Engineer",
        description:
          "Develop reliable services, APIs, data access layers, and application infrastructure supporting Sauti's technology.",
        skills: "Backend development, API design, databases, testing, security fundamentals, and system design.",
      },
      {
        title: "Frontend Engineer",
        description:
          "Build accessible, responsive interfaces for research tools, developer experiences, and future language technology applications.",
        skills: "JavaScript or TypeScript, React, web accessibility, responsive design, and frontend testing.",
      },
      {
        title: "Full-Stack Engineer",
        description:
          "Develop complete software workflows across user interfaces, backend services, data systems, and AI integrations.",
        skills: "Frontend and backend development, APIs, databases, testing, and software architecture.",
      },
      {
        title: "Software Quality & Testing Engineer",
        description:
          "Build automated tests, validation systems, and quality assurance workflows that make Sauti's software dependable.",
        skills: "Automated testing, CI/CD, test design, debugging, and software quality practices.",
      },
    ],
  },
  {
    number: "03",
    title: "Data & African Language Resources",
    description:
      "Develop the datasets, linguistic resources, and data workflows needed to build and evaluate language technology responsibly.",
    roles: [
      {
        title: "Language Data Engineer",
        description:
          "Build data processing, validation, transformation, and dataset management workflows for speech and language research.",
        skills: "Python, data pipelines, structured data, validation, version control, and documentation.",
      },
      {
        title: "Dataset & Corpus Curator",
        description:
          "Organise language resources, document dataset provenance, maintain metadata, and improve dataset usability and discoverability.",
        skills: "Data management, metadata, dataset documentation, quality control, and licensing awareness.",
      },
      {
        title: "African Language Specialist",
        description:
          "Contribute language-specific knowledge of grammar, vocabulary, orthography, usage, and linguistic variation.",
        skills: "Demonstrable expertise in one or more African languages, linguistic analysis, and attention to detail.",
      },
      {
        title: "Computational Linguist",
        description:
          "Connect linguistic knowledge with computational representations, language analysis, and evaluation methods.",
        skills: "Linguistics, morphology, phonology, syntax, corpus analysis, and computational methods.",
      },
      {
        title: "Speech Data Researcher",
        description:
          "Help design speech data collection, annotation guidelines, recording quality checks, and dataset evaluation workflows.",
        skills: "Speech research, audio quality, annotation design, research ethics, and data quality assurance.",
      },
      {
        title: "Data Annotation & Quality Specialist",
        description:
          "Develop annotation guidelines, review samples, identify inconsistencies, and help maintain reliable language datasets.",
        skills: "Language proficiency, careful annotation, quality control, guideline development, and documentation.",
      },
    ],
  },
  {
    number: "04",
    title: "Product, Design & Developer Experience",
    description:
      "Make language technology useful, accessible, understandable, and easier for people to integrate into their work.",
    roles: [
      {
        title: "Product Designer",
        description:
          "Research user needs and design clear workflows and interfaces for speech and language technology applications.",
        skills: "Product design, interaction design, prototyping, user research, and design systems.",
      },
      {
        title: "UI/UX Researcher",
        description:
          "Investigate how people interact with language technology, identify usability barriers, and translate findings into product insights.",
        skills: "User research, interviews, usability testing, qualitative analysis, and research communication.",
      },
      {
        title: "Product Engineer",
        description:
          "Connect technical capabilities to practical user needs through prototypes, integrations, and application development.",
        skills: "Software engineering, product thinking, API integration, testing, and iterative development.",
      },
      {
        title: "Developer Experience Engineer",
        description:
          "Improve developer workflows, integration examples, technical onboarding, and the usability of Sauti's developer-facing resources.",
        skills: "Software development, APIs, developer tooling, documentation, and debugging.",
      },
      {
        title: "Technical Writer",
        description:
          "Create understandable technical documentation, implementation guides, research explanations, and contributor resources.",
        skills: "Technical communication, structured writing, editing, documentation tools, and the ability to understand technical material.",
      },
      {
        title: "Accessibility Specialist",
        description:
          "Help identify and address accessibility barriers in digital experiences and language technology interfaces.",
        skills: "Accessibility standards, inclusive design, usability evaluation, and assistive technology awareness.",
      },
    ],
  },
  {
    number: "05",
    title: "Responsible AI & Organisation",
    description:
      "Support responsible research, clear communication, effective collaboration, and the organisational practices needed to sustain the work.",
    roles: [
      {
        title: "Responsible AI Researcher",
        description:
          "Investigate model behaviour, representation, privacy considerations, potential harms, and responsible development practices.",
        skills: "AI research, evaluation, ethics, critical analysis, and technical communication.",
      },
      {
        title: "AI Governance & Policy Researcher",
        description:
          "Research relevant AI governance frameworks, policy developments, and responsible AI practices for language technology.",
        skills: "Policy research, governance, analytical writing, research synthesis, and attention to regulatory context.",
      },
      {
        title: "Research Communications Contributor",
        description:
          "Help communicate research questions, findings, technical progress, and the wider significance of Sauti's work.",
        skills: "Research communication, writing, editing, and the ability to explain complex ideas clearly.",
      },
      {
        title: "Scientific & Technical Editor",
        description:
          "Review research manuscripts, technical reports, and documentation for clarity, consistency, structure, and accuracy.",
        skills: "Technical editing, scientific writing, critical reading, and attention to detail.",
      },
      {
        title: "Community & Partnerships Contributor",
        description:
          "Help build relationships with researchers, language communities, universities, and organisations whose work aligns with Sauti's mission.",
        skills: "Communication, relationship building, research, coordination, and cultural awareness.",
      },
      {
        title: "Research Operations Coordinator",
        description:
          "Help coordinate research activities, milestones, documentation, and collaboration across different areas of work.",
        skills: "Project coordination, documentation, organisation, communication, and task management.",
      },
      {
        title: "People & Talent Contributor",
        description:
          "Help improve role descriptions, candidate communication, contributor onboarding, and people-related processes.",
        skills: "Communication, coordination, candidate experience, organisation, and discretion.",
      },
      {
        title: "Legal & Governance Research Contributor",
        description:
          "Support legal research, governance documentation, policy reviews, and responsible organisational practices within an appropriate scope.",
        skills: "Legal research, policy analysis, clear writing, and relevant legal or governance knowledge.",
      },
    ],
  },
];

const faqs = [
  {
    question: "Who can apply?",
    answer:
      "We welcome applications from people whose skills, experience, interests, or demonstrated potential align with the work described. Opportunities span research, engineering, African language resources, product development, responsible AI, communications, and organisational support.",
  },
  {
    question: "Do I need previous experience in AI or machine learning?",
    answer:
      "Not for every role. Some opportunities require specialised technical or research experience, while others may suit people demonstrating relevant skills through projects, language expertise, writing, design work, or other practical contributions. Review each role's requirements before applying.",
  },
  {
    question: "Can I apply if I am still studying?",
    answer:
      "Yes. Students and early-career contributors are welcome to apply when their skills and interests match an opportunity. We consider relevant projects, demonstrated ability, communication, and the scope of the proposed contribution.",
  },
  {
    question: "Can I contribute remotely?",
    answer:
      "Remote collaboration may be possible depending on the role and the work involved. The practical arrangements, communication expectations, and any location-specific requirements will be discussed directly.",
  },
  {
    question: "Can I express interest in more than one role?",
    answer:
      "Yes. You can identify multiple relevant roles in your application. Tell us where your strongest skills lie and which kinds of work interest you most so that we can understand how your experience might fit.",
  },
  {
    question: "What if my skills do not match a listed opportunity?",
    answer:
      "You can still get in touch through the open contribution route. Explain your area of expertise, the problem you would like to work on, and how your proposed contribution could support Sauti Labs' mission. We cannot guarantee that every proposal will lead to an opportunity.",
  },
  {
    question: "What does the application process involve?",
    answer:
      "Start by identifying a relevant role and sharing information about your skills, experience, interests, and relevant work. If there is a potential fit, we may arrange a conversation to discuss your background and the proposed contribution. Any next steps depend on the role.",
  },
  {
    question: "What time commitment is expected?",
    answer:
      "The expected commitment depends on the role, the work to be undertaken, and the contributor's circumstances. We discuss availability, responsibilities, milestones, and practical expectations before agreeing on a contribution.",
  },
  {
    question: "How are working arrangements determined?",
    answer:
      "Working arrangements are discussed directly with prospective contributors. The conversation covers the proposed scope, responsibilities, expectations, collaboration, and the terms relevant to the particular opportunity.",
  },
  {
    question: "Can I ask questions before applying?",
    answer:
      "Yes. If you would like clarification about a role or want to discuss whether your experience might be relevant, you can reach out through Sauti Labs&apos; official contact channels before submitting an application.",
  },
];

function OpportunityGroup({
  group,
}: {
  group: (typeof opportunityGroups)[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const [openRoles, setOpenRoles] = useState<string[]>([]);

  function toggleRole(title: string) {
    setOpenRoles((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }

  return (
    <section
      id={`opportunity-${group.number}`}
      className="border-b border-[var(--color-line,#DCE6E5)]"
    >
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="flex w-full items-start justify-between gap-6 py-7 text-left sm:py-8"
      >
        <span className="flex min-w-0 items-start gap-4 sm:gap-7">
          <span className="pt-1 text-sm font-medium text-[var(--color-teal-900,#0B2E35)]">
            {group.number}
          </span>
          <span className="min-w-0">
            <span className="block text-xl font-semibold tracking-tight text-[var(--color-teal-900,#0B2E35)] sm:text-2xl">
              {group.title}
            </span>
            <span className="mt-2 block max-w-2xl text-sm leading-7 text-[var(--color-slate,#4A6168)] sm:text-base">
              {group.description}
            </span>
            <span className="mt-3 block text-xs font-medium text-[var(--color-slate,#4A6168)]">
              {group.roles.length} contribution areas
            </span>
          </span>
        </span>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line,#DCE6E5)] text-lg text-[var(--color-teal-900,#0B2E35)]"
        >
          {expanded ? "-" : "+"}
        </span>
      </button>

      {expanded && (
        <div className="pb-7 pl-8 sm:pb-9 sm:pl-[4.5rem]">
          <div className="border-t border-[var(--color-line,#DCE6E5)]">
            {group.roles.map((role) => {
              const roleOpen = openRoles.includes(role.title);

              return (
                <div
                  key={role.title}
                  className="border-b border-[var(--color-line,#DCE6E5)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleRole(role.title)}
                    aria-expanded={roleOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-medium text-[var(--color-teal-900,#0B2E35)]">
                      {role.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-[var(--color-teal-900,#0B2E35)]"
                    >
                      {roleOpen ? "-" : "+"}
                    </span>
                  </button>

                  {roleOpen && (
                    <div className="max-w-3xl pb-6">
                      <p className="text-sm leading-7 text-[var(--color-slate,#4A6168)] sm:text-base">
                        {role.description}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-slate,#4A6168)]">
                        <span className="font-semibold text-[var(--color-teal-900,#0B2E35)]">
                          Relevant skills:{" "}
                        </span>
                        {role.skills}
                      </p>
                      <a
                        href="/about#contact"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal-900,#0B2E35)] underline underline-offset-4 hover:opacity-70"
                      >
                        Express interest <span aria-hidden="true">?</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

function FAQItem({
  item,
}: {
  item: (typeof faqs)[number];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-[var(--color-line,#DCE6E5)]">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="text-base font-medium text-[var(--color-teal-900,#0B2E35)] sm:text-lg">
          {item.question}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl text-[var(--color-teal-900,#0B2E35)]"
        >
          {expanded ? "-" : "+"}
        </span>
      </button>

      {expanded && (
        <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-[var(--color-slate,#4A6168)] sm:text-base">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[var(--background,#FFFFFF)] text-[var(--color-teal-900,#0B2E35)]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Help build the future of African-language AI.
            </h1>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#opportunities"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--color-teal-600)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Explore opportunities <span className="ml-3" aria-hidden="true">?</span>
            </a>
            <a
              href="#how-we-work"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--color-line,#DCE6E5)] px-6 py-3 text-sm font-semibold text-[var(--color-teal-900,#0B2E35)] transition-colors hover:bg-[var(--bg-alt,#F1F7F6)]"
            >
              How we work
            </a>
          </div>

          
          </div>

          <div className="md:pt-1">
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-slate,#4A6168)] sm:text-xl sm:leading-9">
              Africa&apos;s languages deserve AI systems that understand them,
              speak them naturally, and serve the people who use them. We bring
              together people across machine learning research, engineering,
              language resources, product development, and responsible AI to
              help make that possible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line,#DCE6E5)] bg-[var(--bg-alt,#F1F7F6)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-900,#0B2E35)]">
              Why Sauti Labs
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              The next generation of AI should speak to everyone.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--color-slate,#4A6168)]">
            <p>
              Useful language technology requires more than powerful models.
              It requires representative data, rigorous research, reliable
              engineering, linguistic knowledge, and products designed around
              the people who use them.
            </p>
            <p>
              Sauti Labs exists to help advance AI for African languages,
              connecting research with the technology and resources needed to
              make language tools more useful and accessible.
            </p>
            <p className="font-medium text-[var(--color-teal-900,#0B2E35)]">
              The challenge is technical. It is linguistic. It is also a
              product and accessibility challenge.
            </p>
          </div>
        </div>
      </section>

      <section
        id="opportunities"
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-900,#0B2E35)]">
              Opportunities
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-5xl">
              Find your place in the work.
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-[var(--color-slate,#4A6168)]">
            Explore the disciplines where you can contribute. Open a group to
            see the roles, responsibilities, and relevant skills. We value
            meaningful contributions, clear communication, and work that can
            be reviewed and improved.
          </p>
        </div>

        <div>
          {opportunityGroups.map((group) => (
            <OpportunityGroup key={group.number} group={group} />
          ))}
        </div>
      </section>

      <section
        id="how-we-work"
        className="border-y border-[var(--color-line,#DCE6E5)] bg-[var(--bg-alt,#F1F7F6)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-900,#0B2E35)]">
              How we work
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-5xl">
              Good work is built together.
            </h2>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Work on real problems",
                text: "Contribute to research, datasets, software, documentation, and practical language technology.",
              },
              {
                number: "02",
                title: "Collaborate across disciplines",
                text: "Bring engineering, research, language expertise, design, and other perspectives together.",
              },
              {
                number: "03",
                title: "Make work reproducible",
                text: "Value documentation, appropriate testing, reviewable contributions, and research others can verify.",
              },
              {
                number: "04",
                title: "Contribute sustainably",
                text: "Agree on realistic scopes, responsibilities, availability, and expectations before work begins.",
              },
            ].map((principle) => (
              <article key={principle.number} className="border-t border-[var(--color-line,#DCE6E5)] pt-5">
                <p className="text-sm font-semibold text-[var(--color-teal-900,#0B2E35)]">
                  {principle.number}
                </p>
                <h3 className="mt-4 text-lg font-semibold">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate,#4A6168)]">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="application-process"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-900,#0B2E35)]">
            The process
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-5xl">
            Start with a conversation.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-slate,#4A6168)]">
            We want to understand what you can contribute, what you hope to
            learn, and whether there is a meaningful fit with the work.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Explore opportunities",
              text: "Identify a role or discipline that matches your skills and interests.",
            },
            {
              number: "02",
              title: "Tell us about yourself",
              text: "Share relevant experience, projects, language expertise, or other evidence of your work.",
            },
            {
              number: "03",
              title: "Have a conversation",
              text: "Discuss your interests, the work involved, and whether there is a potential fit.",
            },
            {
              number: "04",
              title: "Agree on the scope",
              text: "Clarify responsibilities, expectations, availability, and practical arrangements before starting.",
            },
          ].map((step) => (
            <article key={step.number} className="border-t border-[var(--color-line,#DCE6E5)] pt-5">
              <p className="text-sm font-semibold text-[var(--color-teal-900,#0B2E35)]">
                {step.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-slate,#4A6168)]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="faqs"
        className="border-y border-[var(--color-line,#DCE6E5)] bg-[var(--bg-alt,#F1F7F6)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-900,#0B2E35)]">
              FAQs
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Questions before you get started.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-8 text-[var(--color-slate,#4A6168)]">
              Here are some answers to common questions about opportunities
              and contributing to Sauti Labs.
            </p>
          </div>

          <div>
            {faqs.map((item) => (
              <FAQItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="express-interest"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="border-t border-[var(--color-line,#DCE6E5)] pt-10 sm:pt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-900,#0B2E35)]">
            Open contribution
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Have something else to contribute?
          </h2>
          <div className="mt-7 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-base leading-8 text-[var(--color-slate,#4A6168)]">
              Not every valuable contribution fits a predefined role. If your
              skills, research interests, language expertise, or experience
              align with our mission, tell us what you would like to work on
              and how you think you could contribute.
            </p>
            <a
              href="/about#contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[var(--color-teal-600)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              How to express interest <span aria-hidden="true">?</span>
            </a>
          </div>
        </div>

        <div
          id="application-guidance"
          className="mt-14 scroll-mt-8 border border-[var(--color-line,#DCE6E5)] p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold">Tell us about your contribution</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-slate,#4A6168)] sm:text-base">
            When reaching out through Sauti Labs&apos; official contact channels,
            include the role or discipline that interests you, a short
            introduction, relevant experience or work samples, your interests,
            and the kind of contribution you have in mind.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-slate,#4A6168)] sm:text-base">
            Please share links to existing work where possible. We review
            expressions of interest based on relevance, current priorities,
            and our capacity to support the proposed work. An expression of
            interest does not guarantee an opportunity.
          </p>
        </div>
      </section>
    </main>
  );
}







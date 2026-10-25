import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Respect and professionalism",
    description:
      "We engage with one another in good faith. We challenge ideas, methods and decisions without demeaning the people behind them. Disagreement is part of serious technical work; intimidation and personal attacks are not.",
  },
  {
    number: "02",
    title: "Inclusion and equal participation",
    description:
      "We work to make participation meaningful across different backgrounds, experiences, abilities and perspectives. We do not tolerate discrimination or harassment, and we make room for people to contribute without having to overcome avoidable barriers.",
  },
  {
    number: "03",
    title: "Honest communication",
    description:
      "We communicate what we know, what we do not know and what remains uncertain. We do not knowingly misrepresent our work, capabilities, progress, evidence or commitments to teammates, collaborators, communities or the public.",
  },
  {
    number: "04",
    title: "Accountability",
    description:
      "We take responsibility for our decisions and their effects. When something goes wrong, we aim to acknowledge it, correct what we can and learn from the experience rather than conceal errors or shift blame.",
  },
  {
    number: "05",
    title: "Collaboration and attribution",
    description:
      "We respect the contributions, ideas and intellectual work of others. We give appropriate credit, honour agreed responsibilities and permissions, and do not present another person's work as our own.",
  },
  {
    number: "06",
    title: "Responsible representation",
    description:
      "When representing Sauti Labs, we communicate within the scope of our responsibilities and avoid implying that personal views, unapproved statements or experimental results are official company positions.",
  },
];

const integrityAreas = [
  {
    number: "A",
    title: "Research and evidence",
    description:
      "We report methods, findings, limitations and failures honestly. We do not fabricate data, falsify results, manipulate evidence or present unsupported conclusions as established findings.",
  },
  {
    number: "B",
    title: "Data and permissions",
    description:
      "We treat data, recordings, datasets and other research materials with care. We respect applicable permissions, licensing terms, privacy expectations and restrictions on collection, access, use and sharing.",
  },
  {
    number: "C",
    title: "Language communities",
    description:
      "We approach African languages and the people who use them with respect. We avoid treating communities as interchangeable data sources, recognise linguistic and cultural context, and take concerns about representation and harm seriously.",
  },
  {
    number: "D",
    title: "Model claims and evaluation",
    description:
      "We distinguish measured performance from aspiration. We do not knowingly misrepresent a model's capabilities, evaluation conditions, language coverage, limitations or readiness for real-world use.",
  },
];

const boundaries = [
  {
    title: "Harassment and discrimination",
    description:
      "Unwelcome harassment, discriminatory conduct, threats, targeted humiliation or abusive behaviour directed at people because of who they are or how they participate.",
  },
  {
    title: "Abuse of trust",
    description:
      "Misusing access, authority, confidential information or a position of responsibility to exploit, intimidate, manipulate or unfairly disadvantage others.",
  },
  {
    title: "Research and technical misconduct",
    description:
      "Deliberate fabrication or falsification, plagiarism, unauthorised disclosure of protected information, or knowingly misleading others about evidence, authorship or results.",
  },
  {
    title: "Retaliation and harmful behaviour",
    description:
      "Punishing, threatening or targeting someone for raising a concern in good faith, or engaging in conduct that undermines others' safety, dignity or ability to contribute.",
  },
];

export default function CodeOfConductPage() {
  return (
    <main className="bg-white text-[#172B35]">
      {/* Hero */}
      <section className="border-b border-[#DCE5E8]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16">
            <div>

              <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl">
                A standard for
                <br />
                how we work.
              </h1>
            </div>

            <div className="max-w-xl md:justify-self-end">
              <p className="text-lg leading-8 text-[#52666F] md:text-xl md:leading-9">
                Sauti Labs brings people together to build and research speech
                and language technology. How we work matters as much as what we
                build.
              </p>
              <p className="mt-5 text-base leading-8 text-[#52666F]">
                This Code sets out the standards of conduct we expect across
                our collaborations, research, engineering and public work.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 border-t border-[#DCE5E8] pt-6 sm:grid-cols-[1fr_2fr] sm:items-center md:mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#168A91]">
              Our foundational standard
            </p>
            <p className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
              Respect. Integrity. Accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="border-b border-[#DCE5E8]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
                01 / Scope
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                A shared responsibility.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#52666F] md:text-lg">
                This Code applies to Sauti Labs team members, contributors,
                collaborators and people representing the organisation. It
                informs how we work together, communicate, conduct research,
                develop technology and participate in activities connected to
                Sauti Labs.
              </p>
              <p className="mt-5 text-base leading-8 text-[#52666F]">
                It applies in relevant professional interactions, including
                project discussions, meetings, research collaborations,
                repositories, events and public communications. Where other
                applicable policies or legal obligations impose additional
                requirements, this Code does not replace them.
              </p>

              <div className="mt-8 grid grid-cols-2 border-t border-[#DCE5E8] sm:grid-cols-4">
                {[
                  "Team members",
                  "Contributors",
                  "Collaborators",
                  "Representatives",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`py-4 text-sm font-medium text-[#52666F] ${
                      index % 2 === 0 ? "pr-3" : "pl-3 sm:pl-4"
                    } ${
                      index > 1 ? "border-t border-[#DCE5E8] sm:border-t-0" : ""
                    } ${
                      index > 0 ? "sm:border-l sm:border-[#DCE5E8] sm:pl-4" : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-[#DCE5E8]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
                02 / How we work
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                The principles behind our work.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#52666F] md:text-lg">
              These principles guide our day-to-day decisions, especially when
              the work is difficult, the evidence is incomplete or people
              disagree about the way forward.
            </p>
          </div>

          <div className="border-t border-[#DCE5E8]">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-4 border-b border-[#DCE5E8] py-7 md:grid-cols-[72px_0.8fr_1.2fr] md:gap-8 md:py-9"
              >
                <p className="text-sm font-semibold tracking-[0.08em] text-[#168A91]">
                  {principle.number}
                </p>
                <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                  {principle.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-[#52666F]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research integrity */}
      <section className="border-b border-[#DCE5E8] bg-[#F7FAFA]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
                03 / The work itself
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                Integrity in research and engineering.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#52666F]">
                Responsible technology begins with how evidence is gathered,
                interpreted, documented and communicated.
              </p>
            </div>

            <div className="grid gap-x-8 sm:grid-cols-2">
              {integrityAreas.map((area, index) => (
                <article
                  key={area.number}
                  className={`border-t border-[#CBDADD] py-6 ${
                    index > 1 ? "sm:mt-2" : ""
                  }`}
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#168A91]">
                    {area.number}
                  </p>
                  <h3 className="text-xl font-medium tracking-[-0.025em]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[#52666F]">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boundaries */}
      <section className="border-b border-[#DCE5E8]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
                04 / Boundaries
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                Conduct that is not acceptable.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#52666F] md:text-lg">
                Conduct that violates the standards in this Code can damage
                trust, compromise research and prevent people from participating
                safely and meaningfully.
              </p>
            </div>
          </div>

          <div className="grid gap-x-12 sm:grid-cols-2">
            {boundaries.map((boundary, index) => (
              <article
                key={boundary.title}
                className="border-t border-[#DCE5E8] py-7 md:py-8"
              >
                <p className="mb-3 text-sm font-semibold text-[#168A91]">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                  {boundary.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#52666F]">
                  {boundary.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-[#168A91] bg-[#F7FAFA] px-5 py-5 md:px-7">
            <p className="text-base leading-8 text-[#52666F]">
              <span className="font-semibold text-[#172B35]">
                Context matters.
              </span>{" "}
              Good-faith mistakes, unsuccessful experiments, respectful
              disagreement and questions raised during learning are not
              automatically misconduct. We distinguish ordinary challenges in
              technical work from deliberate dishonesty, harmful behaviour and
              violations of others&apos; rights or trust.
            </p>
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="border-b border-[#DCE5E8] bg-[#F7FAFA]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
              05 / Accountability
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              When something is not right.
            </h2>
          </div>

          <div className="grid overflow-hidden border border-[#DCE5E8] bg-white md:grid-cols-2">
            <div className="p-6 md:p-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#168A91]">
                Raising a concern
              </p>
              <h3 className="text-2xl font-medium tracking-[-0.03em]">
                Speak up in good faith.
              </h3>
              <p className="mt-4 text-base leading-8 text-[#52666F]">
                If you experience or witness conduct that may conflict with this
                Code, you can contact Sauti Labs to raise the concern. Share
                relevant details where you can, and avoid circulating sensitive
                information more widely than necessary.
              </p>
              <p className="mt-4 text-base leading-8 text-[#52666F]">
                We ask everyone to approach concerns honestly and respectfully.
                Retaliation against someone for raising a concern in good faith
                is not acceptable.
              </p>

              <Link
                href="/about#contact"
                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#168A91] transition-colors hover:text-[#116C72]"
              >
                Contact Sauti Labs
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="border-t border-[#DCE5E8] p-6 md:border-l md:border-t-0 md:p-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#168A91]">
                Responding to violations
              </p>
              <h3 className="text-2xl font-medium tracking-[-0.03em]">
                Take concerns seriously.
              </h3>
              <p className="mt-4 text-base leading-8 text-[#52666F]">
                Concerns should be considered thoughtfully, with attention to
                the available information, the people affected and the context
                of the situation. Responses should aim to address harm, protect
                participation and uphold the standards described here.
              </p>
              <p className="mt-4 text-base leading-8 text-[#52666F]">
                Appropriate action depends on the circumstances and the
                responsibilities and authority available to Sauti Labs. This
                Code does not replace applicable law or other relevant
                organisational policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 border-b border-[#DCE5E8] pb-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pb-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
                A shared standard
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                The work is better when the standards are shared.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#52666F] md:text-lg">
              Building useful, trustworthy African speech and language
              technology takes more than technical skill. It requires
              intellectual honesty, respect for people and communities, and a
              willingness to take responsibility for our work.
            </p>
          </div>

          <div className="pt-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#168A91]">
              Related commitments
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Responsible AI",
                  href: "/commitments/responsible-ai",
                },
                {
                  title: "Privacy and Data Protection",
                  href: "/commitments/privacy",
                },
                {
                  title: "Data & Research Governance",
                  href: "/commitments/data-governance",
                },
              ].map((commitment) => (
                <Link
                  key={commitment.title}
                  href={commitment.href}
                  className="group flex min-h-24 items-center justify-between gap-4 border-t border-[#DCE5E8] py-5 text-base font-medium text-[#52666F] transition-colors hover:border-[#168A91] hover:text-[#168A91]"
                >
                  <span>{commitment.title}</span>
                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

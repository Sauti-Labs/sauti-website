import type { Metadata } from "next";
import Image from "next/image";
import Biography from "./Biography";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the founders and executives leading Sauti Labs.",
  openGraph: {
    title: "Leadership | Sauti Labs",
    description: "Meet the founders and executives leading Sauti Labs.",
    url: "https://sauti.ai/company/leadership",
  },
};

type Leader = {
  name: string;
  title: string;
  image: string;
  bio: string;
};

const founders: Leader[] = [
  {
    name: "Bernard Abuto",
    title: "Founder, CEO & Chief Research Officer",
    image: "/leadership/bernard.jpeg",
    bio: "Bernard Abuto Otieno is the founder and Chief Executive Officer of Sauti Labs, where he directs the company’s research agenda, strategic vision, and long-term development. His work centres on machine learning research and AI systems engineering, with a focus on the development, optimisation, and deployment of speech and language technologies. He is particularly interested in the research, models, datasets, and systems required to advance language technology across Africa’s linguistic landscape.",
  },
  {
    name: "Daisy Oduor",
    title: "Co-Founder & Chief Operating Officer",
    image: "/leadership/daisy.jpeg",
    bio: "Daisy Oduor leads operations at Sauti Labs, translating the company’s strategic priorities into coordinated execution. Her technical background spans full-stack software development, cloud infrastructure, and scalable digital applications, giving her an engineering perspective on the operational demands of building an AI company. As COO, she oversees operational coordination and helps establish the processes and organisational foundations that support the company’s research, engineering, and development efforts.",
  },
];

const executives: Leader[] = [
  {
    name: "Brian Noel",
    title: "Chief Technology Officer",
    image: "/leadership/noel.jpeg",
    bio: "Brian Noel leads technology and engineering at Sauti Labs, directing the architectural decisions and technical foundations that shape the company’s systems. His areas of focus include AI systems engineering, software architecture, backend infrastructure, and the development of reliable, scalable software. As CTO, he works to translate technical objectives into robust implementations, establish sound engineering practices, and ensure that the company’s models, services, and supporting infrastructure can function as cohesive systems.",
  },
  {
    name: "Godrick Narman Mwani",
    title: "Chief Machine Learning Officer",
    image: "/leadership/namaan.jpeg",
    bio: "Godrick Narman Mwani leads machine learning at Sauti Labs, contributing to the direction and development of the company’s machine learning capabilities. His work spans machine learning, AI engineering, and software architecture, with an emphasis on translating technical concepts and research ideas into practical systems. He focuses on the development of machine learning technologies that address real-world challenges and strengthen the capabilities of speech and language applications.",
  },
  {
    name: "Barry Yaola Shroldder",
    title: "Chief Legal Officer",
    image: "/leadership/barry.jpeg",
    bio: "Barry Yaola Shroldder leads legal, responsible AI, and governance initiatives at Sauti Labs. His interests span technology law, intellectual property, AI governance, data protection, digital rights, and technology policy, particularly as these fields shape the development and deployment of emerging technologies across Africa. His experience includes intellectual property training through the World Intellectual Property Organization (WIPO) and participation in the Millennium Fellowship. At Sauti Labs, he focuses on the legal frameworks, governance practices, and accountability principles needed to support responsible technological development and protect individual rights.",
  },
];

function FounderCard({ leader }: { leader: Leader }) {
  return (
    <article className="grid min-w-0 grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-4 sm:gap-6 lg:gap-8">
      <div className="relative aspect-[3/4] min-w-0 overflow-hidden rounded-xl bg-[var(--bg-alt,#F1F7F6)]">
        <Image
          src={leader.image}
          alt={`Portrait of ${leader.name}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 639px) 40vw, (max-width: 1023px) 35vw, 20vw"
          priority={leader.name === "Bernard Abuto"}
        />
      </div>

      <div className="min-w-0 py-1">
        <p className="text-xs font-medium leading-relaxed text-[var(--color-slate)] sm:text-sm">
          {leader.title}
        </p>

        <h3 className="mt-2 break-words font-heading text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
          {leader.name}
        </h3>


        <Biography bio={leader.bio} />
      </div>
    </article>
  );
}

function ExecutiveCard({ leader }: { leader: Leader }) {
  return (
    <article className="flex min-w-0 flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[var(--bg-alt,#F1F7F6)]">
        <Image
          src={leader.image}
          alt={`Portrait of ${leader.name}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-sm font-medium leading-relaxed text-[var(--color-slate)]">
          {leader.title}
        </p>

        <h3 className="mt-2 break-words font-heading text-xl font-semibold tracking-tight sm:text-2xl">
          {leader.name}
        </h3>


        <div className="mt-auto">
          <Biography bio={leader.bio} />
        </div>
      </div>
    </article>
  );
}

export default function Leadership() {
  return (
    <main className="flex flex-col pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:py-20">
        <section className="mb-20 grid grid-cols-1 gap-8 md:mb-28 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="max-w-xl font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Leadership at Sauti Labs
            </h1>
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className="text-lg leading-relaxed text-[var(--color-slate)]">
              Sauti Labs is dedicated to advancing speech and language
              technology through research, innovation, and engineering. The
              leadership team brings together diverse expertise and a shared
              commitment to developing technology that reflects the linguistic
              diversity of African communities. Together, they guide the
              company&apos;s research direction, technical development, and
              long-term vision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3 bg-[var(--color-teal-600)] text-white rounded transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Learn about Sauti
              </a>

              <a
                href="/company/careers"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--color-cream,#F5F0E6)] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85"
              >
                Join the team
              </a>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="founders-heading"
          className="mb-24 md:mb-32"
        >
          <div className="mb-8 border-b border-[var(--color-line,#DCE6E5)] pb-5 md:mb-10">
            <h2
              id="founders-heading"
              className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            {founders.map((founder) => (
              <FounderCard key={founder.name} leader={founder} />
            ))}
          </div>
        </section>

        <section aria-labelledby="executives-heading">
          <div className="mb-8 border-b border-[var(--color-line,#DCE6E5)] pb-5 md:mb-10">
            <h2
              id="executives-heading"
              className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
            >
              Executives
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
            {executives.map((executive) => (
              <ExecutiveCard key={executive.name} leader={executive} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

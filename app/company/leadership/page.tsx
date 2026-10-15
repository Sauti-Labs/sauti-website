import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team at Sauti Labs.",
  openGraph: {
    title: "Leadership | Sauti Labs",
    description: "Meet the leadership team at Sauti Labs.",
    url: "https://sauti.ai/company/leadership",
  },
};

export default function Leadership() {
  const founder = {
    name: "Bernard Abuto",
    title: "Founder, CEO & Chief Research Officer",
    image: "/leadership/bernard.jpeg",
    bio: "Owns organisational vision, research direction, long-term technical strategy, research programmes, scientific standards, strategic partnerships, organisational representation, and major technical and strategic decisions.",
  };

  const executives = [
    {
      id: 1,
      name: "Daisy Oduor",
      title: "Co-Founder & Chief Operating Officer",
      image: "/images/leadership/daisy-oduor.jpg",
      bio: "Owns organisational operations, internal coordination, people operations, programme execution, organisational processes, operational planning, hiring operations, and internal communication to ensure Sauti Labs can execute what it decides to build.",
    },
    {
      id: 2,
      name: "Brian Noel",
      title: "Chief Technology Officer",
      image: "/images/leadership/brian-noel.jpg",
      bio: "Leads software engineering, system architecture, platform engineering, infrastructure, backend systems, APIs, developer infrastructure, and production reliability.",
    },
    {
      id: 3,
      name: "Godrick Narman Mwani",
      title: "Chief Machine Learning Officer",
      image: "/images/leadership/godrick-narman.jpg",
      bio: "Drives machine learning strategy, model development, ML architecture, training, experimentation, ML systems, model optimisation, and evaluation technical standards.",
    },
    {
      id: 4,
      name: "Barry Yaola Shroldder",
      title: "Chief Legal Officer",
      image: "/images/leadership/barry-yaola.jpg",
      bio: "Oversees legal strategy, regulatory compliance, intellectual property protection, data governance policies, licensing frameworks, and corporate legal affairs across all jurisdictions.",
    },
  ];

  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        {/* Founder & CEO */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-semibold mb-8">Founder & CEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border border-[var(--color-line,#DCE6E5)] p-8 rounded-xl bg-[var(--surface,#FFFFFF)]">
            <div className="relative aspect-[4/5] w-full border border-[var(--color-line,#DCE6E5)] rounded-lg overflow-hidden bg-[var(--bg-alt,#F1F7F6)]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-2">{founder.name}</h3>
              <p className="text-[var(--color-slate)] mb-4 font-medium">{founder.title}</p>
              <p className="text-[var(--color-slate)] leading-relaxed">
                {founder.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Executives */}
        <section>
          <h2 className="text-2xl font-heading font-semibold mb-8">Executives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((exec) => (
              <div
                key={exec.id}
                className="border border-[var(--color-line,#DCE6E5)] p-6 rounded-xl bg-[var(--surface,#FFFFFF)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full border border-[var(--color-line,#DCE6E5)] mb-4 rounded-lg overflow-hidden bg-[var(--bg-alt,#F1F7F6)]">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-1">{exec.name}</h3>
                  <p className="text-sm text-[var(--color-slate)] font-medium mb-3">{exec.title}</p>
                  <p className="text-sm text-[var(--color-slate)] leading-relaxed">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
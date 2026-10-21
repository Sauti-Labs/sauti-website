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
    bio: "Bernard Abuto Otieno is the founder and Chief Executive Officer of Sauti Labs, where he leads the company's research direction and long-term vision for African speech and language technology. His work focuses on the intersection of machine learning research and AI systems engineering, with an emphasis on building, optimising, and deploying language technologies for African languages. He is driven by the goal of advancing the research, models, datasets, and systems needed to make speech and language AI more capable, accessible, and useful across Africa."
  };

  const executives = [
    {
      id: 1,
      name: "Daisy Oduor",
      title: "Co-Founder & Chief Operating Officer",
      image: "/leadership/daisy.jpeg",
      bio: "Daisy Oduor leads operational coordination at Sauti Labs, helping translate the company's strategic priorities into structured execution. Her background spans full-stack software development, cloud infrastructure, and the development of scalable digital applications, with experience across modern web technologies and AI-related systems. She brings an engineering perspective to the operational challenges of building an AI company, connecting technical development with the coordination, processes, and organizational foundations needed to sustain it. As COO, Daisy helps shape the operational direction that enables Sauti Labs to advance its speech and language technologies and build products that better represent Africa's linguistic diversity.",
    },
    {
      id: 2,
      name: "Brian Noel",
      title: "Chief Technology Officer",
      image: "/leadership/noel.jpeg",
      bio: "Brian Noel leads technology and engineering at Sauti Labs, overseeing the architectural direction and technical foundations of the company's AI platform. His work encompasses AI systems engineering, software architecture, backend infrastructure, and the engineering of reliable, scalable systems for speech and language technology. He focuses on translating research objectives into robust technical implementations, ensuring that models, services, and supporting infrastructure work together as cohesive, production-ready systems. As CTO, Brian is responsible for shaping the engineering decisions and technical standards that underpin Sauti Labs' products, research capabilities, and long-term technology roadmap. ",
    },
    {
      id: 3,
      name: "Godrick Narman Mwani",
      title: "Chief Machine Learning Officer",
      image: "/leadership/namaan.jpeg",
      bio: " Godrick Narman Mwani leads machine learning at Sauti Labs, shaping the development of intelligent systems and the technical direction of the company's machine learning capabilities. His work sits at the intersection of machine learning, AI engineering, and software architecture, with a focus on translating research and technical ideas into robust, practical AI systems. At Sauti Labs, he contributes to building AI technologies designed to address real-world challenges and advance the capabilities of African speech and language technology.",
    },
    {
      id: 4,
      name: "Barry Yaola Shroldder",
      title: "Chief Legal Officer",
      image: "/leadership/barry.jpeg",
      bio: "Shroldder Barry Yaola leads legal, responsible AI, and governance initiatives at Sauti Labs, focusing on the legal and institutional frameworks shaping the development and deployment of emerging technologies. His areas of expertise and research interest include technology law, intellectual property, AI governance, data protection, digital rights, and technology policy, with particular attention to the challenges and opportunities these fields present across Africa. Having undertaken intellectual property training through the World Intellectual Property Organization (WIPO) and participated in the Millennium Fellowship, Barry is committed to advancing responsible innovation grounded in sound legal frameworks, accountability, and the protection of rights in an increasingly AI-driven world.",
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
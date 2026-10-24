"use client";

import Image from "next/image";
import { useState } from "react";

const researchAreas = [
  {
    number: "01",
    category: "LEARNING",
    title: "Model Training & Adaptation",
    summary:
      "Developing and adapting models that learn effectively from limited data and generalise across African languages.",
    focus:
      "African languages differ in the amount and quality of available training data, linguistic structure, and representation in pretrained models. Research in this area explores methods for training and adapting speech and language models to improve their ability to learn from limited resources and transfer knowledge across languages.",
    directions: [
      "Training and fine-tuning speech and language models",
      "Cross-lingual transfer and multilingual learning",
      "Adapting pretrained models to underrepresented languages",
      "Parameter-efficient fine-tuning",
      "Learning effectively from limited training data",
    ],
    questions: [
      "How can knowledge transfer between languages improve model performance when labelled data is scarce?",
      "Which adaptation methods are effective for languages with different levels of available resources?",
    ],
  },
  {
    number: "02",
    category: "RELIABILITY",
    title: "Model Evaluation & Reliability",
    summary:
      "Investigating how models perform, where they fail, and how reliably they generalise across languages and real-world conditions.",
    focus:
      "A single aggregate score can hide important differences in model performance across languages, dialects, tasks, and usage conditions. Research in this area examines evaluation methods, error patterns, robustness, and reproducibility to build a clearer understanding of model capabilities and limitations in African-language applications.",
    directions: [
      "Evaluation of speech recognition, speech synthesis, and language models",
      "Performance differences across languages and language varieties",
      "Error analysis and model failure modes",
      "Robustness under changing or noisy conditions",
      "Reproducible evaluation methods and benchmarks",
    ],
    questions: [
      "How can evaluation reveal performance gaps that aggregate metrics conceal?",
      "How consistently do models perform across languages, speakers, and real-world conditions?",
    ],
  },
  {
    number: "03",
    category: "COMPUTATION",
    title: "Model Efficiency & Deployment",
    summary:
      "Studying the trade-offs between model capability, computational cost, latency, and practical deployment.",
    focus:
      "Models must be practical to run as well as capable. Research in this area explores ways to reduce computational and memory requirements while understanding the effects of optimisation on model quality. The goal is to investigate deployment approaches suited to different hardware, connectivity, and resource constraints.",
    directions: [
      "Model compression and quantisation",
      "Efficient inference and memory optimisation",
      "Latency, throughput, and computational cost",
      "Deployment on constrained hardware",
      "Reproducible compute and performance benchmarks",
    ],
    questions: [
      "Which optimisation strategies reduce inference costs while preserving useful model performance?",
      "What trade-offs emerge when deploying models across different hardware and resource constraints?",
    ],
  },
];

export default function ModelResearchAreas() {
  const [openAreas, setOpenAreas] = useState<string[]>([]);

  function toggleArea(number: string) {
    setOpenAreas((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number],
    );
  }

  return (
    <section
      className="mt-16 md:mt-20"
      aria-labelledby="research-areas-heading"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            id="research-areas-heading"
            className="font-heading text-3xl font-bold tracking-tight text-[var(--color-text,#0f172a)] md:text-4xl"
          >
            Research areas
          </h2>
        </div>

      </div>

      <p className="mb-8 max-w-3xl text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
        We investigate how models learn, how their capabilities can be
        evaluated, and how they can operate efficiently across African-language
        applications.
      </p>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Image: 40% of the desktop layout */}
        <div className="min-w-0 lg:col-span-5">
          <div className="overflow-hidden bg-neutral-100">
            <Image
              src="/Model-Intelligence.jpeg"
              alt="Artwork for Sauti Labs Model Intelligence research"
              width={720}
              height={1004}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Expandable research areas: 60% of the desktop layout */}
        <div className="min-w-0 lg:col-span-7">
          <div className="border-t border-[var(--color-border,#dbe2e8)]">
            {researchAreas.map((area) => {
              const isOpen = openAreas.includes(area.number);
              const panelId = `model-research-${area.number}`;

              return (
                <article
                  key={area.number}
                  className="border-b border-[var(--color-border,#dbe2e8)]"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleArea(area.number)}
                      className="group grid w-full grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-3 py-6 text-left md:grid-cols-[3rem_minmax(0,1fr)_2.5rem] md:gap-4 md:py-7"
                    >
                      <span className="font-mono text-sm text-[var(--color-slate,#64748b)]">
                        {area.number}
                      </span>

                      <span className="min-w-0">
                        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-teal-600)] md:text-xs">
                          {area.category}
                        </span>

                        <span className="block font-heading text-xl font-semibold tracking-tight text-[var(--color-text,#0f172a)] transition-colors group-hover:text-[var(--color-teal-600)] md:text-2xl">
                          {area.title}
                        </span>

                        <span className="mt-2 block text-sm leading-relaxed text-[var(--color-slate,#475569)] md:text-base">
                          {area.summary}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center text-2xl font-light text-[var(--color-text,#0f172a)] md:h-10 md:w-10"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      className="grid grid-cols-1 gap-8 pb-8 pl-0 md:pb-10 md:pl-12"
                    >
                      <div>
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate,#64748b)]">
                          Research focus
                        </h4>

                        <p className="text-base leading-relaxed text-[var(--color-slate,#475569)]">
                          {area.focus}
                        </p>

                        <h4 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate,#64748b)]">
                          Areas of investigation
                        </h4>

                        <ul className="divide-y divide-[var(--color-border,#dbe2e8)] border-t border-[var(--color-border,#dbe2e8)]">
                          {area.directions.map((direction) => (
                            <li
                              key={direction}
                              className="py-3 text-sm leading-relaxed text-[var(--color-slate,#475569)] md:text-base"
                            >
                              {direction}
                            </li>
                          ))}
                        </ul>

                        <h4 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate,#64748b)]">
                          Research questions
                        </h4>

                        <ul className="space-y-3">
                          {area.questions.map((question) => (
                            <li
                              key={question}
                              className="border-l-2 border-[var(--color-teal-600)] pl-4 text-sm leading-relaxed text-[var(--color-slate,#475569)] md:text-base"
                            >
                              {question}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

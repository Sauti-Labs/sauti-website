"use client";

import React from "react";

export function AboutContent() {
  return (
    <div className="bg-ivory min-h-screen text-ink selection:bg-clay/20 selection:text-ink">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 border-b border-stone/30">
        <span className="text-xs uppercase tracking-widest font-mono text-clay font-semibold">
          About Sauti Labs
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-heading font-normal tracking-tight leading-[1.15] text-ink">
          Building speech & language intelligence for Africa.
        </h1>
        <p className="mt-6 text-xl font-serif text-slate leading-relaxed max-w-2xl">
          We are an African AI research and technology organization building the foundational systems that enable machines to understand, generate, and interact through African languages and voices.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Section 1: Our Story */}
        <section id="story" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-heading font-medium tracking-tight text-ink sticky top-8">
              Our Story
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 font-serif text-lg leading-relaxed text-slate">
            <p>
              Sauti Labs works across the full technology stack — from language data and scientific research to models, evaluation, infrastructure, developer technologies, and AI products.
            </p>
            <p>
              Our initial focus is speech and language intelligence, with African languages placed at the center of algorithmic development rather than as an afterthought.
            </p>

            {/* Anthropic Callout Box */}
            <div className="mt-8 p-8 bg-oat/60 border border-stone/40 rounded-2xl space-y-4">
              <h3 className="font-heading font-semibold text-ink text-xl">
                Why Sauti Labs Exists
              </h3>
              <p className="text-base text-slate/90">
                African languages remain significantly underrepresented across modern AI systems. The challenge is not simply the absence of individual models — it is the absence of the broader technological ecosystem required to develop them well.
              </p>
              <p className="text-base text-slate/90">
                Building this ecosystem requires better data, deeper linguistic resources, rigorous research, appropriate evaluation, reliable infrastructure, and technologies designed around the realities of African speech.
              </p>
              <p className="text-base text-slate/90 font-medium text-ink pt-2">
                Sauti Labs exists to build those capabilities and make them reusable for developers across the continent.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-stone/20" />

        {/* Section 2: Mission & What We Build */}
        <section id="mission" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-heading font-medium tracking-tight text-ink sticky top-8">
              Mission & Core Pillars
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="font-serif text-xl leading-relaxed text-ink font-normal border-l-2 border-clay pl-6 py-1">
              &ldquo;To build the research, technology, infrastructure, and products that can support intelligent systems across African languages at increasing depth and scale.&rdquo;
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="font-heading font-semibold text-lg text-ink">
                What We Build
              </h3>
              
              {/* Minimalist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-stone/30 rounded-xl space-y-2 hover:border-stone/60 transition-colors">
                  <span className="font-mono text-xs uppercase tracking-wider text-clay">01. Research</span>
                  <h4 className="font-heading font-medium text-ink text-base">Scientific & Technical</h4>
                  <p className="font-serif text-sm text-slate leading-normal">
                    Research into African speech, language, data pipelines, model optimization, and evaluation benchmarks.
                  </p>
                </div>

                <div className="p-6 bg-white border border-stone/30 rounded-xl space-y-2 hover:border-stone/60 transition-colors">
                  <span className="font-mono text-xs uppercase tracking-wider text-clay">02. Technology</span>
                  <h4 className="font-heading font-medium text-ink text-base">Generative Systems</h4>
                  <p className="font-serif text-sm text-slate leading-normal">
                    AI capabilities for understanding and generating African voices, including multilingual speech and conversational AI.
                  </p>
                </div>

                <div className="p-6 bg-white border border-stone/30 rounded-xl space-y-2 hover:border-stone/60 transition-colors">
                  <span className="font-mono text-xs uppercase tracking-wider text-clay">03. Infrastructure</span>
                  <h4 className="font-heading font-medium text-ink text-base">Developer Tools</h4>
                  <p className="font-serif text-sm text-slate leading-normal">
                    Reusable data, inference engines, API endpoints, platform tooling, and developer infrastructure.
                  </p>
                </div>

                <div className="p-6 bg-white border border-stone/30 rounded-xl space-y-2 hover:border-stone/60 transition-colors">
                  <span className="font-mono text-xs uppercase tracking-wider text-clay">04. Products</span>
                  <h4 className="font-heading font-medium text-ink text-base">Practical AI</h4>
                  <p className="font-serif text-sm text-slate leading-normal">
                    Consumer and enterprise applications built on top of our technology stack to enable voice experiences.
                  </p>
                </div>
              </div>
            </div>

            <p className="font-serif text-base text-slate leading-relaxed pt-2">
              These areas are deliberately connected. Research informs technology. Technology becomes infrastructure. Infrastructure makes products possible. Products create new requirements, data, and research questions.
            </p>
          </div>
        </section>

        <hr className="border-stone/20" />

        {/* Section 3: Vision */}
        <section id="vision" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-heading font-medium tracking-tight text-ink sticky top-8">
              Long-Term Vision
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 font-serif text-lg text-slate leading-relaxed">
            <p className="text-ink font-medium">
              We are building toward an ecosystem where African languages are fully represented in the technologies that define modern AI:
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "Where researchers have direct access to better language resources and standardized evaluation systems.",
                "Where developers can rely on robust, low-latency African-language AI infrastructure.",
                "Where voice and language technologies serve African users seamlessly in their native dialects.",
                "Where onboarding a new language model does not require starting from zero.",
                "Where African speech technology forms the foundation for entirely new categories of products."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-base">
                  <span className="font-mono text-xs text-clay mt-1.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-8 bg-ink text-ivory rounded-2xl space-y-3">
              <p className="font-serif text-base italic text-ivory/80">
                Research creates knowledge. Technology turns knowledge into capability. Infrastructure makes capability reusable. Products put capability into people&rsquo;s hands.
              </p>
              <p className="font-heading font-semibold text-lg pt-2 text-ivory">
                Research. Technology. Infrastructure. Products.
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-clay font-semibold">
                Building speech and language intelligence for Africa
              </p>
            </div>
          </div>
        </section>

        <hr className="border-stone/20" />

        {/* Section 4: Team & Contributions */}
        <section id="team" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-heading font-medium tracking-tight text-ink sticky top-8">
              Contributors & Team
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 font-serif text-lg leading-relaxed text-slate">
            <p>
              Sauti Labs welcomes thoughtful contributions from researchers, engineers, language technologists, and designers committed to advancing African AI capabilities.
            </p>
            <div className="p-6 bg-oat/40 border border-stone/30 rounded-xl space-y-3">
              <h3 className="font-heading font-semibold text-ink text-base">How We Build</h3>
              <p className="text-sm text-slate">
                Before contributing, we ask every contributor to evaluate work against a single benchmark: <em className="text-ink font-normal">Does this strengthen Sauti&rsquo;s ability to build better speech and language intelligence for Africa?</em>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
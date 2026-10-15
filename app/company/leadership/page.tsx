import type { Metadata } from "next";

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
  const executives = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        {/* Founder & CEO */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-semibold mb-8">Founder & CEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border p-8">
            <div className="aspect-[4/5] border flex items-center justify-center">
              <p className="text-[var(--color-slate)]">Portrait to be supplied</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-2">Bernard Abuto Otieno</h3>
              <p className="text-[var(--color-slate)] mb-4">Founder & CEO</p>
              <p className="text-[var(--color-slate)] leading-relaxed">
                Bio to be supplied
              </p>
            </div>
          </div>
        </section>

        {/* Executives */}
        <section>
          <h2 className="text-2xl font-heading font-semibold mb-8">Executives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((exec) => (
              <div key={exec.id} className="border p-6">
                <div className="aspect-[4/5] border mb-4 flex items-center justify-center">
                  <p className="text-sm text-[var(--color-slate)]">Portrait to be supplied</p>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-1">Name to be confirmed</h3>
                <p className="text-sm text-[var(--color-slate)] mb-3">Title to be confirmed</p>
                <p className="text-sm text-[var(--color-slate)] leading-relaxed">Bio to be supplied</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

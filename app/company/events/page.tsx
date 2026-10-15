import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past events from Sauti Labs.",
  openGraph: {
    title: "Events | Sauti Labs",
    description: "Upcoming and past events from Sauti Labs.",
    url: "https://sauti.ai/company/events",
  },
};

export default function Events() {
  const events: Array<{
    date: string;
    title: string;
    type: string;
    location: string;
  }> = [];
  const today = new Date().toISOString().slice(0, 10);
  const upcomingEvents = events
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const pastEvents = events
    .filter((event) => event.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Events
        </h1>
        <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12 max-w-3xl">
          Find Sauti Labs at upcoming events and explore highlights from past events.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-6">Upcoming Events</h2>
        {upcomingEvents.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event) => (
              <article key={`${event.date}-${event.title}`} className="border p-6">
                <p className="text-sm text-[var(--color-slate)] mb-2">{event.date}</p>
                <h3 className="text-xl font-heading font-semibold mb-2">{event.title}</h3>
                <p className="text-[var(--color-slate)]">{event.type} · {event.location}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="py-8 border px-6 text-[var(--color-slate)] mb-12">
            There are no upcoming events listed at the moment.
          </p>
        )}

        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl font-heading font-semibold mb-6">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <article key={`${event.date}-${event.title}`} className="border p-6">
                  <p className="text-sm text-[var(--color-slate)] mb-2">{event.date}</p>
                  <h3 className="text-xl font-heading font-semibold mb-2">{event.title}</h3>
                  <p className="text-[var(--color-slate)]">{event.type} · {event.location}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

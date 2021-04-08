export default function EventsPage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>All Events</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

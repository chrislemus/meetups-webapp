import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Index Events</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

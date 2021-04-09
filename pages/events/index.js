import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
import EventsSearch from '../../components/events/EventsSearch';
import EventList from '../../components/events/EventList';
export default function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </div>
  );
}

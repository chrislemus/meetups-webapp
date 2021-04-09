import { getFilteredEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
import ResultsTitle from '../../components/events/results-title';
import EventList from '../../components/events/EventList';
import ErrorAlert from '../../components/ui/ErrorAlert';
import Button from '../../components/ui/button';
export default function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading....</p>;
  }
  const [filteredYear, filteredMonth] = filteredData;
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });
  if (!events || events.length == 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date}>Filtered Results</ResultsTitle>
      <EventList events={events} />
    </div>
  );
}

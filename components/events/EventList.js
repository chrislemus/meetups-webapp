import EventItem from './EventItem';
import styles from './event-list.module.css';

export default function EventList(props) {
  const { events } = props;
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          id={event.id}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
}

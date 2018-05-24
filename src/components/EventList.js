import EventCard from 'components/EventCard'

const EventsList = ({ events, toggleFavorite }) => {
  const eventClass = ({ size }) => `events__item events__item--${size}`

  return (
    <div className="events">
      <ul className="events__list">
        {events.map(event => (
          <li className={eventClass(event)} key={event.id}>
            <EventCard event={event} toggleFavorite={toggleFavorite} />
          </li>
        ))}
      </ul>
    </div>
  )
}

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default EventsList

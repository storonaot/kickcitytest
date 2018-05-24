import classNames from 'classnames'

const EventCard = ({ event, toggleFavorite }) => {
  const bgClass = `event-card event-card--${event.id}`

  const heartClassList = classNames({
    'event-card__favorite': true,
    'event-card__favorite--selected': event.favorite
  })

  return (
    <div className={bgClass}>
      <div className="event-card__top">
        <div className="event-card__date">{event.date}</div>
        <div className="event-card__tags">
          {event.kcy && <div className="event-card__tag event-card__tag--token" />}
          {event.free && <div className="event-card__tag event-card__tag--free">free</div>}
        </div>
      </div>
      <div className="event-card__bottom">
        <div className="event-card__title-wrapper">
          <div className="event-card__title">{event.title}</div>
          <div
            className={heartClassList}
            onClick={() => toggleFavorite(event.id)}
            tabIndex={0}
            role="button"
            onKeyDown={() => {}}
          />
        </div>
        <div className="event-card__labels">
          {event.labels.map(label => (
            <span className="event-card__label" key={label}>
              {label}
            </span>
          ))}
          <div />
        </div>
      </div>
    </div>
  )
}

EventCard.propTypes = {
  event: PropTypes.shape({
    favorite: PropTypes.bool
  }).isRequired,
  toggleFavorite: PropTypes.func.isRequired
}

export default EventCard

import { Component } from 'react'

import EventList from 'components/EventList'

import events from 'data/events.json'

const eventsWithFavorite = events.map(event => ({ ...event, favorite: false }))

class TrendingEvents extends Component {
  state = {
    events: eventsWithFavorite
  }
  toggleFavorite = (id) => {
    const newEventsState = this.state.events.map(event => (event.id === id ? { ...event, favorite: !event.favorite } : event))

    this.setState({ events: newEventsState })
  }

  render() {
    return (
      <div className="content-container">
        <div className="content-block trending-events">
          <div className="trending-events__top">
            <h2 className="title">
              Trending events{' '}
              <span role="img" aria-label="fire">
                &#x1F525;
              </span>
            </h2>
            <a href="/" className="trending-events__more-link">
              More
              <div className="trending-events__arrow" />
            </a>
          </div>
          <EventList events={this.state.events} toggleFavorite={this.toggleFavorite} />
        </div>
      </div>
    )
  }
}

export default TrendingEvents

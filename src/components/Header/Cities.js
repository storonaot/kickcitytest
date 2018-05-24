import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import cities from 'data/cities.json'
import classNames from 'classnames'
import DropdownMenu from '../DropdownMenu'

class Cities extends Component {
  state = {
    currentCity: cities[0],
    dropdownMenuOpened: false
  }

  onCityCange = (cityId) => {
    const newCity = cities.find(city => city.id === cityId)
    this.setState({ currentCity: newCity, dropdownMenuOpened: false })
  }

  toggleMenu = () => {
    this.setState({ dropdownMenuOpened: !this.state.dropdownMenuOpened })
  }

  render() {
    const { dropdownMenuOpened, currentCity } = this.state
    const filteredCity = cities.filter(city => city.id !== currentCity.id)
    const classList = classNames({
      city__current: true,
      'city__current--active': dropdownMenuOpened
    })
    return (
      <div className="city">
        <div className={classList} onClick={this.toggleMenu} role="button" tabIndex={0}>
          {currentCity.name}
        </div>
        {dropdownMenuOpened && (
          <DropdownMenu list={filteredCity} position="left" onSelect={this.onCityCange} />
        )}
      </div>
    )
  }
}

export default Cities

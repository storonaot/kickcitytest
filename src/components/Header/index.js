import { Fragment, Component } from 'react'
import Logo from 'images/logo.svg'
import DropdownMenu from 'components/DropdownMenu'
import Divider from 'components/Divider'

import personalMenu from 'data/personal-menu.json'

import Cities from './Cities'


const LogOut = () => (
  <Fragment>
    <Divider horizontal />
    <div className="dropdown-menu__item">
      <a href="/" className="dropdown-menu__link">
        Log Out
      </a>
    </div>
  </Fragment>
)

class Header extends Component {
  state = {
    personalMenuShowed: false
  }

  togglePersonalMenu = () => {
    this.setState({ personalMenuShowed: !this.state.personalMenuShowed })
  }

  render() {
    const { personalMenuShowed } = this.state
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__wrapper">
            <div className="header__block header__block--logo">
              <a href="/" className="header__logo">
                <img src={Logo} alt="Logo" className="header__logo-img" />
              </a>
            </div>
            <div className="header__block header__block--nav">
              <Cities />
            </div>
            <div className="header__block header__block--event">
              <a href="/" className="create-event">
                Create Event
              </a>
            </div>
            <div className="header__block header__block--personal">
              <div className="tmpClass">
                <div
                  className="personal"
                  onClick={this.togglePersonalMenu}
                  role="button"
                  tabIndex={0}
                  onKeyUp={() => {}}
                >
                  <div className="personal__balance">
                    0.0027 <span className="personal__currency">kcy</span>{' '}
                  </div>
                  <div className="personal__avatar" />
                </div>
                {personalMenuShowed && <DropdownMenu list={personalMenu} append={LogOut} />}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

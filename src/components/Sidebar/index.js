import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu, GiGamepad} from 'react-icons/gi'
import {AiOutlineClose, AiFillHome, AiFillFire} from 'react-icons/ai'

import {RiPlayListAddFill} from 'react-icons/ri'

import {
  SidebarContainer,
  NavItem,
  NavItemLogo,
  NavItemName,
  Heading,
  ContactUsParagraph,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Sidebar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value

      const isLightThemeActive = activeTheme === 'LIGHT'

      const {match} = props
      const {path} = match

      return (
        <SidebarContainer isLightThemeActive={isLightThemeActive}>
          <ul className="side-bar-nav-items-container">
            <NavItem
              isActive={path === '/'}
              isLightThemeActive={isLightThemeActive}
            >
              <Link className="nav-link" to="/">
                <NavItemLogo
                  isActive={path === '/'}
                  isLightThemeActive={isLightThemeActive}
                >
                  <AiFillHome />
                </NavItemLogo>
                <NavItemName isLightThemeActive={isLightThemeActive}>
                  Home
                </NavItemName>
              </Link>
            </NavItem>

            <NavItem
              isActive={path === '/trending'}
              isLightThemeActive={isLightThemeActive}
            >
              <Link className="nav-link" to="/trending">
                <NavItemLogo
                  isActive={path === '/trending'}
                  isLightThemeActive={isLightThemeActive}
                >
                  <AiFillFire />
                </NavItemLogo>
                <NavItemName isLightThemeActive={isLightThemeActive}>
                  Trending
                </NavItemName>
              </Link>
            </NavItem>

            <NavItem
              isActive={path === '/gaming'}
              isLightThemeActive={isLightThemeActive}
            >
              <Link className="nav-link" to="/gaming">
                <NavItemLogo
                  isActive={path === '/gaming'}
                  isLightThemeActive={isLightThemeActive}
                >
                  <GiGamepad />
                </NavItemLogo>
                <NavItemName isLightThemeActive={isLightThemeActive}>
                  Gaming
                </NavItemName>
              </Link>
            </NavItem>

            <NavItem
              isActive={path === '/saved-videos'}
              isLightThemeActive={isLightThemeActive}
            >
              <Link className="nav-link" to="/saved-videos">
                <NavItemLogo
                  isActive={path === '/saved-videos'}
                  isLightThemeActive={isLightThemeActive}
                >
                  <RiPlayListAddFill />
                </NavItemLogo>
                <NavItemName isLightThemeActive={isLightThemeActive}>
                  Saved videos
                </NavItemName>
              </Link>
            </NavItem>
          </ul>
          <div className="contact-us-card">
            <Heading isLightThemeActive={isLightThemeActive}>
              CONTACT US
            </Heading>
            <div className="side-bar-social-media-icons-card">
              <img
                className="side-bar-social-media-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <img
                className="side-bar-social-media-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <img
                className="side-bar-social-media-icon"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <ContactUsParagraph isLightThemeActive={isLightThemeActive}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsParagraph>
          </div>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Sidebar)

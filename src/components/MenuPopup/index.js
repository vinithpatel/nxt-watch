import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu, GiGamepad} from 'react-icons/gi'
import {AiOutlineClose, AiFillHome, AiFillFire} from 'react-icons/ai'

import {RiPlayListAddFill} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'
import {
  NavButton,
  MenuPopupContainer,
  NavItem,
  NavItemLogo,
  NavItemName,
} from './styledComponents'

import './index.css'

const MenuPopup = props => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value

      const isLightThemeActive = activeTheme === 'LIGHT'

      const {match} = props

      const {path} = match

      return (
        <Popup
          modal
          trigger={
            <NavButton isLightThemeActive={isLightThemeActive}>
              <GiHamburgerMenu />
            </NavButton>
          }
          className="popup-content"
        >
          {close => (
            <MenuPopupContainer isLightThemeActive={isLightThemeActive}>
              <NavButton
                isLightThemeActive={isLightThemeActive}
                onClick={close}
              >
                <AiOutlineClose />
              </NavButton>
              <ul className="nav-items-container">
                <NavItem
                  isActive={path === '/'}
                  isLightThemeActive={isLightThemeActive}
                >
                  <Link className="nav-link" to="/">
                    <NavItemLogo
                      isActive={path === '/trending'}
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
                      isActive={path === '/trending'}
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
                      isActive={path === '/trending'}
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
            </MenuPopupContainer>
          )}
        </Popup>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(MenuPopup)

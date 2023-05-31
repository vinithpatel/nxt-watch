import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'

import {FiLogOut, FiSun} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'
import MenuPopup from '../MenuPopup'

import {
  NavBar,
  WebsiteLogo,
  MobileContainer,
  NavButton,
  MenuContainer,
  TabletContainer,
  ProfileImg,
  LogoutButton,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, updateToLightTheme, updateToDarkTheme} = value

      const onClickMoonButton = () => {
        updateToDarkTheme()
      }

      const onClickSunButton = () => {
        updateToLightTheme()
      }

      const isLightThemeActive = activeTheme === 'LIGHT'

      return (
        <NavBar isLightThemeActive={isLightThemeActive}>
          <Link to="/">
            {isLightThemeActive && (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            )}

            {!isLightThemeActive && (
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            )}
          </Link>

          <MenuContainer>
            {isLightThemeActive && (
              <NavButton
                isLightThemeActive={isLightThemeActive}
                onClick={onClickMoonButton}
                data-testid="theme"
              >
                <FaMoon />
              </NavButton>
            )}
            {!isLightThemeActive && (
              <NavButton
                isLightThemeActive={isLightThemeActive}
                onClick={onClickSunButton}
                data-testid="theme"
              >
                <FiSun />
              </NavButton>
            )}
            <MobileContainer>
              <MenuPopup />

              <NavButton isLightThemeActive={isLightThemeActive}>
                <FiLogOut />
              </NavButton>
            </MobileContainer>
            <TabletContainer>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <LogoutButton
                type="button"
                isLightThemeActive={isLightThemeActive}
              >
                Logout
              </LogoutButton>
            </TabletContainer>
          </MenuContainer>
        </NavBar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

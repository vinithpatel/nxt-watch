import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
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

          <MenuContainer>
            {isLightThemeActive && (
              <NavButton
                isLightThemeActive={isLightThemeActive}
                onClick={onClickMoonButton}
              >
                <FaMoon />
              </NavButton>
            )}
            {!isLightThemeActive && (
              <NavButton
                isLightThemeActive={isLightThemeActive}
                onClick={onClickSunButton}
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

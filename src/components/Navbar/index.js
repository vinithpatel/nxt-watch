import { BsMoonFill } from "react-icons/bs";
import {GiHamburgerMenu} from 'react-icons/g'
import {RxExit} from 'react-icons/r'

import ThemeContext from '../../context/ThemeContext'

import {
  NavBar,
  WebsiteLogo,
  MobileContainer,
  NavButton,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, updateToLightTheme, updateToDarkTheme} = value

      const isLightThemeActive = activeTheme === 'LIGHT'

      return (
        <NavBar isLightThemeActive={isLightThemeActive}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <MobileContainer>
            <NavButton>
              <BsMoonFill />
            </NavButton>
            <NavButton>
              <GiHamburgerMenu />
            </NavButton>
            <NavButton>
              <RxExit />
            </NavButton>
          </MobileContainer>
        </NavBar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

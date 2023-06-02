import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {
  NotFoundContainer,
  NoVideosHeading,
  NoVidesPara,
} from './styledComponents'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value
      const isLightThemeActive = activeTheme === 'LIGHT'

      return (
        <>
          <Navbar />
          <div className="trending-bg-container">
            <Sidebar />
            <NotFoundContainer
              isLightThemeActive={isLightThemeActive}
              data-testid="saved-videos"
            >
              {isLightThemeActive && (
                <img
                  className="no-videos-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="no saved videos"
                />
              )}
              {!isLightThemeActive && (
                <img
                  className="no-videos-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="no saved videos"
                />
              )}

              <NoVideosHeading isLightThemeActive={isLightThemeActive}>
                Page Not Found
              </NoVideosHeading>
              <NoVidesPara isLightThemeActive={isLightThemeActive}>
                We are sorry, the page you requested could not be found
              </NoVidesPara>
            </NotFoundContainer>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

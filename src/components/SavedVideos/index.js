import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingContainer,
  Banner,
  BannerLogo,
  BannerHeading,
  NoVideosHeading,
  NoVidesPara,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  empty: 'EMPTY',
}

class SavedVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    savedVideos: [],
  }

  componentDidMount() {
    this.getSavedVideos()
  }

  getLocalStorageData = () => {
    const savedVideos = localStorage.getItem('savedVideos')

    if (savedVideos === null) {
      return []
    }

    return JSON.parse(savedVideos)
  }

  getSavedVideos = () => {
    const savedVideos = this.getLocalStorageData()

    if (savedVideos.length === 0) {
      this.setState({apiStatus: apiStatusConstants.empty})
    } else {
      this.setState({apiStatus: apiStatusConstants.success, savedVideos})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderSavedVideos = () => {
    const {savedVideos} = this.state

    return (
      <ul className="list-of-trending-videos">
        {savedVideos.map(eachObj => (
          <TrendingVideoItem key={eachObj.id} videoItemDetails={eachObj} />
        ))}
      </ul>
    )
  }

  renderNoSavedVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value

        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <div className="no-videos-view">
            <img
              className="no-videos-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />

            <NoVideosHeading isLightThemeActive={isLightThemeActive}>
              No saved videos found
            </NoVideosHeading>
            <NoVidesPara isLightThemeActive={isLightThemeActive}>
              You can save your videos while watching them
            </NoVidesPara>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderResources = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSavedVideos()
      case apiStatusConstants.empty:
        return this.renderNoSavedVideosView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const isLightThemeActive = activeTheme === 'LIGHT'

          return (
            <>
              <Navbar />
              <div className="trending-bg-container">
                <Sidebar />
                <TrendingContainer
                  isLightThemeActive={isLightThemeActive}
                  data-testid="saved-videos"
                >
                  <Banner isLightThemeActive={isLightThemeActive}>
                    <BannerLogo isLightThemeActive={isLightThemeActive}>
                      <AiFillFire />
                    </BannerLogo>
                    <BannerHeading isLightThemeActive={isLightThemeActive}>
                      Saved Videos
                    </BannerHeading>
                  </Banner>
                  {this.renderResources()}
                </TrendingContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos

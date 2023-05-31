import {Component} from 'react'
import {GiGamepad} from 'react-icons/gi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamignContainer,
  Banner,
  BannerLogo,
  BannerHeading,
  FailureHeading,
  FailurePara,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAIL',
  progress: 'PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getCamelCaseData = videosArray =>
    videosArray.map(eachObj => ({
      id: eachObj.id,
      title: eachObj.title,
      thumbnailUrl: eachObj.thumbnail_url,
      viewCount: eachObj.view_count,
    }))

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const requestConfig = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, requestConfig)
    if (response.ok) {
      const data = await response.json()

      const formatedData = this.getCamelCaseData(data.videos)

      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideos: formatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderGamingVideosView = () => {
    const {gamingVideos} = this.state

    return (
      <ul className="list-of-gaming-videos">
        {gamingVideos.map(eachObj => (
          <GamingVideoItem id={eachObj.id} videoItemDetails={eachObj} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value

        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <div className="no-videos-view">
            {isLightThemeActive && (
              <img
                className="no-videos-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="faiure"
              />
            )}
            {!isLightThemeActive && (
              <img
                className="no-videos-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="faiure"
              />
            )}
            <FailureHeading isLightThemeActive={isLightThemeActive}>
              Opps! Something Went Wrong
            </FailureHeading>
            <FailurePara isLightThemeActive={isLightThemeActive}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <button
              type="button"
              className="retry-button"
              onClick={this.onClickRetry}
            >
              Retry
            </button>
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
        return this.renderGamingVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
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
              <div className="gaming-bg-container">
                <Sidebar />
                <GamignContainer isLightThemeActive={isLightThemeActive}>
                  <Banner isLightThemeActive={isLightThemeActive}>
                    <BannerLogo isLightThemeActive={isLightThemeActive}>
                      <GiGamepad />
                    </BannerLogo>
                    <BannerHeading isLightThemeActive={isLightThemeActive}>
                      Gaming
                    </BannerHeading>
                  </Banner>
                  {this.renderResources()}
                </GamignContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming

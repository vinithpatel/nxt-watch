import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
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
  failure: 'FAIL',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getCamelCaseData = videosArray =>
    videosArray.map(eachObj => ({
      id: eachObj.id,
      title: eachObj.title,
      thumbnailUrl: eachObj.thumbnail_url,
      channel: {
        name: eachObj.channel.name,
        profileImageUrl: eachObj.channel.profile_image_url,
      },
      viewCount: eachObj.view_count,
      publishedAt: eachObj.published_at,
    }))

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

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
        trendingVideos: formatedData,
      })
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <ul className="list-of-trending-videos">
        {trendingVideos.map(eachObj => (
          <TrendingVideoItem key={eachObj.id} videoItemDetails={eachObj} />
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
            <NoVideosHeading isLightThemeActive={isLightThemeActive}>
              Opps! Something Went Wrong
            </NoVideosHeading>
            <NoVidesPara isLightThemeActive={isLightThemeActive}>
              We are having some trouble to complete your request. Please try
              again.
            </NoVidesPara>
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
        return this.renderTrendingVideos()
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
              <div className="trending-bg-container">
                <Sidebar />
                <TrendingContainer
                  isLightThemeActive={isLightThemeActive}
                  data-testid="trending"
                >
                  <Banner isLightThemeActive={isLightThemeActive}>
                    <BannerLogo isLightThemeActive={isLightThemeActive}>
                      <AiFillFire />
                    </BannerLogo>
                    <BannerHeading isLightThemeActive={isLightThemeActive}>
                      Trending
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

export default Trending

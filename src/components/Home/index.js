import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  InputCard,
  SearchInput,
  SearchButton,
  NoVideosHeading,
  NoVidesPara,
  Banner,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAIL',
  progress: 'PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
    searchInput: '',
    isPremiumShow: true,
  }

  componentDidMount() {
    this.getVideos()
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

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const requestConfiguration = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const response = await fetch(apiUrl, requestConfiguration)

    if (response.ok) {
      const data = await response.json()
      const camelCaseData = this.getCamelCaseData(data.videos)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videos: camelCaseData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCancelPremiumButton = () => {
    this.setState({isPremiumShow: false})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderGetPremiumView = () => (
    <Banner data-testid="banner">
      <div className="premium-view-logo-card">
        <img
          className="premium-view-website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <button
          type="button"
          className="premium-view-cancel-button"
          onClick={this.onClickCancelPremiumButton}
          data-testid="close"
        >
          <AiOutlineClose />
        </button>
      </div>

      <p className="premium-view-para">
        Buy Nxt Watch Premium prepaid plans with UPI
      </p>
      <button type="button" className="get-it-button">
        GET IT NOW
      </button>
    </Banner>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderNovideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value

        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <div className="no-videos-view">
            <img
              className="no-videos-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading isLightThemeActive={isLightThemeActive}>
              No Search results found
            </NoVideosHeading>
            <NoVidesPara isLightThemeActive={isLightThemeActive}>
              Try different key words or remove search filter
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

  renderVideosView = () => {
    const {videos} = this.state

    if (videos.length === 0) {
      return this.renderNovideosView()
    }

    return (
      <ul className="list-videos">
        {videos.map(eachVideoObj => (
          <VideoItem key={eachVideoObj.id} videoItemDetails={eachVideoObj} />
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

  renderVideosResources = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isPremiumShow, searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const isLightThemeActive = activeTheme === 'LIGHT'
          return (
            <>
              <Navbar />
              <div className="home-bg-container">
                <Sidebar />
                <div className="home-container">
                  {isPremiumShow && this.renderGetPremiumView()}
                  <HomeContainer
                    isLightThemeActive={isLightThemeActive}
                    data-testid="home"
                  >
                    <InputCard isLightThemeActive={isLightThemeActive}>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        isLightThemeActive={isLightThemeActive}
                        value={searchInput}
                        onChange={this.onChangeInput}
                      />

                      <SearchButton
                        isLightThemeActive={isLightThemeActive}
                        onClick={this.onClickSearch}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </InputCard>
                    {this.renderVideosResources()}
                  </HomeContainer>
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home

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

  renderGetPremiumView = () => (
    <div className="premium-view-container">
      <div className="premium-view-logo-card">
        <img
          className="premium-view-website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <button
          className="premium-view-cancel-button"
          onClick={this.onClickCancelPremiumButton}
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
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderVideosView = () => {
    const {videos} = this.state

    return (
      <ul className="list-videos">
        {videos.map(eachVideoObj => (
          <VideoItem key={eachVideoObj.id} videoItemDetails={eachVideoObj} />
        ))}
      </ul>
    )
  }

  renderVideosResources = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideosView()
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
                  <HomeContainer isLightThemeActive={isLightThemeActive}>
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

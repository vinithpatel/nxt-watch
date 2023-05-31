import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  VideoDetailsContainer,
  VideoItemTitle,
  ViewCount,
  Dot,
  Published,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAIL',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsObj: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getCamelCaseData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    channel: {
      name: data.video_details.channel.name,
      profileImageUrl: data.video_details.channel.profile_image_url,
      subscriberCount: data.video_details.channel.subscriber_count,
    },
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})

    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const requestConfig = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, requestConfig)
    if (response.ok) {
      const data = await response.json()
      const formatedData = this.getCamelCaseData(data)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetailsObj: formatedData,
      })
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderVideoDetails = () => {
    const {videoDetailsObj} = this.state

    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetailsObj

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value

          const isLightThemeActive = activeTheme === 'LIGHT'

          return (
            <>
              <div className="video-player-container">
                <ReactPlayer
                  className="video-player"
                  url={videoUrl}
                  controls
                  volume
                />
              </div>
              <div className="video-details-bottom-card">
                <div className="video-title-card">
                  <VideoItemTitle isLightThemeActive={isLightThemeActive}>
                    {title}
                  </VideoItemTitle>
                  <div className="video-reviews-card">
                    <div className="video-reviews-left-card">
                      <ViewCount isLightThemeActive={isLightThemeActive}>
                        {viewCount}
                      </ViewCount>
                      <Dot isLightThemeActive={isLightThemeActive} />
                      <Published isLightThemeActive={isLightThemeActive}>
                        {publishedAt}
                      </Published>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  /*  renderFailureView = () => (
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
  )  */

  renderResources = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideoDetails()
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
              <div className="video-details-bg-container">
                <Sidebar />
                <VideoDetailsContainer
                  isLightThemeActive={isLightThemeActive}
                  data-testid="videoItemDetails"
                >
                  {this.renderResources()}
                </VideoDetailsContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails

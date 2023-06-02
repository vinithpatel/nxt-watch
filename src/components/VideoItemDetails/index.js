import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'

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
  Button,
  HarizentalRule,
  ChannelName,
  Description,
  FailureHeading,
  FailurePara,
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
    isLiked: false,
    isDisliked: false,
    isSaved: false,
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
      this.verifyVideoSaved()
    }
  }

  getSavedVideosFromLocalStorage = () => {
    const savedVideos = localStorage.getItem('savedVideos')
    if (savedVideos === null) {
      return []
    }

    return JSON.parse(savedVideos)
  }

  verifyVideoSaved = () => {
    const {videoDetailsObj} = this.state
    const {id} = videoDetailsObj

    const savedVideos = this.getSavedVideosFromLocalStorage()
    const videoObj = savedVideos.find(each => each.id === id)
    if (videoObj !== undefined) {
      this.setState({isSaved: true})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  onToggleSave = () => {
    const {videoDetailsObj} = this.state

    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetailsObj

    const savedVideos = this.getSavedVideosFromLocalStorage()

    this.setState(prevState => {
      const {isSaved} = prevState

      if (isSaved) {
        const filterSavedVideos = savedVideos.filter(each => each.id !== id)
        localStorage.setItem('savedVideos', JSON.stringify(filterSavedVideos))
        return {isSaved: false}
      }

      const updatedSavedVideos = [
        ...savedVideos,
        {id, title, thumbnailUrl, channel, viewCount, publishedAt},
      ]
      localStorage.setItem('savedVideos', JSON.stringify(updatedSavedVideos))

      return {isSaved: true}
    })
  }

  onTogglelike = () => {
    this.setState(prevState => {
      const {isLiked, isDisliked} = prevState

      if (isLiked) {
        return {isLiked: false}
      }

      if (!isLiked && isDisliked) {
        return {isLiked: true, isDisliked: false}
      }

      return {isLiked: true}
    })
  }

  onToggleDislike = () => {
    this.setState(prevState => {
      const {isLiked, isDisliked} = prevState

      if (isDisliked) {
        return {isDisliked: false}
      }

      if (isLiked && !isDisliked) {
        return {isLiked: false, isDisliked: true}
      }

      return {isDisliked: true}
    })
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderVideoDetails = () => {
    const {videoDetailsObj, isLiked, isDisliked, isSaved} = this.state

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
                <div className="video-title-card">
                  <VideoItemTitle isLightThemeActive={isLightThemeActive}>
                    {title}
                  </VideoItemTitle>
                  <div className="video-reviews-card">
                    <div className="video-reviews-left-card">
                      <ViewCount isLightThemeActive={isLightThemeActive}>
                        {viewCount} views
                      </ViewCount>
                      <Dot isLightThemeActive={isLightThemeActive} />
                      <Published isLightThemeActive={isLightThemeActive}>
                        {publishedAt}
                      </Published>
                    </div>
                    <div className="video-reviews-left-card">
                      <Button
                        type="button"
                        className="like-button"
                        isLightThemeActive={isLightThemeActive}
                        isActive={isLiked}
                        onClick={this.onTogglelike}
                      >
                        <BiLike className="like-icon" /> Like
                      </Button>
                      <Button
                        type="button"
                        className="like-button"
                        isLightThemeActive={isLightThemeActive}
                        isActive={isDisliked}
                        onClick={this.onToggleDislike}
                      >
                        <BiDislike className="like-icon" /> Dislike
                      </Button>
                      <Button
                        type="button"
                        isLightThemeActive={isLightThemeActive}
                        onClick={this.onToggleSave}
                        isActive={isSaved}
                      >
                        <RiPlayListAddFill className="like-icon" />
                        {isSaved && 'Saved'}
                        {!isSaved && 'Save'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-details-bottom-card">
                <HarizentalRule isLightThemeActive={isLightThemeActive} />
                <div className="channel-card">
                  <img
                    className="channel-img"
                    src={profileImageUrl}
                    alt={name}
                  />
                  <div className="channel-desc-card">
                    <ChannelName isLightThemeActive={isLightThemeActive}>
                      {name}
                    </ChannelName>
                    <ViewCount isLightThemeActive={isLightThemeActive}>
                      {subscriberCount} subscribers
                    </ViewCount>
                    <Description isLightThemeActive={isLightThemeActive}>
                      {description}
                    </Description>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
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

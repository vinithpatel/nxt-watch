import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemTitle,
  ChannelName,
  ViewCount,
  Published,
  Dot,
} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoItemDetails
  const {name, profileImageUrl} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value

        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <div className="video-item-container">
            <img className="video-item-img" src={thumbnailUrl} alt={title} />
            <div className="video-item-bottom-card">
              <div className="channel-log-card">
                <img
                  className="channel-logo"
                  src={profileImageUrl}
                  alt={name}
                />
              </div>
              <div className="video-item-desc-card">
                <VideoItemTitle isLightThemeActive={isLightThemeActive}>
                  {title}
                </VideoItemTitle>
                <ChannelName
                  className="mobile-channel-name"
                  isLightThemeActive={isLightThemeActive}
                >
                  {name}
                </ChannelName>
                <div className="video-item-views-card">
                  <div className="tablet-view-channel-name-card">
                    <ChannelName isLightThemeActive={isLightThemeActive}>
                      {name}
                    </ChannelName>
                    <Dot isLightThemeActive={isLightThemeActive}>.</Dot>
                  </div>
                  <ViewCount isLightThemeActive={isLightThemeActive}>
                    {viewCount}
                  </ViewCount>
                  <Dot isLightThemeActive={isLightThemeActive}>.</Dot>
                  <Published isLightThemeActive={isLightThemeActive}>
                    {publishedAt}
                  </Published>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem

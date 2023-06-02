import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import Published from '../Published'

import {VideoItemTitle, ChannelName, ViewCount, Dot} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {
    id,
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
          <li className="video-item-container">
            <Link to={`/videos/${id}`} className="video-link">
              <img
                className="video-item-img"
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div className="video-item-bottom-card">
                <div className="channel-log-card">
                  <img
                    className="channel-logo"
                    src={profileImageUrl}
                    alt="channel logo"
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
                      <Dot isLightThemeActive={isLightThemeActive} />
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
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem

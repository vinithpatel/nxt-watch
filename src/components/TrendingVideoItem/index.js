import {Link} from 'react-router-dom'
import Published from '../Published'

import {VideoItemTitle, ChannelName, Dot, ViewCount} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const TrendingVideoItem = props => {
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
        const {activeTheme, formatedPublishTime} = value

        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <Link className="video-link" to={`/videos/${id}`}>
            <li className="trending-video-item">
              <img
                className="trending-video-img"
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div className="video-item-bottom-card">
                <div className="trending-channel-log-card">
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
                      <Dot isLightThemeActive={isLightThemeActive}>.</Dot>
                    </div>
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
            </li>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoItem

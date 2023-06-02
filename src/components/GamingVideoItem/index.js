import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {VideoItemTitle, ChannelName} from './styledComponents'
import './index.css'

const GamingVideoItem = props => {
  const {videoItemDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoItemDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value

        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <li className="gaming-video-item-container">
            <Link to={`/videos/${id}`} className="video-link">
              <img
                className="gaming-video-item-img"
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <div className="gaming-video-item-bottom-card">
                <VideoItemTitle isLightThemeActive={isLightThemeActive}>
                  {title}
                </VideoItemTitle>

                <ChannelName isLightThemeActive={isLightThemeActive}>
                  {viewCount} Watching Worldwide
                </ChannelName>
              </div>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem

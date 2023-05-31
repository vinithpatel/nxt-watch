import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {TrendingContainer} from './styledComponents'
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
                <TrendingContainer isLightThemeActive={isLightThemeActive}>
                  Trending
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

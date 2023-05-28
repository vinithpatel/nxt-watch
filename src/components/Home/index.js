import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

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

  onClickCancelPremiumButton = () => {
    this.setState({isPremiumShow: false})
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

  renderVideosResources = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.progress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {isPremiumShow} = this.state

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
                      />
                      <SearchButton isLightThemeActive={isLightThemeActive}>
                        <AiOutlineSearch />
                      </SearchButton>
                    </InputCard>
                  </HomeContainer>
                  {this.renderVideosResources()}
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

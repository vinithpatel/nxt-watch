import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'
import {
  LogoutPopupContainer,
  LogoutHeading,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import './index.css'

const LogoutPopup = props => {
  const {history, triggerButton} = props

  const onClickConfirm = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <di>
            <Popup trigger={triggerButton} modal className="popup-content">
              {close => (
                <LogoutPopupContainer isLightThemeActive={isLightThemeActive}>
                  <LogoutHeading isLightThemeActive={isLightThemeActive}>
                    Are you sure you want to logout?
                  </LogoutHeading>
                  <div className="cancel-confirm-button-card">
                    <CancelButton
                      type="button"
                      isLightThemeActive={isLightThemeActive}
                      onClick={close}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton
                      type="button"
                      isLightThemeActive={isLightThemeActive}
                      onClick={onClickConfirm}
                    >
                      Confirm
                    </ConfirmButton>
                  </div>
                </LogoutPopupContainer>
              )}
            </Popup>
          </di>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(LogoutPopup)

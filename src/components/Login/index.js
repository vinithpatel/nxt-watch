import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import {
  BgContainer,
  FormContainer,
  WebsiteLogo,
  InputCard,
  Label,
  Input,
  CheckBox,
  CheckBoxLabel,
  CheckBoxCard,
  LoginButton,
  ErrorMsg,
  LoaderContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    isShowPassword: false,
    isError: false,
    errorMsg: '',
    isLoading: false,
  }

  onSuccessfullLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({isError: true, errorMsg, isLoading: false})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    this.setState({isLoading: true})

    const {usernameInput, passwordInput} = this.state

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const loginCredentials = {
      username: usernameInput,
      password: passwordInput,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessfullLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      isShowPassword,
      isError,
      errorMsg,
      isLoading,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const isLightActive = activeTheme === 'LIGHT'

          return (
            <BgContainer isLightActive={isLightActive}>
              <FormContainer
                isLightActive={isLightActive}
                onSubmit={this.onSubmitForm}
              >
                {isLightActive && (
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                {!isLightActive && (
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}
                <InputCard>
                  <Label htmlFor="username" isLightActive={isLightActive}>
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    isLightActive={isLightActive}
                    value={usernameInput}
                    onChange={this.onChangeUsername}
                  />
                </InputCard>
                <InputCard>
                  <Label htmlFor="password" isLightActive={isLightActive}>
                    PASSWORD
                  </Label>
                  {!isShowPassword && (
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      isLightActive={isLightActive}
                      value={passwordInput}
                      onChange={this.onChangePassword}
                    />
                  )}
                  {isShowPassword && (
                    <Input
                      id="password"
                      type="text"
                      placeholder="Password"
                      isLightActive={isLightActive}
                      value={passwordInput}
                      onChange={this.onChangePassword}
                    />
                  )}
                </InputCard>
                <CheckBoxCard>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    checked={isShowPassword}
                    onChange={this.onToggleShowPassword}
                  />
                  <CheckBoxLabel
                    htmlFor="checkbox"
                    isLightActive={isLightActive}
                  >
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxCard>
                {isLoading && (
                  <LoaderContainer>
                    <Loader
                      type="ThreeDots"
                      color="#ffffff"
                      width={30}
                      height={20}
                    />
                  </LoaderContainer>
                )}
                {!isLoading && <LoginButton type="submit">Login</LoginButton>}
                {isError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'

import './App.css'

class App extends Component {
  state = {
    activeTheme: 'LIGHT',
  }

  updateToLightTheme = () => {
    this.setState({activeTheme: 'LIGHT'})
  }

  updateToDarkTheme = () => {
    this.setState({activeTheme: 'DARK'})
  }

  render() {
    const {activeTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          updateToLightTheme: this.updateToLightTheme,
          updateToDarkTheme: this.updateToDarkTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

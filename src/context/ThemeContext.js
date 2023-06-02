import React from 'react'
import {formatDistanceToNow} from 'date-fns'

const ThemeContext = React.createContext({
  activeTheme: 'LIGHT',
  updateToLightTheme: () => {},
  updateToDarkTheme: () => {},
})

export default ThemeContext

import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: 'LIGHT',
  updateToLightTheme: () => {},
  updateToDarkTheme: () => {},
})

export default ThemeContext

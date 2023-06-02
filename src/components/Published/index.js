import {formatDistanceToNow} from 'date-fns'

import {PubishedTime} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Published = props => {
  const {children} = props

  const formatedPublishTime = published => {
    let [month, day, year] = published.split(' ')

    const updatedDay = day.replace(',', '')

    day = parseInt(updatedDay)
    year = parseInt(year)

    if (month === 'Jan') {
      month = 1
    } else if (month === 'Feb') {
      month = 2
    } else if (month === 'Mar') {
      month = 3
    } else if (month === 'Apr') {
      month = 4
    } else if (month === 'May') {
      month = 5
    } else if (month === 'Jun') {
      month = 6
    } else if (month === 'Jul') {
      month = 7
    } else if (month === 'Aug') {
      month = 8
    } else if (month === 'Sep') {
      month = 9
    } else if (month === 'Oct') {
      month = 10
    } else if (month === 'Nov') {
      month = 11
    } else {
      month = 12
    }

    const dateString = formatDistanceToNow(new Date(year, month, updatedDay))
    const updatedDateStringList = dateString.split(' ')
    return `${updatedDateStringList[1]} ${updatedDateStringList[2]} ago `
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const isLightThemeActive = activeTheme === 'LIGHT'

        return (
          <PubishedTime isLightThemeActive={isLightThemeActive}>
            {formatedPublishTime(children)}
          </PubishedTime>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Published

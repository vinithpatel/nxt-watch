import {Component} from 'react'
import Navbar from '../Navbar'

class Home extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    console.log(params)
    console.log(match)
    return (
      <>
        <Navbar />
      </>
    )
  }
}

export default Home

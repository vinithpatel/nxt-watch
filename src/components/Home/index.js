import {Component} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import './index.css'

class Home extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    console.log(params)
    console.log(match)
    return (
      <>
        <Navbar />
        <div className="home-bg-container">
          <Sidebar />
        </div>
      </>
    )
  }
}

export default Home

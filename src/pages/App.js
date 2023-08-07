import HomePage from './HomePage.js'
import Forum from './Forum.js'
import Navbar from '../components/Navbar'
import Plants from './Plants.js'
import Footer from '../components/Footer.js'
import './App.css'

export default function App(props) {

    // routing
    let page
    switch (window.location.pathname) {
      case ("/"):
          page = <HomePage />
          break
      case ("/home"):
          page = <HomePage />
          break
      case "/forum":
        page = <Forum />
          break
      case "/plant":
        page = <Plants plants={props.plants}/>
        break
    }
    return (
      <div className="App">
        <Navbar />
        <div className="wrapper">
          {page}  
        </div>
        <Footer />
      </div>
    )
  }
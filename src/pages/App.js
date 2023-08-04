import HomePage from './HomePage.js'
import Forum from './Forum.js'
import Navbar from '../components/Navbar'

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
    }
    return (
      <div>
        <Navbar />
        {page}
      </div>
    )
  }
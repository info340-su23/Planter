import HomePage from './HomePage.js'
import Forum from './Forum.js'
import Navbar from '../components/Navbar'
import Plants from './Plants.js'
import Footer from '../components/Footer.js'
import './App.css'
import { Routes, Route } from 'react-router-dom';

export default function App(props) {

    // routing
    return (
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="forum" element={<Forum />} />
            <Route path="plant" element={<Plants />} />
          </Routes>
        </div>
        <Footer />
      </div>
    )
  }
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app as firebaseApp } from './firebaseConfig';
import React, { useState, useEffect } from 'react';

import HomePage from './HomePage.js'
import Forum from './Forum.js'
import Navigation from './Navbar'
import Plants from './Plants.js'
import Footer from './Footer.js'
import '../index.css'

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth(firebaseApp);

  // Listen for authentication user changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  // routing
  return (
    <div className="App">
      <Navigation />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="forum" element={<Forum currentUser={currentUser} auth={auth} />} />
          <Route path="plant" element={<Plants currentUser={currentUser} auth={auth} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
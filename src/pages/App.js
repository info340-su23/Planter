import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app as firebaseApp } from './firebaseConfig';
import React, { useState, useEffect } from 'react';

import HomePage from './HomePage.js'
import Forum from './Forum.js'
import Navbar from '../components/Navbar'
import Plants from './Plants.js'
import Footer from '../components/Footer.js'
import './App.css'

export default function App(props) {

  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth(firebaseApp);

  // Listen for authentication user changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User has been logged out");
      })
      .catch(error => {
        console.error("Error logging out:", error);
      });
  };

    // routing
    return (
      <div className="App">
        <Navbar currentUser={currentUser} onLogOut={handleLogOut} />
        <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="forum" element={<Forum currentUser={currentUser} auth={auth} />} />
          <Route path="plant" element={<Plants currentUser={currentUser} auth={auth} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
      </div>
    )
  }

  function NotFound() {
    return (
      <div className="not-found-page">
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  }
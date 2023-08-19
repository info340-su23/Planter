import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvz-SFFkQfRlK2WfdaVmcLgZnAa42z0LY",
    authDomain: "a7-info340.firebaseapp.com",
    projectId: "a7-info340",
    storageBucket: "a7-info340.appspot.com",
    messagingSenderId: "500430684599",
    appId: "1:500430684599:web:61baa1ff5440200196a832",
    measurementId: "G-K9KFV4EG30"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const firebaseUIConfig = {
    signInOptions: [
      { provider: GoogleAuthProvider.PROVIDER_ID },
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true, // Require users to provide their display name
      },
    ],
    signInFlow: 'popup', // Display the sign-in page as a popup
    callbacks: {
      signInSuccessWithAuthResult: () => false, // Prevent automatic redirection
    },
  };

export { app, db, auth, firebaseUIConfig };
import React, { useState, useEffect } from 'react';
import WateringSchedule from '../components/WateringSchedule'
import './Plants.css'
import { MyList, EasyToCare, GreatForIndoors } from '../components/PlantLists';
import { PlantCardDetails } from '../components/PlantCardDetails.js';
// import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider and EmailAuthProvider
import { firebaseUIConfig } from '../config/firebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1

export default function Plants({currentUser, auth}) {
  const [myList, setMyList] = useState([]);
  const [indoorsArray, setIndoorsArray] = useState([]);
  const [easyCareArray, setEasyCareArray] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  // const firebaseUIConfig = {
  //   signInOptions: [
  //     { provider: GoogleAuthProvider.PROVIDER_ID },
  //     {
  //       provider: EmailAuthProvider.PROVIDER_ID,
  //       requireDisplayName: true, // Require users to provide their display name
  //     },
  //   ],
  //   signInFlow: 'popup', // Display the sign-in page as a popup
  //   callbacks: {
  //     signInSuccessWithAuthResult: () => false, // Prevent automatic redirection
  //   },
  // };


  // Set a default for the filtered data
  useEffect(() => {
    // Fetching data from the public folder
    fetch("/seattleplants.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setIndoorsArray(data.filter(plant => plant.sun === 'Indirect'));
        setEasyCareArray(data.filter(plant => plant.difficulty === '3/10'));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // add to My List if there there's less than seven spots
  // checks to make sure there's no repetition
  const addToMyList = (plant) => {
    if (myList.length < 7) {
      setMyList([...myList, plant]);
      setIndoorsArray(indoorsArray.filter(item => item.name !== plant.name));
      setEasyCareArray(easyCareArray.filter(item => item.name !== plant.name));
    } else {
      alert('You have reached the maximum number of plants (7)');
    }
  };

  // removes from My List
  // checks to make sure there's no repetition
  const removeFromMyList = (plant) => {
    setMyList(myList.filter(item => item.name !== plant.name));
    if (plant.sun === 'Indirect') {
      setIndoorsArray([...indoorsArray, plant]);
    } else if (plant.difficulty === '3/10') {
      setEasyCareArray([...easyCareArray, plant]);
    }
  };

  // switches between letting more information on the cards show or not
  const handleCardInfo = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="plantsPage">
      <header>
        <div className="plantHeader">
          <h1>Plant Manager</h1>
        </div>
      </header>
      <div className="innerContent">
        {currentUser ? (
          <>
            <WateringSchedule myList={myList} />
            <MyList
              myList={myList}
              handleClick={addToMyList}
              handleRemoveFromList={removeFromMyList}
              handleCardInfo={handleCardInfo}
              isPopupOpen={isPopupOpen} 
            />
            <GreatForIndoors
              indoorsArray={indoorsArray}
              handleClick={addToMyList}
              setIndoorsArray={setIndoorsArray}
              handleCardInfo={handleCardInfo}
              isPopupOpen={isPopupOpen} 
            />
            <EasyToCare
              easyCareArray={easyCareArray}
              handleClick={addToMyList}
              setEasyCareArray={setEasyCareArray}
              handleCardInfo={handleCardInfo}
              isPopupOpen={isPopupOpen} 
            />
          </>
        ) : (
          <div>
            <p>Please sign in to access plant manager features:</p>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
          </div>
        )}
      </div>
      {isPopupOpen && <PlantCardDetails />}
    </div>
  );
}
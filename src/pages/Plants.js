import React, { useState } from 'react';
import WateringSchedule from '../components/WateringSchedule'
import './Plants.css'
import { MyList, EasyToCare, GreatForIndoors } from '../components/PlantLists';
import { PlantCardDetails } from '../components/PlantCardDetails.js';

export default function Plants(props) {
  const [myList, setMyList] = useState([]);
  const [indoorsArray, setIndoorsArray] = useState(props.plants.filter(plant => plant.sun === 'Indirect'));
  const [easyCareArray, setEasyCareArray] = useState(props.plants.filter(plant => plant.difficulty === '3/10'));
  const [isPopupOpen, setPopupOpen] = useState(false);

  const addToMyList = (plant) => {
    if (myList.length < 7) {
      setMyList(prevList => [...prevList, plant]);
      setIndoorsArray(prevArray => prevArray.filter(item => item.name !== plant.name));
      setEasyCareArray(prevArray => prevArray.filter(item => item.name !== plant.name));
    } else {
      alert('You have reached the maximum number of plants (7)');
    }
  };

  const removeFromMyList = (plant) => {
    setMyList(prevList => prevList.filter(item => item.name !== plant.name));
    if (plant.sun === 'Indirect') {
      setIndoorsArray(prevArray => [...prevArray, plant]);
    } else if (plant.difficulty === '3/10') {
      setEasyCareArray(prevArray => [...prevArray, plant]);
    }
  };

  const handleCardClick = (plant) => {
    setPopupOpen(prevPopupOpen => !prevPopupOpen);
  };

  return (
    <div className="plantsPage">
      <header>
        <div className="plantHeader">
          <h1>Plant Manager</h1>
        </div>
      </header>
      <div className="innerContent">
        <WateringSchedule myList={myList} />
        <MyList
          myList={myList}
          handleClick={addToMyList}
          handleRemoveFromList={removeFromMyList}
          handleCardClick={handleCardClick}
          isPopupOpen={isPopupOpen} 
        />
        <GreatForIndoors
          indoorsArray={indoorsArray}
          handleClick={addToMyList}
          setIndoorsArray={setIndoorsArray}
          handleCardClick={handleCardClick}
          isPopupOpen={isPopupOpen} 
        />
        <EasyToCare
          easyCareArray={easyCareArray}
          handleClick={addToMyList}
          setEasyCareArray={setEasyCareArray}
          handleCardClick={handleCardClick}
          isPopupOpen={isPopupOpen} 
        />
      </div>
      {isPopupOpen && <PlantCardDetails />}
    </div>
  );
}
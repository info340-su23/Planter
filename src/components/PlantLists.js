import React from 'react'
import './PlantLists.css';
import { PlantCard } from './SinglePlantCard.js';

export function MyList(props) {
  const { myList, handleClick, handleRemoveFromList, handleCardClick, isPopupOpen } = props;

  const myListCard = myList.map((plant, index) => (
    <PlantCard
      key={index}
      plant={plant}
      inMyList={true}
      handleClick={handleClick}
      handleRemoveFromList={handleRemoveFromList}
      handleCardClick={handleCardClick}
      isPopupOpen={isPopupOpen}
    />
  ))

  return (
    <div>
      <h2>My List</h2>
      <div className="card-container">
        {myListCard}
      </div>
    </div>
  );
}

export function GreatForIndoors(props) {
    const { indoorsArray, handleClick, setIndoorsArray, handleCardClick, isPopupOpen } = props;

    const handleRemoveFromIndoors = (plant) => {
        setIndoorsArray(indoorsArray.filter((item) => item.name !== plant.name));
    };

      const indoorCard = indoorsArray.map((plant, index) => (
        <PlantCard
            key={index}
            plant={plant}
            inMyList={false}
            handleClick={handleClick}
            handleRemoveFromList={handleRemoveFromIndoors}
            handleCardClick={handleCardClick}
            isPopupOpen={isPopupOpen}
        />
    ))

    return (
        <div>
            <h2>Great for Indoors</h2>
            <div className="card-container">
                {indoorCard}
            </div>
        </div>
    );
}

export function EasyToCare(props) {
    const { easyCareArray, handleClick, setEasyCareArray, handleCardClick, isPopupOpen } = props;

    const handleRemoveFromEasyCare = (plant) => {
        setEasyCareArray(easyCareArray.filter((item) => item.name !== plant.name));
    };

    const easyCareCard = easyCareArray.map((plant, index) => (
      <PlantCard
          key={index}
          plant={plant}
          inMyList={false}
          handleClick={handleClick}
          handleRemoveFromList={handleRemoveFromEasyCare}
          handleCardClick={handleCardClick}
          isPopupOpen={isPopupOpen}
      />
  ))

    return (
        <div>
            <h2>Easy to Care</h2>
            <div className="card-container">
                {easyCareCard}
            </div>
        </div>
    );
}

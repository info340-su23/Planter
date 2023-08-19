import React from 'react'
import './PlantLists.css';
import { PlantCard } from './SinglePlantCard.js';

export function MyList(props) {
  const { myList, handleClick, handleRemoveFromList, handleCardInfo, isPopupOpen } = props;

  const myListCard = myList.map((plant, index) => (
    <PlantCard
      key={index}
      plant={plant}
      inMyList={true}
      handleClick={handleClick}
      handleRemoveFromList={handleRemoveFromList}
      handleCardInfo={handleCardInfo}
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
    const { indoorsArray, handleClick, setIndoorsArray, handleCardInfo, isPopupOpen } = props;

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
            handleCardInfo={handleCardInfo}
            isPopupOpen={isPopupOpen}
        />
    ))

    return (
        <div className="plant-sections">
            <h2>Great for Indoors</h2>
            <p>These plants only require indirect sunlight, meaning you can have these plants in your lovely home</p>
            <div className="card-container">
                {indoorCard}
            </div>
        </div>
    );
}

export function EasyToCare(props) {
    const { easyCareArray, handleClick, setEasyCareArray, handleCardInfo, isPopupOpen } = props;

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
          handleCardInfo={handleCardInfo}
          isPopupOpen={isPopupOpen}
      />
  ))

    return (
        <div className="plant-sections">
            <h2>Easy to Care</h2>
            <p>With a low difficulty score, these plants are great for beginners or those who want to have as much leisure as their plants.</p>
            <div className="card-container">
                {easyCareCard}
            </div>
        </div>
    );
}
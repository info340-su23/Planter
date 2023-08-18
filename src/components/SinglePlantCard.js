import React from 'react'
import './PlantLists.css';
import { PlantCardDetails } from './PlantCardDetails';

export function PlantCard(props) {
  const { plant, inMyList, handleRemoveFromList, handleClick, handleCardInfo, isPopupOpen } = props;

  const handleIconClick = event => {
    event.preventDefault();
    if (inMyList) {
      handleRemoveFromList(plant);
    } else {
      handleClick(plant);
    }
  };

  return (
    <div className="outter-card">
      <div className="inner-card">
        <div className="playlist-add">
          <a className="interact" onClick={handleIconClick}>
            <span className="material-icons" aria-label={inMyList ? "playlist_remove" : "playlist_add"}>
              {inMyList ? "playlist_remove" : "playlist_add"}
            </span>
          </a>
        </div>
        <img className="plantcard-img" src={plant.image} alt="a plant" />
        <div className="plant-type">
          <div className="name">{plant.name}</div>
          <div className="desc">{plant.scientific}</div>
        </div>
      </div>
      <div className="bottom-icons-container">
        <div className="sunlight">
          <div className="sun-icon">
            <span className="material-icons">sunny</span>
          </div>
          <div className="type">{plant.sun}</div>
        </div>
        <div className="water">
          <div className="water-icon">
            <span className="material-icons">water_drop</span>
          </div>
          <div className="type">{plant.water}</div>
        </div>
        <div className="difficulty">
          <div className="value">{plant.difficulty}</div>
          <div className="type">difficulty</div>
        </div>
      </div>
      <button className="view-button" onClick={handleCardInfo}>
        {isPopupOpen ? "View Less" : "View More"}
      </button>
      {isPopupOpen && (
        <div>
          <PlantCardDetails
            height={plant.height}
            avail={plant.avail}
            type={plant.type}
          />
        </div>
      )}
    </div>
  );
}
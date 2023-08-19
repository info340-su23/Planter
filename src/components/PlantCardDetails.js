import React from 'react';
import '../index.css'

export function PlantCardDetails(props) {
  const { height, avail, type } = props;

  return (
    <div className="card-details">
      <h3>More Information</h3>
      <p>Type: {type}</p>
      <p>Height: {height} ft</p>
      <p>Availability: {avail}</p>
    </div>
  );
}
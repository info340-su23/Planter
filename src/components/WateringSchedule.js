import React from 'react'
import '../index.css'

export default function WateringSchedule(props) {
  const { myList } = props;

  // modifies the calendar to show the appropriate plant input
  const imageInWeek = myList.map((plant, index) => (
    <div key={index} className="grid-item">
      <div className="plant-card">
        <div className="name">{plant.name}</div>
        <img className="schedule-img" src={plant.image} alt="a plant" />
      </div>
    </div>
  ))

  // create array to loop through days of week
  const daysOfWeek = ['S', 'M', 'T', 'W', 'Th', 'F', 'S'];
  const weekArray = daysOfWeek.map((day, index) => (
    <div className="weekday-name" key={index}>
      <p>{day}</p>
    </div>
  ));

  return (
    <section className="WateringSchedule">
      <h2> My Watering Schedule</h2>
      <div className="calendar">
        <div className="grid">
          <div className="weekday-name">
            <p> </p>
          </div>
          {weekArray}

          <div className="weekday-num">
            <p>Week 1</p>
          </div>
          {imageInWeek}
        </div>

        <div className="grid">
          <div className="weekday-num">
            <p>Week 2</p>
          </div>
          {imageInWeek}
        </div>
      </div>
    </section>
  );
}

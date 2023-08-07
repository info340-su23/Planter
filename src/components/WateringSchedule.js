import React from 'react'
import './WateringSchedule.css';

export default function WateringSchedule(props){
    const { myList } = props;

    return (
        <section className="WateringSchedule">
          <h2> My Watering Schedule</h2>
          <div className="calendar">
            <div className="grid">
                <div className="weekday-name">
                    <p> </p>
                </div>
                <div className="weekday-name">
                    <p>S</p>
                </div>
                <div className="weekday-name">
                    <p>M</p>
                </div>
                <div className="weekday-name">
                    <p>T</p>
                </div>
                <div className="weekday-name">
                    <p>W</p>
                </div>
                <div className="weekday-name">
                    <p>Th</p>
                </div>
                <div className="weekday-name">
                    <p>F</p>
                </div>
                <div className="weekday-name">
                    <p>S</p>
                </div>
    
              <div className="weekday-num">
                <p>Week 1</p>
              </div>
              {myList.map((plant, index) => (
                <div key={index} className="grid-item">
                  <div className="plant-card">
                    <div className="name">{plant.name}</div>
                    <img src="./img/plant.png" alt="A green plant in a yellow pot" />
                  </div>
                </div>
              ))}
            </div>
    
            <div className="grid">
              <div className="weekday-num">
                <p>Week 2</p>
              </div>
              {myList.map((plant, index) => (
                <div key={index} className="grid-item">
                  <div className="plant-card">
                    <div className="name">{plant.name}</div>
                    <img src="./img/plant.png" alt="A green plant in a yellow pot" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

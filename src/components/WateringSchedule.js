import React from 'react'
import './WateringSchedule.css';

export default function WateringSchedule(){
    return (
        <section className = "WateringSchedule">
            {/*WATERING SCHEDULE*/}
            <h2> My Watering Schedule</h2>
            <div className="calendar">
                <div className="grid">
                    {/*WEEK DAY NAMES*/}
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

                    {/*FIRST ROW*/}
                    <div className="weekday-num">
                        <p>Week 1</p>
                    </div>
                    <div className="grid-item">
                        <div className="plant-card">
                            <div className="name">Beauty Star</div>
                            <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="plant-card">
                            <div className="name">Common Camas</div>
                            <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="plant-card">
                            <div className="name">Beauty Star</div>
                            <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>

                    {/*SECOND ROW*/}
                    <div className="weekday-num">
                        <p>Week 2</p>
                    </div>
                    <div className="grid-item">
                        <div className="plant-card">
                            <div className="name">Beauty Star</div>
                            <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="plant-card">
                            <div className="name">Common Camas</div>
                            <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="plant-card">
                            <div className="name">Beauty Star</div>
                            <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="blank-card">
                            <p className="no-entry">No Plants!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

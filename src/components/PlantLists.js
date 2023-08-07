import React from 'react'
import './PlantLists.css';

function PlantCard(props = {}) {

    let {name, scientific, sun, water, difficulty} = props;

    return (
        <div className="outter-card">
            <div className="inner-card">
                <div className="playlist-remove">
                    <a className="interact" href="plants2.html">
                        <span className="material-icons">playlist_remove</span>
                    </a>
                </div>
                <img src="./img/plant.png" alt="A green plant in a yellow pot" />
                <div className="plant-type">
                    <div className="name">{name}</div>
                    <div className="desc">{scientific}</div>
                </div>
            </div>
            <div className="bottom-icons-container">
                <div className="sunlight">
                    <div className="sun-icon">
                        <span className="material-icons">sunny</span>
                    </div>
                    <div className="type">{sun}</div>
                </div>
                <div className="water">
                    <div className="water-icon">
                        <span className="material-icons">water_drop</span>
                    </div>
                    <div className="type">{water}</div>
                </div>
                <div className="difficulty">
                    <div className="value">{difficulty}</div>
                    <div className="type">difficulty</div>
                </div>
            </div>
    </div>
    )
}

export function GreatForIndoors(props) {

    let indoorsArray = props.plants.filter((plant) => {
        return plant.sun === "Indirect";
    })

    return (
        <div>
            <h2>Great for Indoor</h2>
            <div className="card-container">
                {indoorsArray.map((plant, index) => (
                    <PlantCard
                        key={index}
                        name={plant.name}
                        scientific={plant.scientific}
                        sun={plant.sun}
                        water={plant.water}
                        difficulty={plant.difficulty}
                    />
                ))}
            </div>
        </div>
    )
}

export function EasyToCare(props) {

    let easyCareArray = props.plants.filter((plant) => {
        return plant.difficulty === "3/10";
    })

    return (
        <div>
            <h2>Easy to Care</h2>
            <div className="card-container">
                {easyCareArray.map((plant, index) => (
                    <PlantCard
                        key={index}
                        name={plant.name}
                        scientific={plant.scientific}
                        sun={plant.sun}
                        water={plant.water}
                        difficulty={plant.difficulty}
                    />
                ))}
            </div>
        </div>
    )
}

// see all plants in data
function PlantList(props) {

    return (
        <div>
            <div className="card-container">
                {props.plants.map((plant, index) => (
                    <PlantCard
                        key={index}
                        name={plant.name}
                        scientific={plant.scientific}
                        sun={plant.sun}
                        water={plant.water}
                        difficulty={plant.difficulty}
                    />
                ))}
            </div>
        </div>
    )
}
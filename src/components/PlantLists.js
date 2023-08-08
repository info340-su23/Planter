import React from 'react'
import './PlantLists.css';

export function PlantCard(props) {
    const { name, scientific, sun, water, difficulty, inMyList, handleRemoveFromList, handleClick } = props;

    const handleIconClick = (event) => {
        event.preventDefault();
        if (inMyList) {
            handleRemoveFromList({ name, scientific, sun, water, difficulty });
        } else {
            handleClick({ name, scientific, sun, water, difficulty });
        }
    };

    let icon= "";
    let ariaLabel= "";
    if (inMyList) {
        icon = "playlist_remove";
        ariaLabel = "Remove";
    } else {
        icon = "playlist_add";
        ariaLabel = "Add";
    }

    return (
        <div className="outter-card">
            <div className="inner-card">
                <div className="playlist-add">
                    <a className="interact" onClick={handleIconClick}>
                        <span className="material-icons" aria-label={ariaLabel}>{icon}</span>
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

// potential placeholder card for the "My List"
// export function PlaceholderCard() {
//     return (
//       <div className="outter-card placeholder-card">
//         <div className="inner-card">
//           <img src="./img/placeholder.png" alt="Placeholder" />
//           <div className="plant-type">
//             <div className="name">No plants in your list</div>
//           </div>
//         </div>
//       </div>
//     );
//   }  

export function MyList(props) {
    const { myList, handleClick, handleRemoveFromList } = props;
    
    return (
        <div>
            <h2>My List</h2>
            <div className="card-container">
                {myList.map((plant, index) => (
                    <PlantCard
                        key={index}
                        name={plant.name}
                        scientific={plant.scientific}
                        sun={plant.sun}
                        water={plant.water}
                        difficulty={plant.difficulty}
                        inMyList={true}
                        handleClick={handleClick}
                        handleRemoveFromList={handleRemoveFromList}
                    />
                ))}
            </div>
        </div>
    );
}

export function GreatForIndoors(props) {

    const { setIndoorsArray, indoorsArray, handleClick } = props;

    const handleRemoveFromIndoors = (plant) => { 
        setIndoorsArray(indoorsArray.filter((item) => item.name !== plant.name));
      };

    return (
        <div>
            <h2>Great for Indoors</h2>
            <div className="card-container">
                {indoorsArray.map((plant, index) => (
                    <PlantCard
                        key={index}
                        name={plant.name}
                        scientific={plant.scientific}
                        sun={plant.sun}
                        water={plant.water}
                        difficulty={plant.difficulty}
                        inMyList={false}
                        handleClick={handleClick}
                        handleRemoveFromList={handleRemoveFromIndoors}
                    />
                ))}
            </div>
        </div>
    )
}

export function EasyToCare(props) {

    const { setEasyCareArray, easyCareArray, handleClick } = props;

    const handleRemoveFromEasyCare = (plant) => { 
        setEasyCareArray(easyCareArray.filter((item) => item.name !== plant.name));
      };

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
                        inMyList={false}
                        handleClick={handleClick}
                        handleRemoveFromList={handleRemoveFromEasyCare}
                    />
                ))}
            </div>
        </div>
    )
}

// see all plants in data
// function PlantList(props) {

//     return (
//         <div>
//             <div className="card-container">
//                 {props.plants.map((plant, index) => (
//                     <PlantCard
//                         key={index}
//                         name={plant.name}
//                         scientific={plant.scientific}
//                         sun={plant.sun}
//                         water={plant.water}
//                         difficulty={plant.difficulty}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

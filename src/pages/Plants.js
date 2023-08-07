import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import WateringSchedule from '../components/WateringSchedule'
import './Plants.css'
import Footer from '../components/Footer';
import { MyList, EasyToCare, GreatForIndoors } from '../components/PlantLists';

export default function Plants(props) {
    const [myList, setMyList] = useState([]);
    const [indoorsArray, setIndoorsArray] = useState(props.plants.filter((plant) => plant.sun === 'Indirect'));
    const [easyCareArray, setEasyCareArray] = useState(props.plants.filter((plant) => plant.difficulty === '3/10'));

    /*
    Checking if current element's name (item) is NOT equal to the plant being added to My list. 
    If true, the item isn't being added (remains in the array) since the plant is already there
    "item" = temporary variable in filter method callback -> represent each element of the array being filtered. 
    */
    const addToMyList = (plant) => {
      setMyList((prevList) => [...prevList, plant]);
      setIndoorsArray((prevArray) => prevArray.filter((item) => item.name !== plant.name));
      setEasyCareArray((prevArray) => prevArray.filter((item) => item.name !== plant.name));
    };

    /*
    Checking if current element's name (item) is NOT equal to the plant being removed from My list. 
    If true, the item isn't being removed (remains in the array) since the plant is already there
    */
    const removeFromMyList = (plant) => {
      setMyList((prevList) => prevList.filter((item) => item.name !== plant.name));
      if (plant.sun === 'Indirect') {
        setIndoorsArray((prevArray) => [...prevArray, plant]);
      } else if (plant.difficulty === '3/10') {
        setEasyCareArray((prevArray) => [...prevArray, plant]);
      }
    };

    return (
        <div className="plantsPage">
            <Navbar />
            <header>

                {/*PAGE TITLE/HEADER*/}
                <div>
                    <h1>Plant Manager</h1>
                </div>
            </header>
            <div className="innerContent">
                {/*COMPONENTS*/}
                <WateringSchedule />
                <MyList plants={props.plants} myList={myList} handleClick={addToMyList} handleRemoveFromList={removeFromMyList} />
                <GreatForIndoors plants={props.plants} indoorsArray={indoorsArray} handleClick={addToMyList} setIndoorsArray={setIndoorsArray} />
                <EasyToCare plants={props.plants} easyCareArray={easyCareArray} handleClick={addToMyList} setEasyCareArray={setEasyCareArray} />
            </div>
            <div className="outerContent">
                {/*FOOTER*/}
                <Footer />
            </div>
        </div>
    );
}
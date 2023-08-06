import React from 'react'
import './MyList.css';

export default function MyList() {
    return (
        <section className = "MyList">
            {/*MY LIST*/}
            <h2>My List</h2>
            <div className="card-container">
            <   div className="outter-card">
                    <div className="inner-card">
                        <div className="playlist-remove">
                            <a className="interact" href="plants2.html">
                                <span className="material-icons">playlist_remove</span>
                            </a>
                        </div>
                        <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        <div className="plant-type">
                            <div className="name">Beauty Star</div>
                            <div className="desc">Calathea</div>
                        </div>
                    </div>
                    <div className="bottom-icons-container">
                        <div className="sunlight">
                            <div className="sun-icon">
                                <span className="material-icons">sunny</span>
                            </div>
                            <div className="type">Direct</div>
                        </div>
                        <div className="water">
                            <div className="water-icon">
                                <span className="material-icons">water_drop</span>
                            </div>
                            <div className="type">3 Weeks</div>
                        </div>
                        <div className="difficulty">
                            <div className="value">5/10</div>
                            <div className="type">difficulty</div>
                        </div>
                    </div>
                </div>

                <div className="outter-card">
                    <div className="inner-card">
                        <div className="playlist-remove">
                            <span className="material-icons" aria-label="Remove">
                                playlist_remove
                            </span>
                        </div>
                        <img src="./img/plant.png" alt="A green plant in a yellow pot"/>
                        <div className="plant-type">
                            <div className="name">Common camas</div>
                            <div className="desc">Camassia quamash</div>
                        </div>
                    </div>
                    <div className="bottom-icons-container">
                        <div className="sunlight">
                            <div className="sun-icon">
                                <span className="material-icons">sunny</span>
                            </div>
                            <div className="type">Indirect</div>
                        </div>
                        <div className="water">
                            <div className="water-icon">
                                <span className="material-icons">
                                    water_drop
                                </span>
                            </div>
                            <div className="type">3 Weeks</div>
                        </div>
                        <div className="difficulty">
                            <div className="value">3/10</div>
                            <div className="type">difficulty</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
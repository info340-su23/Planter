import React from 'react'
import '../index.css'

export default function MyList(props) {
    const { myList } = props;

    return (
        <div>
            <h2>My List</h2>
            <div className="card-container">
                {myList.map((plant, index) => (
                    <div key={index}>{plant}</div>
                ))}
            </div>
        </div>
    );
}
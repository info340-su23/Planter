import './CreatePost.css'
import React, {useState} from 'react'

export default function CreatePost() {
    const [showFullBox, setShowFullBox] = useState(false);

    const handleTitleClick = () => {
        setShowFullBox(true);
    };

    return (
        <div className="post-container">

        {/* <!-- container for first row --> */}
        <div className="title-row">
            {/* <!-- Account icon --> */}
          <div className="account-icon">
            <span className="material-icons" aria-label="account_circle">account_circle</span>
          </div>

          {/* <!-- Title input --> */}
          <div className="title-box">
          {showFullBox ? (
            <input type="text" name="text" placeholder="create post"></input>
            ) : (
                <input type="text" name="text" placeholder="create post"
                onClick={handleTitleClick}></input>
            )}
          </div>
        </div>
        
        {/* Only added if user clicks: */}
        {showFullBox && (
            <div> 
            <div>
                <input className="text-box" type="text" name="text" placeholder="Text optional"></input>    
            </div>

            <div class = "post-tags">
            <h4>Select tags:</h4>
            <div class="left-tags">

            <div class="tag-top">
                <button class = "tag events" type="button">Events</button>
                <button class = "tag tips" type="button">Plant Tips</button>
                <button class = "tag sustainbility" type="button">Sustainbility</button>
            </div>

            <div class="tag-bot">
                <button class = "tag sale" type="button">For Sale</button>
                <button class = "tag help" type="button">Help Wanted</button>
                <button class = "tag progress" type="button">Progress</button>
            </div>

            </div>
                <button class = "post" type="button">Post</button>
            </div> 
            </div>          
        )}

      </div>
    );
}
import React, {useState} from 'react';
import './Posted.css';

export default function Posted() {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
  
    const handleLikeClick = () => {
      setLiked(!liked);
    };
  
    const handleSaveClick = () => {
      setSaved(!saved);
    };




    return (
        <div>
            <div className="posted">
            {/* <!-- Section 1 --> */}
                <div className="post-header">
                    <div className="account">
                        <span className="material-icons" aria-label="account_circle">account_circle</span>
                        {/* <!-- CHANGE -->
                        <!-- CHANGE -->
                        <!-- CHANGE --> */}
                        <div className="post-acc-name">Lily</div>              
                    </div>
                    <div className="right-tags">
                        <button className = "tag tips" type="button">Plant Tips</button>
                        <button className = "tag sustainbility" type="button">Sustainbility</button>                
                    </div>

                </div>

                {/* //   <!-- title --> */}
                <div className="post-title">You can plant more lilies if you lorem ipsum</div>

                {/* <!-- post content --> */}
                <div className="posted-text">
                    <p>Has anyone tried... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>              
                </div>


                    {/* <!-- different post interactions (like, save) --> */}
                <div className="post-interactions">
                    <div className="likeBtn">
                        <span className={`material-icons ${liked ? 'liked' : ''}`}
                        onClick={handleLikeClick} aria-label="like"> favorite
                        </span> 
                        <p>Like</p>
                    </div>
                    <div className="saveBtn">
                        <span className={`material-icons ${saved ? 'saved' : ''}`} 
                        onClick={handleSaveClick} aria-label="save">bookmark
                        </span>
                        <p>Save</p>
                    </div>
                </div>
                
            </div>            
        </div>
    );
}
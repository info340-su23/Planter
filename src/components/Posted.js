import React, {useState} from 'react';
import './Posted.css';

export default function Posted({ title, body, currentUser }) {
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
                        <img className="post-acc-icon" src={currentUser.photoURL} alt="User Icon" />           
                        <div className="post-acc-name">{currentUser.displayName}</div>   
                    </div>
                    <div className="right-tags">
                        <button className = "tag tips" type="button">Plant Tips</button>
                        <button className = "tag sustainbility" type="button">Sustainbility</button>                
                    </div>

                </div>

                {/* //   <!-- title --> */}
                <div className="post-title">{title}</div>

                {/* <!-- post content --> */}
                <div className="posted-text">
                    <p>{body}</p>              
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
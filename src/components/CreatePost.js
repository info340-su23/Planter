import './CreatePost.css'
import React, {useState} from 'react'
import 'firebase/firestore';
import { getDatabase, ref, set as firebaseSet, push } from 'firebase/database';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseUIConfig } from '../config/firebaseConfig';

export default function CreatePost({ setPosts, posts, currentUser, auth}) {
    const [showFullBox, setShowFullBox] = useState(false);
    const [title, setTitle] = useState('create post');
    const [body, setBody] = useState('');
    
    const handleTitleClick = () => {
        setShowFullBox(true);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    }

    const handlePostSubmit = () => {
            console.log("handlePostSubmit triggered");
            console.log("Title as:", title);
            console.log("Body:", body);
            console.log ("User:", currentUser);
        if (currentUser && title && body) {
        
            const db = getDatabase();
            const postRef = ref(db, 'post');
            
            push(postRef, {
                Title: title,
                Body: body,
                UserID: currentUser.uid
            });

            setPosts(prevPosts => [
                ...prevPosts,
                {
                    title: title,
                    body: body,
                    userID: currentUser.uid
                }
            ])

            setShowFullBox(false);
            setTitle('create post');
            setBody('');
        }
    };

    return (
        <div className="post-container">
            {currentUser ? (
                <div className="title-row">
                    {/* <!-- Account icon --> */}
                    <div className="account-icon">
                        <span className="material-icons" aria-label="account_circle">account_circle</span>
                    </div>

                    {/* <!-- Title input --> */}
                    <div className="title-box">
                        {showFullBox ? (
                            <input type="text" name="text" placeholder={title} onChange={handleTitleChange}></input>
                        ) : (
                            <input type="text" name="text" placeholder={title}
                            onClick={handleTitleClick} onChange={handleTitleChange}></input>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                <p>Please sign in to create a post:</p>
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
                </div>
            )}
        
        {/* Only added if user clicks: */}
        {showFullBox && (
            <div> 
            <div>
                <input className="text-box" type="text" name="text" placeholder="Text optional" onChange={handleBodyChange}></input>    
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
                <button class = "post" type="button" onClick={handlePostSubmit}>Post</button>
            </div> 
            </div>          
        )}

      </div>
    );
}
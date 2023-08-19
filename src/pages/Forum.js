import React, {useState} from 'react';
import Searchbar from '../components/Searchbar';
import Filters from '../components/Filters';
import CreatePost from '../components/CreatePost';
import Posted from '../components/Posted';
import './Forum.css';


export default function Forum({currentUser, auth}) {
    const [posts, setPosts] = useState([]);

    const renderPosts = () => {
        const correctOrder = [...posts].reverse();
        return correctOrder.map((post, index) => (
            <Posted key={index} title={post.title} body={post.body} currentUser={currentUser}/>
        ));
    };

    return(
        <div className="forumPage">
            <div className="innerContent">
                <Searchbar/>
                <Filters />
                <CreatePost setPosts={setPosts} posts={posts} currentUser={currentUser} auth={auth} />
                {renderPosts()}
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Filters from './Filters';
import CreatePost from './CreatePost';
import Posted from './Posted';
import '../index.css'


export default function Forum({ currentUser, auth }) {
    const [posts, setPosts] = useState([]);

    const renderPosts = () => {
        const correctOrder = [...posts].reverse();
        return correctOrder.map((post, index) => (
            <Posted key={index} title={post.title} body={post.body} currentUser={currentUser} />
        ));
    };

    return (
        <div className="forumPage">
            <div className="innerContent">
                <Searchbar />
                <Filters />
                <CreatePost setPosts={setPosts} posts={posts} currentUser={currentUser} auth={auth} />
                {renderPosts()}
            </div>
        </div>
    );
}
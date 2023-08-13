
import Searchbar from '../components/Searchbar';
import Filters from '../components/Filters';
import CreatePost from '../components/CreatePost';
import Posted from '../components/Posted';
import './Forum.css';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'


export default function Forum() {
    return(
        <div className="forumPage">
            <div className="innerContent">
                <Searchbar/>
                <Filters />
                <CreatePost />
                <Posted />
            </div>
            <div className="outerContent">
            </div>
        </div>
    );
}
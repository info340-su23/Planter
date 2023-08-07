import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Filters from '../components/Filters'
import CreatePost from '../components/CreatePost'
import Posted from '../components/Posted'
import './Forum.css'
import Footer from '../components/Footer.js'

export default function Forum() {
    return(
        <div className="forumPage">
            <Navbar/>;
            <div className="innerContent">
                <Searchbar/>
                <Filters />
                <CreatePost />
                <Posted />
            </div>
            <div className="outerContent">
                {/*FOOTER*/}
                <Footer/>
            </div>
        </div>
    );
}
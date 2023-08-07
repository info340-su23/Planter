import Navbar from '../components/Navbar';
import WateringSchedule from '../components/WateringSchedule'
import MyList from '../components/MyList'
import './Plants.css'
import Footer from '../components/Footer';
import {EasyToCare, GreatForIndoors} from '../components/PlantLists';

export default function Plants(props) {
    return(
        <div className="plantsPage">
            <Navbar/>;
            <header>
                {/*PAGE TITLE/HEADERr*/}
                <div>
                    <h1>Plant Manager</h1>
                </div>
            </header>
            <div className="innerContent">
                {/*COMPONENTS*/}
                <WateringSchedule/>
                <MyList/>
                <GreatForIndoors plants={props.plants}/>
                <EasyToCare plants={props.plants}/>
            </div>
            <div className="outerContent">
                {/*FOOTER*/}
                <Footer/>
            </div>
        </div>
    );
}
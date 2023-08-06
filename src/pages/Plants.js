import Navbar from '../components/Navbar';
import WateringSchedule from '../components/WateringSchedule'
import MyList from '../components/MyList'
import Indoors from '../components/Indoors'
import EasytoCare from '../components/EasytoCare'
import './Plants.css'
import Footer from '../components/Footer';

export default function Plants() {
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
                <Indoors/>
                <EasytoCare/>
            </div>
            <div className="outerContent">
                {/*FOOTER*/}
                <Footer/>
            </div>
        </div>
    );
}
import '../index.css'
import Cards from './Cards.js'
import Navigation from './Navbar.js'
import Footer from './Footer.js'

export default function HomePage() {

    return (
        <div className="HomePage">
            <Navigation />
            {/* banner */}
            <div className="banner">
                <div className="hp-statement">
                    <div className="hp-eyecatch">Planet plant</div>
                    <div>Whether its planting, planning, or our planet, we’ve got you covered. </div>
                </div>
                <img src="./img/hp-banner.png" alt="A girl and a boy standing next to each other in yellow gardening clothing. The girl is holding a watering can while the boy is holding onto a wheelbarrow in front of him" />
            </div>

            {/* mission statement */}
            <div className="hp-mission">
                <div className="hp-mission-statement"></div><h2>Our mission:</h2>
                <p>Rekindle the lost connection between humans and nature by encouraging environmentally friendly and sustainable habits, so that we can better empathize with climate change and reduce greenhouse gases.</p>
            </div>

            {/* cards */}
            <Cards />
            <div className="outerContent">
                {/*FOOTER*/}
                <Footer />
            </div>
        </div>

    );
}

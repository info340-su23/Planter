import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar({ onLogOut, currentUser }) {

  const isHomePage = window.location.pathname === '/home';

  return (
    <nav className="nav">
      <div className="nav-left">  
        <img className="logo" src="./img/Planter.png" alt="Planter logo"/>
        <ul>
          <li><div className="logo-name">Planter</div></li>
        </ul>
      </div>
      <ul>
        <Link className="nav-right" to="/home">Home</Link>
        <Link className="nav-right" to="/plant">Plant</Link>
        <Link className="nav-right" to="/forum">Forum</Link>
        {currentUser && !isHomePage && (
          <Link className="nav-right" to="#" onClick={onLogOut}>
            Log Out
          </Link>
        )}
      </ul>
    </nav>        
  );
}
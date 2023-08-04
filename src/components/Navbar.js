import './Navbar.css'

export default function Navbar() {
    return(
    <div className="nav">

    <div className="nav-left">  
      <ul>
        <li><div className="logo-name">Planter</div></li>
      </ul>
    </div>
      <ul>
        <div className="nav-right">
          <li><a href="index.html">Home</a></li>
          <li><a href="webapp/plants.html">Plant Finder</a></li>
          <li><a href="webapp/forum.html">Forum</a></li>
        </div>
      </ul>

    </div>        
    );
}
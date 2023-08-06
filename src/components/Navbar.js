import './Navbar.css'

export default function Navbar() {
    return(
    <nav className="nav">

    <div className="nav-left">  
      <img className="logo" src="./img/Planter.png" alt="Planter logo"/>
      <ul>
        <li><div className="logo-name">Planter</div></li>
      </ul>
    </div>
      <ul>
        <div className="nav-right">
          <CurrLink href="/home">Home</CurrLink>
          <CurrLink href="/plant">Plant</CurrLink>
          <CurrLink href="/forum">Forum</CurrLink>
          {/* <li><a href="/home">Home</a></li>
          <li><a href="/plant">Plant Finder</a></li>
          <li><a href="/forum">Forum</a></li> */}
        </div>
      </ul>

    </nav>        
    );
}

function CurrLink({href, children, ...props}) {
  const path = window.location.pathname
  return(
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  )
}
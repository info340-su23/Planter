import '../index.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navbar( {onLogOut, currentUser}) {
  const isHomePage = window.location.pathname === '/home';
  return (
    <Navbar expand="lg" className="nav">
      <Navbar.Brand className="nav-left">
        <img className="logo" src="./img/Planter.png" alt="Planter logo" />
        <Navbar.Text className="logo-name">Planter</Navbar.Text>
      </Navbar.Brand>
      <Nav className="nav-links">
        <Nav.Link className="nav-right" href="/home">Home</Nav.Link>
        <Nav.Link className="nav-right" href="/plant">Plant</Nav.Link>
        <Nav.Link className="nav-right" href="/forum">Forum</Nav.Link>
        {currentUser && !isHomePage && (
          <Nav.Link className="nav-right" to="#" onClick={onLogOut}>
            Log Out
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );

}

import '../index.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
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
      </Nav>
    </Navbar>
  );
}

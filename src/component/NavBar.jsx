import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
// import logo from '../../img/pluma.svg';

const NavBar = () =>{
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
          <NavLink className={({isActive})=> isActive ? 'btn btn-light me-2' : 'btn btn-outline-light me-2'} to='/'>El rey de la espuma</NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({isActive})=> isActive ? 'btn btn-light me-2' : 'btn btn-outline-light me-2'} to='cat/Almohadas'>Almohadas</NavLink>
            <NavLink className={({isActive})=> isActive ? 'btn btn-light' : 'btn btn-outline-light'} to='cat/Colchones'>Colchones</NavLink>
            </Nav>
          <Nav>
            <Nav.Link href="#deets"><CartWidget /></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default NavBar
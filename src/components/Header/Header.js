import './Header.css'
import Logo from '../../Assets/images/logo_var4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPhone, faDesktop, faUser, faPlus, faLock } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
 
  return (
  <div className="bg-black navigation">
  <Navbar collapseOnSelect expand="lg" className="bg-black"  >
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='header__logo' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
          <Nav.Link href="#home" className='text-white navlinks'>  <FontAwesomeIcon icon={faDesktop} /> Home</Nav.Link>
            <Nav.Link href="#about"  className='text-white navlinks'> <FontAwesomeIcon icon={faUser} /> About Us</Nav.Link>
            <Nav.Link href="#process"  className='text-white navlinks'> <FontAwesomeIcon icon={faPhone} /> Process</Nav.Link>
            <Nav.Link href="#sampleWorks"  className='text-white navlinks'> <FontAwesomeIcon icon={faBriefcase} /> Sample Works</Nav.Link>
            
          </Nav>
          <Nav>
          <div className='h-100 d-flex justify-content-start align-items-center gap-3  nav__header'>
          <a href="" class="call-to-action-button"><FontAwesomeIcon icon={faPlus} /> Start Now</a>

          <a href="" class="plus-action-button "><FontAwesomeIcon icon={faLock} /> Sign In</a>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  
  </div>

  )
}

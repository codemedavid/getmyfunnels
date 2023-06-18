import './Header.css'
import Logo from '../../Assets/images/logo_var4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPhone, faDesktop, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
 
  return (
  <div className="bg-black">
   <Container>
      <Row>
      <Col lg="3">
          <img src={Logo} className='header__logo' alt="" />
        </Col>
        <Col lg="5">
        <Nav className='h-100 justify-content-start align-items-center nav__header'>
            <Nav.Link href="#home" className='text-white'>  <FontAwesomeIcon icon={faDesktop} /> Home</Nav.Link>
            <Nav.Link href="#link"  className='text-white'> <FontAwesomeIcon icon={faUser} /> About Us</Nav.Link>
            <Nav.Link href="#link"  className='text-white'> <FontAwesomeIcon icon={faPhone} /> Contact Us</Nav.Link>
            <Nav.Link href="#link"  className='text-white'> <FontAwesomeIcon icon={faBriefcase} /> Sample Works</Nav.Link>
         </Nav>
        </Col>
        <Col lg="4" >
          <div className='h-100 d-flex justify-content-start align-items-center nav__header'>
          <a href="" class="plus-action-button call-to-action-button"><FontAwesomeIcon icon={faPlus} /> Start Now</a>
          </div>
    
        </Col>
      </Row>
   </Container>
  </div>

  )
}

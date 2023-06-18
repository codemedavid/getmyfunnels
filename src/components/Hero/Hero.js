import React from 'react'
import './hero.css'
import BgVideo from '../../Assets/videos/angelo2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Row, Container, Col} from 'react-bootstrap';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Premiere365 from '../../Assets/images/premiere365.png'
import Upscale from '../../Assets/images/upscale.png'
import Nwh from '../../Assets/images/nwh.png'
function Hero() {
  return (
    <div className='hero'>
      <video src={BgVideo} autoPlay muted loop className='video-bg'/>
      <div className="bg-overlay"></div>
      <div className="home-text">
         <h2>Funnel Building <br /> Email Automation <br /> Course Website <br />Social Media Management</h2>
         <p>Get a High Converting Funnels, Email Automation, Social Media Management and A Platform For Posting Your Courses</p>


         <a  class="button" href="" >Contact Us <FontAwesomeIcon icon={faArrowRight} /></a>
        
      </div>
      <Container className='d-flex justify-content-center align-item-center'>
           <Row>
        <Col><img src={Premiere365} alt="" class="images"/></Col>
        <Col><img src={Upscale} alt="" class="images"/></Col>
        <Col><img src={Nwh} alt="" class="images" /></Col>
      </Row>
</Container>
    </div>
  )
}

export default Hero
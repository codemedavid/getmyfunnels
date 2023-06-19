import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Production from '../../Assets/images/production.jpg'
import computer from '../../Assets/images/computer.png'
import computer2 from '../../Assets/images/computer2.jpg'
import SocialMedia from '../../Assets/images/social-media.jpg'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Graphic from '../../Assets/images/graphic.jpg'
import SMM from '../../Assets/images/smm.jpg'
import './about.css'
function About() {
  return (
    <div className='overflow-hidden' id='about'>
      <Row>
        <Col lg='6'>
        <div className="about-bg w-100">
        <img src={Production} className='about-img' alt="" />
        </div>
        </Col>

        <Col lg='6' className='w-50'>
        <div className="about-caption h-100  d-flex align-items-center ">
            <div className="caption">
                <div className="img-caption h-50 d-flex align-items-center justify-content-center">
                    <img src={computer} alt="" className='w-50'/>
                </div>
                <div className="title-caption">
                <br /><br />
                <h3 className='text-black text-center'>Marketing Funnel</h3>
                <p className='text-center'>I help businesses to make more revenues by building the a highly converting funnels.</p>

                </div>

                <div className="about-action d-flex align-items-center justify-content-center">
                <a href="#sampleWorks" className='link'>See my samples <span className="arrow-right"> <FontAwesomeIcon  className="arrow-right" icon={faArrowRight} /></span></a>

                </div>
            </div>
        </div>
        </Col>
      </Row>

      <Row>
    

        <Col lg='6' className='w-50'>
        <div className="about-caption h-100 w-100 d-flex align-items-center ">
            <div className="caption">
                <div className="img-caption h-50 d-flex align-items-center justify-content-center">
                    <img src={computer2} alt="" className='w-50'/>
                </div>
                <div className="title-caption">
                <br /><br />
                <h3 className='text-black text-center'>Courses Website</h3>
                <p className='text-center'>Creating a website for coaches where they can have their own Udemy or Coursera website</p>

                </div>

                <div className="about-action d-flex align-items-center justify-content-center">
                <a href="#sampleWorks" className='link'>See my samples <span className="arrow-right"> <FontAwesomeIcon  className="arrow-right" icon={faArrowRight} /></span></a>

                </div>
            </div>
        </div>
        </Col>

        <Col lg='6' className='w-50'>
        <div className="about-bg w-100">
        <img src={Graphic} className='about-img' alt="" />
        </div>
        </Col>
      </Row>

      <Row>
        <Col lg='6'>
        <div className="about-bg w-100">
        <img src={SMM} className='about-img' alt="" />
        </div>
        </Col>

        <Col lg='6' className='w-50'>
        <div className="about-caption h-100  d-flex align-items-center ">
            <div className="caption">
                <div className="img-caption h-50 d-flex align-items-center justify-content-center">
                    <img src={SocialMedia} alt="" className='w-50'/>
                </div>
                <div className="title-caption">
                <br /><br />
                <h3 className='text-black text-center'>Social Media Management</h3>
                <p className='text-center'>Maximize your social media and have 200% more leads organically</p>

                </div>

                <div className="about-action d-flex align-items-center justify-content-center">
                <a href="#sampleWorks" className='link'>See my samples <span className="arrow-right"> <FontAwesomeIcon  className="arrow-right" icon={faArrowRight} /></span></a>

                </div>
            </div>
        </div>
        </Col>
      </Row>

     
    </div>
  )
}

export default About

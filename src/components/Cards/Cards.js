import React from 'react'
import LinkdIn from '../../Assets/images/linkedin.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import './cards.css'

function Cards(props) {
  return (
    <div className='bg-black' id='sampleWorks'>
    <div className="p-2 pb-5">
    <Row>
    <Col>
        <div className="img-wrapper">
        <img src={props.img} alt="" className="blur" />
        <div className="content fade">
            <h4 class>LinkedIn Talent Insights II</h4>
         </div>
         </div>
         <br />
    </Col>

    <Col>
    <div className="img-wrapper">
        <img src={props.img2} alt="" className="blur" />
        <div className="content fade">
        <h4 className='text-black'>ASUS ProArt w/ Jacob & Katie Schwartz</h4>
        </div>
      </div>
    </Col>

    <Col>
    <div className="img-wrapper">
        <img src={props.img3} alt="" className="blur" />
        <div className="content fade">
            <h4>Google: Loon Brand Video</h4>
        </div>
      </div>
    </Col>
   
    </Row>
    <Row>
    <Col>
    <div className="img-wrapper">
        <img src={props.img4} alt="" className="blur" />
        <div className="content fade">
            <h4>Sizmek Sizzle Reel</h4>
        </div>
      </div>
    </Col>

    <Col>
    <div className="img-wrapper">
        <img src={props.img5} alt="" className="blur" />
        <div className="content fade">
            <h4>Deloitte Reimagine Audit</h4>
        </div>
      </div>
    </Col>

    <Col>
    <div className="img-wrapper">
        <img src={props.img6} alt="" className="blur" />
        <div className="content fade">
            <h4>
Reebok Cardio Ultra</h4>
        </div>
      </div>
    </Col>
   
    </Row>

</div>
      
    </div>
  )
}

export default Cards

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Iphone from '../../Assets/images/iphone.gif'
import './process.css'
import Ipad from '../../Assets/images/ipad.jpg'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Devices from '../../Assets/images/device.jpg'
function Process() {
  return (
    <div className='bg-black process__wrap overflow-hidden' id='process'>
      
      <Row>
        <Col>
            <div className="d-flex process justify-content-center align-items-center">
                <div className="step">
                    <span>1</span>
                </div>
                <div className="title d-flex justify-content-center align-items-center">
                    <h2 className='text-white step-title'>Start</h2>
                    <p className='text-white'>Click "Start Now" and tell us what you need</p>
                    <div className="process-take-action">
                        <a href="">Click here to start <FontAwesomeIcon  className="arrow-right" icon={faArrowRight} /></a>
                        <br /> <br />
                    </div>
                </div>
                <div className="process-img">
                    <img src={Iphone} alt="" />
                </div>
            </div>
        </Col>
        <Col>
            <div className="d-flex process justify-content-center align-items-center">
                <div className="step">
                    <span>2</span>
                </div>
                <div className="title d-flex justify-content-center align-items-center">
                    <h2 className='text-white step-title'> Plan </h2>
                    <p className='text-white'>We plan your project down to every detail.</p>
                    <div className="process-take-action">
                        <a href="#sampleWorks">See our Samples <span>  <FontAwesomeIcon  className="arrow-right" icon={faArrowRight} /> </span></a>
                        <br /> <br />
                    </div>
                </div>
                <div className="process-img">
                    <img src={Ipad} alt="" />
                </div>
            </div>
        </Col>
        <Col>
            <div className="d-flex process justify-content-center align-items-center">
                <div className="step">
                    <span>3</span>
                </div>
                <div className="title d-flex justify-content-center align-items-center">
                    <h2 className='text-white step-title'>Execute</h2>
                    <p className='text-white'>We deliver the goods. You refine until perfect.</p>
                    <div className="process-take-action">
                        <a href="">Click here to start <span>  <FontAwesomeIcon  className="arrow-right" icon={faArrowRight} /> </span></a>
                        <br /> <br />
                    </div>
                </div>
                <div className="process-img">
                    <img src={Devices} alt="" />
                </div>
            </div>
        </Col>
      </Row>
   
    </div>
  )
}

export default Process

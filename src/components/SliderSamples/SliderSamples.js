import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import LinkdIn from '../../Assets/images/linkedin.jpg'
import ProArt from '../../Assets/images/proart.jpg'
import './sliderSample.css'
import Google from '../../Assets/images/google.jpg'
import Cards from '../Cards/Cards';
import Sizmek from '../../Assets/images/sizmek.jpg'
import Diloitte from '../../Assets/images/deloitte.jpg'
import Reebok from '../../Assets/images/reebok.jpg'
function SliderSamples() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <Cards img={LinkdIn} img2={ProArt} img3={Google} img4={Sizmek} img5={Diloitte} img6={Reebok}></Cards>
        
      </Carousel.Item>
      <Carousel.Item>
   
      <Cards img={LinkdIn} img2={ProArt} img3={Google} img4={Sizmek} img5={Diloitte} img6={Reebok}></Cards>
     
      </Carousel.Item>
      <Carousel.Item>
      <Cards img={LinkdIn} img2={ProArt} img3={Google} img4={Sizmek} img5={Diloitte} img6={Reebok}></Cards>
      
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default SliderSamples

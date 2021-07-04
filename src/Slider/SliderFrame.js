import React, { useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import sliderLogo1 from '../Pictures/milesHeadTeam.jpeg';
import sliderLogo2 from '../Pictures/milesMitTurm.jpeg';
import ApiSlide from './ApiSlide'

function ControlledCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carouselContainer'
    >
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <div className='carouselItemStyling'> 
            <h1>The Team</h1>
            The head team behind Miles introduces itself.
          </div>
          <img
            src={sliderLogo1}
            alt='miles team members'
            className='imgInCarousel'
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='carouselItemStyling'>
            <h1>Carsharing made easy</h1>
            We offer also very special things.
          </div>
          <img
            src={sliderLogo2}
            alt="miles car in traffic"
            className='imgInCarousel'
          />
        </Carousel.Item>
        <Carousel.Item>
         
          <ApiSlide />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;

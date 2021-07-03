import Carousel from 'react-bootstrap/Carousel'
import React, {useState, useEffect, useCallback} from 'react';
import sliderLogo1 from './Pictures/milesZuwachs.jpeg'
import sliderLogo2 from './Pictures/milesTurm.jpeg'
import sliderLogo3 from './Pictures/milesLaster2.jpeg'
 import axios from 'axios'

function ControlledCarousel() {
  
  const [houses, setHouses] = useState([])
  
  const [thirdSliderName, setThirdSliderName] = useState('')
  const [thirdSliderRegion, setThirdSliderRegion] = useState('')

  const fetchRequest = useCallback(()=>{

  
    const url = 'https://www.anapioficeandfire.com/api/houses'

    axios.get(url)
    .then(d=>{
      setHouses(d.data)
    console.log(d.data, 'houses')
    console.log(d.data.length, 'length of data')
    let randomNum = Math.floor(Math.random()*d.data.length)
    setThirdSliderName(d.data[randomNum].name)
    setThirdSliderRegion(d.data[randomNum].region)

    })

}
// apiInfo()
  ,[])
  
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ maxWidth: '91%', margin: 'auto', marginTop:'15px'}}>

    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
      <div style={{width: 'inherit', height: '152px', marginTop: '20px'}}>
              <h1>The Team</h1>
              The head team behind Miles introduces itself.

       </div>
        <img
       
          src={sliderLogo1}
          alt="First slide"
          style={{width: '100%', height: '200px'}}
        />
        
      </Carousel.Item>
      <Carousel.Item>
      <div style={{width: 'inherit', height: '152px', marginTop: '20px'}}>
              <h1>Carsharing made easy</h1>
              We offer also very special things.

       </div>
        <img
       
          src={sliderLogo2}
          alt="Second slide"
          style={{width: '100%', height: '200px'}}

        />
      </Carousel.Item>
      <Carousel.Item>
      <div style={{width: 'inherit', height: '152px', marginTop: '20px', display: 'flex',
      flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
              <h1>Click and find out.</h1>
              <button style={{zIndex:'2'}} onClick={fetchRequest}>Click to refresh</button>

       </div>

       <div style={{width:'100%', height:'200px', border: '1px solid black', display: 'flex', 
       justifyContent:'space-around', alignItems:'center',
       background:'green'
       }}>
       name: {thirdSliderName}<br/>
       region: {thirdSliderRegion}
       </div>
  

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel
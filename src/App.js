import React, {useRef, useState} from 'react';
import NavigationBar from  './NavigationBar'
import Welcome from  './Welcome'
import Slider from './Slider/SliderFrame'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnyQuestions from './AnyQuestions'


export default function App() {

  const mainAppRef = useRef('mainApp')
  const [scrollPosition, setScrollPosition] = useState(null)

  return (
    <div 
        className='appContainer'
        onScroll={(e) => {setScrollPosition(e.target.scrollTop)}}
        ref={mainAppRef}
    >
      <NavigationBar/>
      <Welcome
                forwardedRef={mainAppRef}
                scrollPosition={scrollPosition}
      />
  
      <Slider/>
      <AnyQuestions/>
    </div>
  );
}


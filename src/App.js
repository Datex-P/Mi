import React, {useRef, useState} from 'react';
import Navigation from  './Navigation'
import MainBody from  './MainBody'
import SliderComp from './SliderComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import AnyQuestions from './AnyQuestions'


function App() {

  const mainAppRef = useRef('mainApp')
  const [scrollPosition, setScrollPosition] = useState(null)

  return (
    <>
    <div 
        className='appContainer'
        onScroll={(e) => {setScrollPosition(e.target.scrollTop)}}
        ref={mainAppRef}
    >
      <Navigation/>
      <MainBody 
                forwardedRef={mainAppRef}
                scrollPosition={scrollPosition}
      />
  
      <SliderComp/>
      <AnyQuestions/>
    </div>
      </>
  );
}

export default App;

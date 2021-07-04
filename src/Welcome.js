import React, {useRef,useEffect} from 'react'
import './index.scss';
import welcomeBackground from './Pictures/milesMitLogo.jpeg'
import arrowDown from './Pictures/arrowDown.svg'

export default function Welcome({forwardedRef,scrollPosition}) {

  useEffect(()=>{
    if (scrollPosition > 267 ) {
      arrowRef.current.classList.add('arrowUp')
    } else {
      arrowRef.current.classList.remove('arrowUp')
    }
  }, [scrollPosition])


  const arrowRef = useRef()

  function arrowUpOrDown() {
    
      if (arrowRef.current.classList.contains('arrowUp')) {

        forwardedRef.current.scrollTo({top:0, left: 0, behavior: 'smooth'})
        arrowRef.current.classList.remove('arrowUp')        
      } else {
        forwardedRef.current.scrollTo({top:346, left: 0, behavior: 'smooth'})
        arrowRef.current.classList.add('arrowUp')
  }
}

  return (
    <div className='welcomeContainer'>
      <div className='welcomeContainerInner'
      >
          <img 
                src= {welcomeBackground} 
                alt = 'header pic'
                className='welcomeBackground' 
          />
          
           <h3 className='welcomeText' >
               Hello, welcome!
           </h3>
          
            <img 
                src={arrowDown} 
                 alt='arrow down sign' 
                 className='arrowDown'
                 ref={arrowRef}
                onClick={arrowUpOrDown}
             />
      </div>

    </div>
  )
}

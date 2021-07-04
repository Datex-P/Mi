import React, {useState, useRef} from 'react'

export default function AnyQuestions() {

  const [showLabel, setShowLabel] = useState(0);
  const inputRef = useRef(null)

  function inputHandler (e) {

    setShowLabel(e.target.value.length)
  }

  return (
   
    <div className='anyQuestionsContainer position-relative'
    >
      <h3>Any Questions? <br/>Leave us a <br/>message!</h3>
      <input 
            className='addNameInputStyling mb-5' 
            name='anyQuestionsInp' 
            required={true}
            ref={inputRef}
            onInput={(e)=>{
            inputHandler(e)
            }}
      />
    
    {
      showLabel ===0&&
      <label 
        htmlFor='anyQuestionsInp' 
        id='addNameLabel'
        onClick={()=>{inputRef.current.focus()
        }}
      >
      Add name
      </label>
    }
      <button className='sendButton'
      >  
          Send
      </button>

    <div className='copyRightContainer'
    >
      <span className='copyRightContainerInner'
      >
      (c) Copyright 2021</span>
    </div>
    </div>
    
   
  )
}

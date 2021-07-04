import React, {useState} from 'react'

export default function AnyQuestions() {

  const [showLabel, setShowLabel] = useState(0);
  const [initialZero, setInitialZero] = useState(true);

  function inputHandler (e) {
    setInitialZero(false)
    setShowLabel(e.target.value.length)

    if (showLabel ===0 && initialZero === false) {
      document.getElementById('cl').required = false
    } else {
      document.getElementById('cl').required = true
    }
  }

  return (
   
    <>
    <div className='anyQuestionsContainer'
    >
      <h3>Any Questions? <br/>Leave us a <br/>message!</h3>
      <input 
            className='addNameInputStyling someclass' 
            id='cl' 
            name='someclass' 
            required={true}
            onInput={(e)=>{
            inputHandler(e)
            }}
      />
      {showLabel ===0?
    <label htmlFor='someclass' id='addNameLabel'>Add name</label>
    :
    <div style={{height:'32px'}}></div>  
    }

      <button className='sendButton'>Send
      </button>

    <div className='copyRightContainer'
    >
      <span style={{position: 'absolute', top:'10px', left:'10px', fontSize:'14px'}}>
      (c) Copyright 2021</span>
    </div>
    </div>
    </>
   
  )
}

import React, {useState, useRef} from 'react'

export default function AnyQuestions() {

  const [showLabel, setShowLabel] = useState(0);
  const [initialZero, setInitialZero] = useState(true);
  const inputRef = useRef(null)

  function inputHandler (e) {
    setInitialZero(false)
    setShowLabel(!e.target.value.length)

    if (showLabel ===0 && initialZero === false) {
      document.getElementById('cl').required = false
      document.getElementById('addNameLabel').style.display='none'
    } else {
      document.getElementById('cl').required = true
    }
  }

  return (
   
    <>
    <div className='anyQuestionsContainer position-relative'
    >
      <h3>Any Questions? <br/>Leave us a <br/>message!</h3>
      <input 
            className='addNameInputStyling someclass mb-5' 
            id='cl' 
            name='someclass' 
            required={true}
            ref={inputRef}
            onInput={(e)=>{
            inputHandler(e)
            }}
      />
      {/* {showLabel ===0? */}

    {showLabel &&<label htmlFor='someclass' id='addNameLabel'
    style={{position:'absolute'}}
    onClick={()=>{
      inputRef.current.focus()
    }}
    >Add name</label>}
  

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

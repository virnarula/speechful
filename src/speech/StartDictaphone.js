import React, { useState } from 'react'
import Dictaphone from './Dictaphone'

const StartDictaphone = () => {
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'Hello',
      callback: (food) => { setMessage(`Welcome to Speechful!`); 
      setTimeout(function(){
        document.location.href = document.location.href+"home";
    }, 1000); },
      matchInterim: true
    }
  ]

  return (
    <div>
      <Dictaphone commands={commands} transcriptChangeHandler={console.log}/>
      <p>{message}</p>
    </div>
  )
}

export default StartDictaphone
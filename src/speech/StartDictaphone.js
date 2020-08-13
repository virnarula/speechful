import React, { useState } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="circle">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
      <Dictaphone commands={commands} transcriptChangeHandler={console.log}/>
      <p>{message}</p>
    </div>
  )
}

export default StartDictaphone

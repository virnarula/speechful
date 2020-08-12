import React, { useState } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DictaphoneStyle.css"

//call in this.props.actionHandler(action) to send an action to the parent document component for changes to the document
const DocumentDictaphone = () => {
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
      <footer>
        <Dictaphone commands={commands} transcriptChangeHandler={console.log}/>
        <div className="circle">
          <FontAwesomeIcon icon={faMicrophone} /> 
        </div>
        {message} <span className="command">&nbsp;command!</span>
      </footer>
  )
}

export default DocumentDictaphone

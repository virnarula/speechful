import React, { useState } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DictaphoneStyle.css"
import { random } from 'lodash';

//call in this.props.actionHandler(action) to send an action to the parent document component for changes to the document
const HomeDictaphone = () => {
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'Create new document',
      callback: (food) => {
        setMessage("Create new document")
        let id = random(0,99999);
        localStorage.setItem("doc"+id, JSON.stringify({paragraphs: [], title: "Untitled", "id": id}))
        document.location.href = document.location.href.substring(0,document.location.href.indexOf("home"))+"document/:"+id;
        console.log("Creating new doc")
      },
      matchInterim: true
    }
  ]

  return (
      <footer>
        <Dictaphone commands={commands} transcriptChangeHandler={console.log}/>
        <div className="circle">
          <FontAwesomeIcon icon={faMicrophone} /> 
        </div>
         <span className="command">&nbsp;{message}</span>
      </footer>
  )
}

export default HomeDictaphone

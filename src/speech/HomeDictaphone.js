import React, { useState, useEffect } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DictaphoneStyle.css"

//call in actionHandler(action) to send an action to the parent document component for changes to the document
const DocumentDictaphone = ({transcriptUpdater, actionHandler}) => {
  const [transcript, setTranscript] = useState('')
  const [finalTranscript, setFinalTranscript] = useState('')
  const commands = [
    {
      command: 'select (document) :id',
      callback: (id) => {
        document.location.href = document.location.origin+"/document/"+id;
      }
    }
  ]

  console.log(transcript)
  
  return (
    <footer>
      <Dictaphone commands={commands} transcriptChangeHandler={setTranscript} finalTranscriptChangeHandler={setFinalTranscript}/>
      <div className="circle">
        <FontAwesomeIcon icon={faMicrophone} /> 
      </div>
      {highlightCommands(getLastWords(transcript, 10))}
    </footer>
  )
}

const getLastWords = (transcript, n) => {
  let tArr = transcript.split(" ")
  return tArr.slice(tArr.length - n).join(" ")
}

const highlightCommands = (transcript, commands) => {
  //commands.map(c => c.command)
  return transcript
}

export default DocumentDictaphone

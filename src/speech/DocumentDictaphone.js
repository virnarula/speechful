import React, { useState, useEffect } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DictaphoneStyle.css"

//call in actionHandler(action) to send an action to the parent document component for changes to the document
const DocumentDictaphone = ({transcriptUpdater, actionHandler}) => {
  const [transcript, setTranscript] = useState('')
  const [finalTranscript, setFinalTranscript] = useState('')
  const [typing, setTyping] = useState(false)
  const [prevTranscript, setPrevTranscript] = useState('')
  const commandsTyping = [
    {
      command: 'stop typing',
      callback: (food) => {
        setTyping(false)
        setPrevTranscript(finalTranscript)
      }
    }
  ]

  const commandsNotTyping = [
    {
      command: 'start typing',
      callback: (food) => {
        setTyping(true)
        setPrevTranscript(finalTranscript)
      }
    }
  ]
  
  useEffect(() => {
    if(finalTranscript.length !== prevTranscript.length) {
      let diff = diffString(finalTranscript, prevTranscript)
      // TODO: fix when final transcript has start typing in two different diff changes, currently solved by a hack
      if (typing && ((diff !== "start typing") && (diff !== "start" && diff !== "typing")) ) {
          transcriptUpdater(diff)
      }
      setPrevTranscript(finalTranscript)
    }
  })

  return (
    <footer>
      <Dictaphone commands={typing ? commandsTyping : commandsNotTyping} transcriptChangeHandler={setTranscript} finalTranscriptChangeHandler={setFinalTranscript}/>
      <div className="circle">
        <FontAwesomeIcon icon={faMicrophone} /> 
      </div>
      <span className="command">{typing ? "TYPING " : "NOT TYPING "}&nbsp;</span>
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

const diffString = (a, b) => a.split(b).join('')


export default DocumentDictaphone

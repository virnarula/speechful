import React, { useState, useEffect } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DictaphoneStyle.css"

let prevTranscript = ''

//call in actionHandler(action) to send an action to the parent document component for changes to the document
const DocumentDictaphone = ({transcriptUpdater, actionHandler}) => {
  const [transcript, setTranscript] = useState('')
  const [finalTranscript, setFinalTranscript] = useState('')
  const [typing, setTyping] = useState(false)
  const commandsTyping = [
    {
      command: '(*) stop typing',
      highlight: new RegExp('stop typing', 'gi'),
      callback: (food) => {
        setTyping(false)
        prevTranscript = finalTranscript
      }
    }
  ]

  const commandsNotTyping = [
    {
      command: '(*) start typing (*)',
      highlight: new RegExp('start typing', 'gi'),
      callback: () => {
        setTyping(true)
        prevTranscript = finalTranscript
      }
    },
    {
      command: '(*) save (document)',
      highlight: new RegExp('save (document)?', 'gi'),
      callback: () => {
        actionHandler({
          action: "SAVE",
          payload: {}
        })
      }
    },
    {
      command: 'move (cursor) to paragraph :paragraphNum',
      highlight: new RegExp('move (cursor)? to paragraph *', 'gi'),
      callback: (paragraphNum) => {
        setTyping(true)
        actionHandler({
          action: "MOVE_CURSOR",
          payload: {
            paragraph: paragraphNum
          }
        })
      }
    },
    {
      command: '(*) remove paragraph :paragraphNum',
      highlight: new RegExp('remove paragraph *', 'gi'),
      callback: (_, paragraphNum) => {
        actionHandler({
          action: "REMOVE_PARAGRAPH",
          payload: {
            paragraph: Number(paragraphNum) - 1
          }
        })
      }
    },
    {
      command: '(*) add (a) paragraph',
      highlight: new RegExp('add (a)? paragraph', 'gi'),
      callback: () => {
        actionHandler({
          action: "ADD_PARAGRAPH",
          payload: {}
        })
      }
    },
    {
      command: '(*) (go) back',
      highlight: new RegExp('(go)? back', 'gi'),
      callback: () => {
        document.location.href = document.location.origin+"/home"
      }
    },
  ]
  
  useEffect(() => {
    if(finalTranscript.length !== prevTranscript.length) {
      let diff = diffString(finalTranscript, prevTranscript)
      // TODO: fix when final transcript has start typing in two different diff changes, currently solved by a hack
      if (typing && ((diff.trim() !== "start typing") && (diff.trim() !== "start" && diff.trim() !== "typing")) ) {
          transcriptUpdater(diff)
      }
      prevTranscript = finalTranscript
    }
  })

  return (
    <footer>
      <Dictaphone commands={typing ? commandsTyping : commandsNotTyping} transcriptChangeHandler={setTranscript} finalTranscriptChangeHandler={setFinalTranscript}/>
      <div className="circle">
        <FontAwesomeIcon icon={faMicrophone} /> 
      </div>
      <span className="command">{typing ? "TYPING " : "NOT TYPING "}&nbsp;</span>
      {highlightCommands(getLastWords(transcript, 15), commandsTyping.concat(commandsNotTyping))}
    </footer>
  )
}

const getLastWords = (transcript, n) => {
  let tArr = transcript.split(" ")
  return tArr.slice(tArr.length - n).join(" ")
}

const highlightCommands = (transcript, commands) => {
    /*let regexes = commands.map(c => c.highlight)
    console.log(regexes)
    if (!regexes.length) {
        return transcript;
    }
    let split = transcript.split(regexes[0]);
    // Only needed if matches are case insensitive and we need to preserve the
    // case of the original match
    let replacements = transcript.match(regexes[0]);
    let result = [];
    for (let i = 0; i < split.length - 1; i++) {
        result.push(highlightCommands(split[i], regexes.slice(1)));
        result.push(<span className="command">{replacements[i]}</span>);
    }
    result.push(highlightCommands(split[split.length - 1], regexes.slice(1)));
  console.log(result)
    return result;*/
  return transcript
}

const diffString = (a, b) => a.split(b).join('')


export default DocumentDictaphone

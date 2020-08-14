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
        actionHandler({
          action: "MOVE_CURSOR_PARAGRAPH",
          payload: {
            paragraph: Number(paragraphNum) -1
          }
        })
      }
    },
    {
      command: 'move (cursor) to word :word',
      highlight: new RegExp('move (cursor)? to paragraph *', 'gi'),
      callback: (word) => {
        actionHandler({
          action: "MOVE_CURSOR_WORD",
          payload: {
            word: word
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
    {
      command: 'change title *',
      highlight: new RegExp("change title", 'gi'),
      callback: (title) => {
        actionHandler ({
          action: "CHANGE_TITLE",
          payload: {
            newTitle: title
          }
        })
      }
    },
    {
      command: 'remove * from paragraph *',
      highlight: new RegExp('remove from paragraph'),
      callback: (word, paragraph) => {
        actionHandler ({
          action: "REMOVE_WORD",
          payload: {
            word: word,
            paragraph: paragraph
          }
        })
      }
    },
    {
      command: 'replace * with * in paragraph *',
      highlight: new RegExp('replace * with * in paragraph'),
      callback: (oldWord, newWord, paragraph) => {
        actionHandler({
          action: "REPLACE_WORD",
          payload: {
            oldWord: oldWord,
            newWord: newWord,
            paragraph: paragraph
          }
        })
      }
    }
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
      {getLastWords(transcript, 15)}
    </footer>
  )
}

const getLastWords = (transcript, n) => {
  let tArr = transcript.split(" ")
  return tArr.slice(tArr.length - n).join(" ")
}

const diffString = (a, b) => a.split(b).join('')


export default DocumentDictaphone

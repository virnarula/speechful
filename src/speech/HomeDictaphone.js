import React, { useState, useEffect } from 'react'
import Dictaphone from './Dictaphone'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DictaphoneStyle.css"
import { random } from 'lodash';
import {makeParagraph} from '../model/Paragraph'

//call in actionHandler(action) to send an action to the parent document component for changes to the document
const DocumentDictaphone = ({transcriptUpdater, actionHandler}) => {
  const [transcript, setTranscript] = useState('')
  const [message, setMessage] = useState('')
  const [finalTranscript, setFinalTranscript] = useState('')
  const commands = [
    {
      command: '(*) select (document) :id',
      highlight: new RegExp('\\bselect document\\b', 'gi'),
      callback: (_, id) => openDocument(id)
    },
    {
      command: '(*) open (document) :id',
      highlight: new RegExp('\\bopen document\\b', 'gi'),
      callback: (_, id) => openDocument(id)
    },
    {
      command: 'Create new document',
      callback: (food) => {
        setMessage("Create new document")
        let id = random(0,99999);
        localStorage.setItem("doc"+id, JSON.stringify({paragraphs: [makeParagraph("", [])], title: "Untitled", "id": id}))
        openDocument(id)
        // document.location.href = document.location.href.substring(0,document.location.href.indexOf("home"))+"document/:"+id;
        console.log("Creating new doc")
      },
      matchInterim: true
    }
  ]

  console.log(transcript)
  
  return (
    <footer>
      <Dictaphone commands={commands} transcriptChangeHandler={setTranscript} finalTranscriptChangeHandler={setFinalTranscript}/>
      <div className="circle">
        <FontAwesomeIcon icon={faMicrophone} /> 
      </div>
      {highlightCommands(getLastWords(transcript, 15), commands)}
    </footer>
  )
}

const openDocument = (id) => {
  document.location.href = document.location.origin+"/document/"+id;
}

const getLastWords = (transcript, n) => {
  let tArr = transcript.split(" ")
  return tArr.slice(tArr.length - n).join(" ")
}

const highlightCommands = (transcript, commands) => {
  return transcript  

  /*let regexes = commands.map(c => c.highlight)
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
        result.push(<span className="command">{" "+replacements[i]+" "}</span>);
    }
    result.push(highlightCommands(split[split.length - 1], regexes.slice(1)));
    return result;*/
}

export default DocumentDictaphone

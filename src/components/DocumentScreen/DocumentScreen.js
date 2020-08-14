import React from 'react'
import json from '../../data/test2.json'
import DocumentRender from '../Document/Document'
import 'react-split-pane'
import SplitPane from 'react-split-pane'
import { Button } from '@material-ui/core'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sizing } from '@material-ui/system';
import './DocumentScreen.css'
import SpeechRecognition, { useSpeechRecognition,  } from 'react-speech-recognition'
import DocumentDictaphone from '../../speech/DocumentDictaphone'
import { makeDocument, updateParagraph, addParagraph, removeParagraph, appendToParagraph, changeTitle, removeWord, replaceWord } from '../../model/Document'


class DocumentScreen extends React.Component {
  constructor(props) {
    super(props)
    let url = window.location.href;
    let doc = JSON.parse(localStorage.getItem("doc"+url.slice(url.lastIndexOf('/') + 1)));

    this.state = {
      document: makeDocument(doc.paragraphs, doc.title, doc.id),
      transcript: "",
      cursorParagraph: 0
    }
  }

  transcriptUpdater = (t) => {
    console.log(this.state.document)
    this.setState({
      document: appendToParagraph(this.state.document, replacePunctuation(t), this.state.cursorParagraph)
    })
    console.log(appendToParagraph(this.state.document, replacePunctuation(t), this.state.cursorParagraph))
  }
  
  changeParagraphCursor = (c) => {
    console.log("p"+c)
    this.setState({
      cursorParagraph: c
    })
  }

  paragraphChange = (i, p) => {
    // Something about this code is off, updateParagraph has i and p swapped in its function definition in Document
    console.log("Paragraph changing");
    this.setState({
      document: updateParagraph(this.state.document, i, p)
    })
  }

  addParagraph = () => {
    this.setState({
      document: addParagraph(this.state.document)
    })
  }
  
  removeParagraph = (i) => {
    console.log("remove p" + i )
    this.setState({
      document: removeParagraph(this.state.document, i)
    })
  }

  changeTitle = (title) => {
    console.log("Change title to: " + title)
    this.setState({
      document: changeTitle(this.state.document, capitalizeWords(title))
    })
  }

  removeWord = (paragraph, word) => {
    console.log("Remove [" + word + "] from paragraph " + paragraph)
    this.setState({
      document: removeWord(this.state.document, paragraph - 1, word)
    })
  }

  replaceWord = (paragraph, oldWord, newWord) => {
    console.log("Replace [" + oldWord + "]  with [" + newWord + "] in paragraph " + paragraph)
    this.setState({
      document: replaceWord(this.state.document, paragraph - 1, oldWord, newWord)
    })
  }

  actionHandler = (a) => {
    if(a.action === "SAVE") {
      this.saveDocument()
    }
    else if(a.action === "REMOVE_PARAGRAPH") {
      this.removeParagraph(a.payload.paragraph)
    }
    else if(a.action === "ADD_PARAGRAPH") {
      this.addParagraph()
    }
    else if (a.action === "CHANGE_TITLE") {
      this.changeTitle(a.payload.newTitle)
    } 
    else if (a.action === "REMOVE_WORD") {
      this.removeWord(a.payload.paragraph, a.payload.word)
    }
    else if (a.action === "REPLACE_WORD") {
      this.replaceWord(a.payload.paragraph, a.payload.oldWord, a.payload.newWord)
    }
    else if (a.action === "MOVE_CURSOR_PARAGRAPH") {
      this.changeParagraphCursor(a.payload.paragraph)
    }
  }

  saveDocument = () => {
    localStorage.setItem("doc"+this.state.document.id, JSON.stringify(this.state.document));
  }

  render() {
    return (
      <div className="document-view">
        <nav>
          <a href="/home">
            &lt; Back
          </a>
          <a style={{cursor: "pointer"}} onClick={this.saveDocument()}>
            Save
          </a>
        </nav>
        <div className="document-pane">
          <DocumentRender
            document={this.state.document}
            handleChange={this.paragraphChange}
            addParagraph={this.addParagraph}
            removeParagraph={this.removeParagraph}
          />
        </div>
        <DocumentDictaphone transcriptUpdater={this.transcriptUpdater} actionHandler={this.actionHandler}/>
      </div>
    )
  }
}

function replacePunctuation (unedited) {
  unedited = unedited.replace(" comma", ",") 
  unedited = unedited.replace(" period", ".")
  unedited = unedited.replace("quotation", "\"")
  unedited = unedited.replace(" exclamation", "!")
  return unedited
}

function capitalizeWords(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


export default DocumentScreen;

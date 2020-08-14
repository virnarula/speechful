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
import { makeDocument, updateParagraph, addParagraph, removeParagraph, appendToParagraph } from '../../model/Document'


class DocumentScreen extends React.Component {
  constructor(props) {
    super(props)
    let url = window.location.href;
    let doc = JSON.parse(localStorage.getItem("doc"+url.slice(url.lastIndexOf('/') + 1)));

    this.state = {
      document: makeDocument(doc.paragraphs, doc.title, doc.id),
      transcript: ""
    }
  }

  transcriptUpdater = (t) => {
    this.setState({
      document: appendToParagraph(this.state.document, replacePunctuation(t), 0)
    })
    console.log(appendToParagraph(this.state.document, replacePunctuation(t), 0))
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
  return unedited
}

export default DocumentScreen;

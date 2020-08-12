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
import Dictaphone from '../../speech/Dictaphone'
import { makeDocument, updateParagraph, addParagraph, removeParagraph } from '../../model/Document'


class DocumentScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      document: makeDocument(json.paragraphs, json.title),
      transcript: ""
    }
  }

  transcriptChange = (t) => {
    this.setState({
      transcript: t
    })
  }

  paragraphChange = (i, p) => {
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

  render() {
    return (
      <div className="document-view">
        <nav>
          <a href="/home">
            &lt; Back
          </a>
          <a onClick={() => console.log("save")}>
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
        <footer>
          <div className="circle">
            <FontAwesomeIcon icon={faMicrophone} /> 
          </div>
          blah blah blah <span className="command">&nbsp;command!</span>
        </footer>
      </div>
    )
  }
}

export default DocumentScreen;

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
import { makeDocument, updateParagraph, addParagraph, removeParagraph } from '../../model/Document'

class DocumentScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      document: makeDocument(json.paragraphs, json.title)
    }
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
      <SplitPane split="vertical" defaultSize={250}>
        <div class="tool-pane">
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            href="/home"
            height="100%">
            Go home
          </Button>

          <h1 class="document-title"> {this.state.document.title}</h1>

          <h1 class="document-title">Currently Viewing Full Document</h1>

          <div class="circle">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("click");
            }}
            fullWidth={true}>
            Save file
          </Button>
        </div>
        <div class="document-pane">
          <DocumentRender
            document={this.state.document}
            handleChange={this.paragraphChange}
            addParagraph={this.addParagraph}
            removeParagraph={this.removeParagraph}
          />
        </div>
      </SplitPane>
    )
  }
}

export default DocumentScreen;

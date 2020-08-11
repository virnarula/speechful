import React from 'react'
import json from '../../data/test2.json'
import DocumentRender from '../Document/Document'
import { makeDocument, updateParagraph } from '../../model/Document'
import 'react-split-pane'
import SplitPane from 'react-split-pane'
import { Button } from '@material-ui/core'
import './DocumentScreen.css'

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

  render() {
    return (
      <SplitPane split="vertical" defaultSize={250}>
        <div class="tool-pane">
          <Button
            variant="contained"
            color="primary"
            href="/home">
            Go home
          </Button>

          <h1 class="document-title"> {this.state.document.title}</h1>

          <h1 class="document-title">Currently Viewing Full Document</h1>

          <div class="circle">
            <h1>Mic</h1>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("click");
            }}>
            Save file
          </Button>
        </div>
        <div class="document-pane">
          <DocumentRender
            document={this.state.document}
            handleChange={this.paragraphChange}
          />
        </div>
      </SplitPane>
    )
  }
}

export default DocumentScreen;

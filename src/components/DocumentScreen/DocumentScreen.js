import React from 'react'
import json from '../../data/test2.json'
import DocumentRender from '../Document/Document'
import { makeDocument, updateParagraph } from '../../model/Document'

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
      <DocumentRender
        document={this.state.document}
        handleChange={this.paragraphChange}
      />
    )
  }  
}

export default DocumentScreen;

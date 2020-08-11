import React from 'react'
import json from '../../data/test2.json'
import DocumentRender from '../Document/Document'
import Document from '../../model/Document'

class DocumentScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      document: Object.assign(new Document, json)
    }
  }

  handleDocumentChange = (dispatchChange) => {
    this.setState({
      document: this.state.document.updateDocument(dispatchChange)
    })
  }

  render() {
    return (
      <DocumentRender
        document={this.state.document}
        documentWordChange={this.handleDocumentChange}
      />
    )
  }  
}

export default DocumentScreen;

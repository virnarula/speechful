import React from 'react'
import json from '../../data/test2.json'
import DocumentRender from '../Document/Document'
import Document from '../../model/Document'

class DocumentScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      document: new Document(json.paragraphs, json.title)
    }
  }
  
  paragraphChange = (i, p) => {
    this.setState({
      document: this.state.updateParagraph(i, p)
    })
  }

  render() {
    return (
      <DocumentRender
        document={this.state.document}
        paragraphChange={this.paragraphChange}
      />
      
    )
  }  
}

export default DocumentScreen;

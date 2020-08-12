import React from 'react'
import Paragraph from './Paragraph'

class Document extends React.Component {
  handleChange = (i, p) => {
    this.props.handleChange(i, p)
  }

  render() {
    return (
      <article styles={this.props.document}>
        <h1> {this.props.document.id} </h1>
        <header>
          <h1>{this.props.document.title}</h1>
        </header>
        <section>
        {
          this.props.document.paragraphs.map((p, i) => {
              return (
                <div key={p.key}>
                  <Paragraph index={i} paragraph={p} handleChange={this.handleChange}/>
                  <button onClick={() => this.props.removeParagraph(i)}>
                    Remove Paragraph
                  </button>
                </div>
              )
          })
        }
        </section>
        <button onClick={this.props.addParagraph}>
          Add Paragraph
        </button>
      </article>
    )
  }
}

export default Document

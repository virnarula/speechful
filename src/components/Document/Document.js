import React from 'react'
import Paragraph from './Paragraph'

class Document extends React.Component {
  handleChange = (i, p) => {
    this.props.handleChange(i, p)
  }

  render() {
    return (
      <article>
        <header>
          <h1 className="document-title">{this.props.document.title}</h1>
        </header>
        <section>
        {
          this.props.document.paragraphs.map((p, i) => {
              return (
                <div className="paragraph-container" key={p.key}>
                  <div className="side-container">
                    <span>{i+1}</span>
                    <button className="button-remove" onClick={() => this.props.removeParagraph(i)}>
                      X
                    </button>
                  </div>
                  <Paragraph index={i} paragraph={p} handleChange={this.handleChange}/>
                </div>
              )
          })
        }
        </section>
        <button className="button-add" onClick={this.props.addParagraph}>
          + Add Paragraph
        </button>
      </article>
    )
  }
}

export default Document

import React from 'react'
import Paragraph from './Paragraph'

class Document extends React.Component {
  render() {
    return (
      <article styles={this.props.document.styles}>
        <h1> {this.props.document.id} </h1>
        <header>
          <h1>{this.props.document.title}</h1>
        </header>
        <section>
        {
          this.props.document.paragraphs.map((p, i) => {
              return <Paragraph index={i} paragraph={p} />
          })
        }
        </section>
      </article>
    )
  }
}

export default Document

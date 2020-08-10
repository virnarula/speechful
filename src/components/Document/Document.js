import React from 'react'
import Paragraph from './Paragraph'

class Document extends React.Component {
  render() {
    return (
      <article styles={this.props.document.styles}>
        <header>
          {this.props.document.title}
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

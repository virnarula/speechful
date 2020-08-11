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
              return <Paragraph key={i} index={i} paragraph={p} handleChange={this.handleChange}/>
          })
        }
        </section>
      </article>
    )
  }
}

export default Document

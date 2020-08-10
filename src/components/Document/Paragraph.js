import React from 'react'
import Sentence from './Sentence'

class Paragraph extends React.Component {
  render() {
    return (
      <div style={this.props.paragraph.styles}>
        p{this.props.index}
        <p>
        {
          this.props.paragraph.sentences.map((s, i) => {
            return <Sentence index={i} sentence={s}/>
          })
        }
        </p>
      </div>
    )
  }
}

export default Paragraph

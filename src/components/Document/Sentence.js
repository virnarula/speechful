import React from 'react'
import Word from './Word'

class Sentence extends React.Component {
  render() {
    return (
      <span styles={this.props.sentence.styles}>
      {
        this.props.sentence.words.map((w, i) => {
          return <Word index={i} word={w}/>
        })
      }.
      </span>
    )
  }
}

export default Sentence

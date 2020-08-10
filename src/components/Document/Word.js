import React from 'react'

class Word extends React.Component {
  render() {
    return (
      <span styles={this.props.word.styles}>
      {" "}{this.props.word.text}
      </span>
    )
  }
}

export default Word

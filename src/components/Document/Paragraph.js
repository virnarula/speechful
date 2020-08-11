import React from 'react'

class Paragraph extends React.Component {
  changeState = (e) => {
    console.log(e.currentTarget.textContent)
    this.props.handleChange(this.props.index, e.currentTarget.textContent)
  }

  // contentEditable is weird, esp in react, but there's not really
  // a better way to do this
  render() {
    return (
      <div>
        paragraph {this.props.index}
        <p contentEditable onInput={this.changeState} style={this.props.paragraph.styles}>
          {this.props.paragraph.text}
        </p>
      </div>
    )
  }
}

export default Paragraph

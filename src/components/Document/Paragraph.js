import React from 'react'

class Paragraph extends React.Component {
  render() {
    return (
      <div>
        paragraph {this.props.index}
        <p contenteditable="true" style={this.props.paragraph.styles}>
        {this.props.paragraph.text}
        </p>
      </div>
    )
  }
}

export default Paragraph

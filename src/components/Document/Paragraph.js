import React from 'react'

class Paragraph extends React.Component {
  changeState = (e) => {
    this.props.handleChange(this.props.index, e.currentTarget.textContent)
  }

  applyStyles = () => {
    let computedTags = []
    // yes this is vulnerable to xss, but its a hackathon project
    for (let i = 0; i < this.props.paragraph.styles.length; i++) {
      let start = {
        tag: "<span style=\""+this.props.paragraph.styles[i].style+"\">",
        i: this.props.paragraph.styles[i].range[0]
      }
      let end = {
        tag: "</span>",
        i: this.props.paragraph.styles[i].range[1]
      }

      computedTags.push(start)
      computedTags.push(end)
    }
    computedTags.sort((e1, e2) => {
      if(e1.i < e2.i) {
        return -1
      }
      else if (e1.i > e2.i) {
        return 1
      }
      else return 0
    })

    let computedText = ""
    let prevIndex = 0
    for (let i = 0; i < computedTags.length; i++) {
      computedText += this.props.paragraph.text.substring(prevIndex, computedTags[i].i) + computedTags[i].tag
      prevIndex = computedTags[i].i
    }
    computedText += this.props.paragraph.text.substring(prevIndex, this.props.paragraph.text.length)
    return computedText
  }

  // contentEditable is weird, esp in react, but i don't think there's
  // a better way to do this other than set html unsafely
  render() {
    return (
      <div>
        <p className="paragraph-editor" contentEditable onBlur={this.changeState} /*dangerouslySetInnerHTML={{__html:this.applyStyles()}}*/>
        {this.props.paragraph.text}
        </p>
      </div>
    )
  }
}

export default Paragraph

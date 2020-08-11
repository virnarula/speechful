import Paragraph from './Paragraph'

class Document {
    constructor(paragraphs, title, id, styles = {}) {
        this.paragraphs = paragraphs;
        this.title = title;
        this.styles = styles;
        this.id = id


  // change dispatch format, should probably change to typescript but oops
  // changeDispatch = {
  //   changeType: "document" | "paragraph" | "sentence" | "word"
  //   change: {
  //     type values
  //   }
  //   location: {
  //     paragraph: number
  //     sentence: number
  //     word: number
  //   }
  // }
  updateDocument(dispatchChange) {
    // Check for error in change
    if(!this.isValidDispatchChange(dispatchChange)[0]) {
      console.log(this.isValidDispatchChange(dispatchChange))
    }


  }

  isValidDispatchChange(d) {
    if(d.changeType === "document") {
      if (("paragraphs" in d.change && "styles" in d.change) && "title" in d.change) {
        return [true]
      }
      return [false, "Invalid object"]
    }
    else if(d.changeType === "paragraph") {
      if ("paragraph" in d.location) {
        if ("sentences" in d.change && "styles" in d.change) {
          return [true]
        }
        return [false, "Invalid object"]
      }
      else {
        return [false, "Paragraph location not specified"]
      }
    }
    else if (d.changeType === "sentence") {
      if ("paragraph" in d.location && "sentence" in d.location) {
        if ("words" in d.change && "styles" in d.change.key) {
          return [true]
        }
        return [false, "Invalid object"]
      }
      else {
        return [false, "Sentence location not specified"]
      }
    }
    else if (d.changeType === "word") {
      if (("paragraph" in d.location && "sentence" in d.location) && "word" in d.location) {
        if ("text" in d.change && "styles" in d.change) {
          return [true]
        }
        return [false, "Invalid key"]
      }
      else {
        return [false, "Word location not specified"]
      }
    }
    return [false, "Invalid change type"]
  }
}

export default Document;

class Paragraph{
  constructor(text, styles? = {}) {
    this.text = text;
    this.styles = styles;
  }

  changeWord(word, i) {
    let words = this.text.split(" ")
    if (word === "") {
      words.splice(i, 1)
    }
    else {
      words[i] = word
    }
    this.text = words.join(" ")
  }
  
  changeSentence(sentence, i) {
    let sentences = this.text.split(".")
    if (sentence === "") {
      sentences.splice(i, 1)
    }
    else {
      sentences[i] = sentences
    }
    this.text = sentences.join(".")
  }
}

export default Paragraph;

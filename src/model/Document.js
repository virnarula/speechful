import Paragraph from './Paragraph'

class Document {
  constructor(paragraphs, title) {
    this.paragraphs = paragraphs.map(p => Object.assign(new Paragraph, p))
    this.title = title;
  }

  changeWordInParagraph(word, pi, wi) {
    this.paragraphs[pi].changeWord(word, wi)
  }
  
  changeSentenceInParagraph(sentence, pi, si) {
    this.paragraphs[pi].changeSentence(sentence, si)
  }
}

export default Document;

import Sentence from './Sentence'

class Paragraph{
    constructor(sentences, styles? = {}) {
        this.sentences = sentences;
        this.styles = styles;
    }
}

export default Paragraph;
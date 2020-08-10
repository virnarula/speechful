import Word from './Word'

class Sentence {
    constructor (words, styles? = {}) {
        this.words = words;
        this.styles = styles;
    }
}

export default Sentence;
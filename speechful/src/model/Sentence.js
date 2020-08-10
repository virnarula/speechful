import Word from './Word'

class Sentence {
    constructor (words, styles) {
        this.words = words;
        this.styles = styles;
    }

    constructor (words) {
        this.words = words;
        this.styles = {};
    }
}

export default Sentence;
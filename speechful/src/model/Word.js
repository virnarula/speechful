class Word {
    constructor(text, styles) {
        this.text = text;
        this.styles = styles;
    }

    constructor(text) {
        this.text = text;
        this.styles = {};
    }
}

export default Word;
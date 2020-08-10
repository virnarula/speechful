import Paragraph from './Paragraph'

class Document {
    constructor(paragraphs, styles, title) {
        this.paragraphs = paragraphs;
        this.styles = styles;
        this.title = title;
    }

    // constructor(paragraphs, title) {
    //     this.paragraphs = paragraphs;
    //     this.title = title;
    //     this.styles = {}
    // }
}

export default Document;
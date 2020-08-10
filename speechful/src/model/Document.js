import Paragraph from './Paragraph'

class Document {
    constructor(paragraphs, title, styles? = {}) {
        this.paragraphs = paragraphs;
        this.title = title;
        this.styles = styles;
    }
}

export default Document;
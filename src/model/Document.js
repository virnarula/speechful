import Paragraph from './Paragraph'

class Document {
    constructor(paragraphs, title, id, styles = {}) {
        this.paragraphs = paragraphs;
        this.title = title;
        this.styles = styles;
        this.id = id
    }
}

export default Document;
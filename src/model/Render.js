import React from 'react'
import {Word, Sentence, Document, Paragraph} from "./"

function renderDocument(document) {
    let toReturn;
    return (
        <div styles={document.styles}>
            {toReturn}
        </div>
    );
}

function renderParagraph(paragraph){
    let toReturn;

    return (
        <div styles={paragraph.styles}>
            {toReturn}
        </div>
    );
}

function renderSentence(sentence) {
    let toReturn;
    for(let i = 0; i < sentence.words.length; i++) {
        toReturn += renderWord(sentence.words[i]);
    }

    return (
        <div style={sentence.styles}>
            {toReturn}
        </div>
    );
}

function renderWord(word) {
    return (
    <p style={word.styles}>{word.text}</p>
    );
}
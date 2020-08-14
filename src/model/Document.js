import _ from 'lodash'  
import * as Paragraph from './Paragraph'
import { getDefaultNormalizer } from '@testing-library/react';
// These functions should never modify previous state, it should always return new state, ie they should be pure functions.
// function(oldState, params) -> returns newState
// use _.deepClone to ensure refs will change and we don't modify old state
function makeDocument(paragraphs, title, id) {
  let d = {}
  d.paragraphs = paragraphs.map(p => Paragraph.makeParagraph(p.text, p.styles))
  d.title = title;
  d.id = id;
  return d;
}

function appendToParagraph(d, string, pi) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[pi] = Paragraph.appendToParagraph(d.paragraphs[pi], string)
  newDoc.paragraphs[pi].text = sentenceCase(newDoc.paragraphs[pi].text)  
  newDoc.paragraphs[pi].text = newDoc.paragraphs[pi].text.charAt(0).toUpperCase() + newDoc.paragraphs[pi].text.slice(1)
  newDoc.paragraphs[pi].text = newDoc.paragraphs[pi].text.replace(" .", ".") 
  newDoc.paragraphs[pi].text = newDoc.paragraphs[pi].text.replace(" ,", ",") 
  newDoc.paragraphs[pi].text = newDoc.paragraphs[pi].text.replace(/\s+/g, " ") 
  return newDoc
}

function sentenceCase(input, lowercaseBefore) {
    input = ( input === undefined || input === null ) ? '' : input;
    if (lowercaseBefore) { input = input.toLowerCase(); }
    return input.toString().replace( /(^|\. *)([a-z])/g, function(match, separator, char) {
        return separator + char.toUpperCase();
    });
}

function changeWordInParagraph(d, word, pi, wi) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[pi] = Paragraph.changeWord(d.paragraphs[pi], word, wi)
  return newDoc
}

function changeSentenceInParagraph(d, sentence, pi, si) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[pi] = Paragraph.changeSentence(d.paragraphs[pi], sentence, si)
  return newDoc
}

function updateParagraph(d, i, p) {
  let newDoc = _.cloneDeep(d)
  console.log(newDoc);
  newDoc.paragraphs[i].text = p
  console.log(i);
  return newDoc
}

function addParagraph(d) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs.push(Paragraph.makeParagraph("", []))
  return newDoc
}

function removeParagraph(d, i) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs.splice(i, 1)
  return newDoc
}

function changeTitle(document, newTitle) {
  let newDoc = _.cloneDeep(document)
  newDoc.title = newTitle
  return newDoc
}

function removeWord(document, paragraph, word) {
  let newDoc = _.cloneDeep(document)
  let newParagraph = newDoc.paragraphs[paragraph].text.replace(word, '')
  newDoc.paragraphs[paragraph].text = newParagraph
  console.log(newParagraph)
  return newDoc
}

function replaceWord(document, paragraph, oldWord, newWord) {
  let newDoc = _.cloneDeep(document)
  let newParagraph = newDoc.paragraphs[paragraph].text.replace(oldWord, newWord)
  newDoc.paragraphs[paragraph].text = newParagraph
  console.log(newParagraph)
  return newDoc
}

export {
  makeDocument,
  appendToParagraph,
  changeWordInParagraph,
  changeSentenceInParagraph,
  updateParagraph,
  addParagraph,
  removeParagraph,
  changeTitle,
  removeWord,
  replaceWord
}

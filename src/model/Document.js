import _ from 'lodash'  
import * as Paragraph from './Paragraph'
// These functions should never modify previous state, it should always return new state, ie they should be pure functions.
// function(oldState, params) -> returns newState
// use _.deepClone to ensure refs will change and we don't modify old state
function makeDocument(paragraphs, title) {
  let d = {}
  d.paragraphs = paragraphs.map(p => Paragraph.makeParagraph(p.text, p.styles))
  d.title = title;
  return d;
}

function appendToParagraph(d, string, pi) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[pi] = Paragraph.appendToParagraph(d.paragraphs[pi], string)
  return newDoc
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

function updateParagraph(d, p, i) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[i] = p
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

export {
  makeDocument,
  appendToParagraph,
  changeWordInParagraph,
  changeSentenceInParagraph,
  updateParagraph,
  addParagraph,
  removeParagraph
}

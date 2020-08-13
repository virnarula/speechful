import _ from 'lodash'  
import { makeParagraph, changeWord, changeSentence } from './Paragraph'
// These functions should never modify previous state, it should always return new state, ie they should be pure functions.
// function(oldState, params) -> returns newState
// use _.deepClone to ensure refs will change and we don't modify old state
export function makeDocument(paragraphs, title, id) {
  let d = {}
  d.paragraphs = paragraphs.map(p => makeParagraph(p.text, p.styles))
  d.title = title;
  d.id = id;
  return d;
}

export function changeWordInParagraph(d, word, pi, wi) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[pi] = changeWord(d.paragraphs[pi], word, wi)
  return newDoc
}

export function changeSentenceInParagraph(d, sentence, pi, si) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs[pi] = changeSentence(d.paragraphs[pi], sentence, si)
  return newDoc
}

export function updateParagraph(d, i, p) {
  let newDoc = _.cloneDeep(d)
  console.log(newDoc);
  newDoc.paragraphs[i].text = p
  console.log(i);
  return newDoc
}

export function addParagraph(d) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs.push(makeParagraph("", []))
  return newDoc
}

export function removeParagraph(d, i) {
  let newDoc = _.cloneDeep(d)
  newDoc.paragraphs.splice(i, 1)
  return newDoc
}

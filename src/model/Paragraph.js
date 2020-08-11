import _ from 'lodash'

export function makeParagraph(text, styles? = {}) {
  let p = {}
  p.text = text;
  p.styles = styles;
  return p
}

export function changeWord(p, word, i) {
  let newPara = _.cloneDeep(p)
  let words = newPara.text.split(" ")
  if (word === "") {
    words.splice(i, 1)
  }
  else {
    words[i] = word
  }
  newPara.text = words.join(" ")
  return newPara
}
  
export function changeSentence(p, sentence, i) {
  let newPara = _.cloneDeep(p)
  let sentences = newPara.text.split(".")
  if (sentence === "") {
    sentences.splice(i, 1)
  }
  else {
    sentences[i] = sentences
  }
  newPara.text = sentences.join(".")
  return newPara
}

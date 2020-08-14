import _ from 'lodash'

function makeParagraph(text, styles) {
  let p = {}
  p.text = text;
  p.styles = styles;
  
  // This for internal use to make react renders consistent and more efficient
  p.key = Math.random();

  return p
}

function changeWord(p, word, i) {
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
  
function changeSentence(p, sentence, i) {
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

function appendToParagraph(p, string) {
  let newPara = _.cloneDeep(p)
  newPara.text += string
  return newPara
}

export {
  makeParagraph,
  changeWord,
  changeSentence,
  appendToParagraph
}

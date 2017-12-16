function highlightText(text, words, wholeWords, caseSensitive, cbRenderHighlighedWord) {
  let textOriginal = text;
  let textProcess = text;
  let wordsOriginal = words.split(' ').filter(w => !!w);
  let wordsProcess = [].concat(wordsOriginal);
  let output = '';

  if (!caseSensitive) {
    textProcess = textProcess.toLowerCase();
    wordsProcess = wordsProcess.map(word => word.toLowerCase());
  }

  for (var iChar = 0; iChar < textProcess.length; iChar++) {
    let wordFound = false;
    for (var iWord = 0; iWord < wordsProcess.length; iWord++) {
      let word = wordsProcess[iWord];
      if (textProcess.substr(iChar, word.length) === word) {
        wordFound = true;
        output += cbRenderHighlighedWord(wordsOriginal[iWord]);
        iChar += wordsOriginal[iWord].length - 1;
        break;
      }
    }
    if (!wordFound) output += textOriginal[iChar];
  }
}

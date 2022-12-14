import * as React from "react";

export interface IDynaHighlightTextProps {
  sourceText: string;
  highlightWords: string;
  caseSensitive?: boolean;
  onHighlightRender?: (word: string) => TPartialText;
}

export type TPartialText = JSX.Element | string;

export const DynaHighlightText = (props: IDynaHighlightTextProps): JSX.Element => {
  const {
    sourceText,
    highlightWords,
    caseSensitive = false,
    onHighlightRender = word => <u>{word}</u>,
  } = props;

  const highlightText = (): TPartialText[] => {
    const textOriginal: string = sourceText;
    let textProcess: string = sourceText;
    const wordsOriginal: string[] = highlightWords.split(' ').filter(w => !!w);
    let wordsProcess: string[] = wordsOriginal.concat();
    const output: TPartialText[] = [];
    let partialOutput: string = '';

    if (!caseSensitive) {
      textProcess = textProcess.toLowerCase();
      wordsProcess = wordsProcess.map(word => word.toLowerCase());
    }

    for (let iChar: number = 0; iChar < textProcess.length; iChar++) {
      let wordFound: boolean = false;
      for (let iWord: number = 0; iWord < wordsProcess.length; iWord++) {
        let word: string = wordsProcess[iWord];
        if (textProcess.substring(iChar, iChar + word.length) === word) {
          wordFound = true;
          if (partialOutput) {
            output.push(partialOutput);
            partialOutput = '';
          }
          let hWord: TPartialText = onHighlightRender(textOriginal.substring(iChar, iChar + word.length));
          if (typeof hWord !== 'string') hWord = React.cloneElement(hWord, {key: iChar + '-' + iWord});
          output.push(hWord);
          iChar += wordsOriginal[iWord].length - 1;
          break;
        }
      }
      if (!wordFound) partialOutput += textOriginal[iChar];
    }
    if (partialOutput) output.push(partialOutput);
    return output;
  }

  return <>{highlightText()}</>;
}

import * as React from "react";

export interface IDynaHighlightTextProps {
  sourceText: string;
  highlightWords: string;
  caseSensitive?: boolean;
  onHighlightRender?: (word: string, index: number) => TPartialText;
}

export type TPartialText = JSX.Element | string;

export class DynaHighlightText extends React.Component<IDynaHighlightTextProps> {
  static defaultProps: IDynaHighlightTextProps = {
    sourceText: '',
    highlightWords: '',
    caseSensitive: false,
    onHighlightRender: (word: string, index: number) => <span key={index} className="highlighted-text">{word}</span>,
  };

  private highlightText(text: string, words: string, caseSensitive: boolean, cbRenderHighlighedWord: (word: string, index: number) => TPartialText): TPartialText[] {
    let textOriginal: string = text;
    let textProcess: string = text;
    let wordsOriginal: string[] = words.split(' ').filter(w => !!w);
    let wordsProcess: string[] = [].concat(...wordsOriginal);
    let output: TPartialText[] = [];
    let partialOutput: string = '';

    if (!caseSensitive) {
      textProcess = textProcess.toLowerCase();
      wordsProcess = wordsProcess.map(word => word.toLowerCase());
    }

    for (let iChar: number = 0; iChar < textProcess.length; iChar++) {
      let wordFound: boolean = false;
      for (let iWord: number = 0; iWord < wordsProcess.length; iWord++) {
        let word: string = wordsProcess[iWord];
        if (textProcess.substr(iChar, word.length) === word) {
          wordFound = true;
          if (partialOutput) {
            output.push(partialOutput);
            partialOutput = '';
          }
          output.push(cbRenderHighlighedWord(textOriginal.substr(iChar, word.length), iWord));
          iChar += wordsOriginal[iWord].length - 1;
          break;
        }
      }
      if (!wordFound) partialOutput += textOriginal[iChar];
    }
    if (partialOutput) output.push(partialOutput);
    return output;
  }


  public _test_highlightText = this.highlightText;

  public render(): TPartialText[] {
    const {sourceText, highlightWords, caseSensitive, onHighlightRender} = this.props;
    return this.highlightText(sourceText, highlightWords, caseSensitive, onHighlightRender);
  }
}

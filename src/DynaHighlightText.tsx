import * as React from "react";

export interface IDynaHighlightTextProps {
  sourceText: string;
  highlightWords: string;
  caseSensitive?: boolean;
  onHighlightRender?: (word: string) => TPartialText;
}

export type TPartialText = JSX.Element | string;

export class DynaHighlightText extends React.Component<IDynaHighlightTextProps> {
  static defaultProps: IDynaHighlightTextProps = {
    sourceText: '',
    highlightWords: '',
    caseSensitive: false,
    onHighlightRender: (word: string) => <u>{word}</u>,
  };

  private highlightText(): TPartialText[] {
    const {sourceText, highlightWords, caseSensitive, onHighlightRender} = this.props;
    let textOriginal: string = sourceText;
    let textProcess: string = sourceText;
    let wordsOriginal: string[] = highlightWords.split(' ').filter(w => !!w);
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
          let hWord: TPartialText = onHighlightRender(textOriginal.substr(iChar, word.length));
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

  private wrapperStyle: React.CSSProperties = {
    whiteSpace: "pre-wrap",
  };

  public render(): JSX.Element {
    return (
      <span style={this.wrapperStyle}>{this.highlightText()}</span>
    );
  }
}

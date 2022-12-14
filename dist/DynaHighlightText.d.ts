export interface IDynaHighlightTextProps {
    sourceText: string;
    highlightWords: string;
    caseSensitive?: boolean;
    onHighlightRender?: (word: string) => TPartialText;
}
export declare type TPartialText = JSX.Element | string;
export declare const DynaHighlightText: (props: IDynaHighlightTextProps) => JSX.Element;

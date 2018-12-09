import * as React from "react";
export interface IDynaHighlightTextProps {
    sourceText: string;
    highlightWords: string;
    caseSensitive?: boolean;
    onHighlightRender?: (word: string) => TPartialText;
}
export declare type TPartialText = JSX.Element | string;
export declare class DynaHighlightText extends React.Component<IDynaHighlightTextProps> {
    static defaultProps: IDynaHighlightTextProps;
    private highlightText;
    private wrapperStyle;
    render(): JSX.Element;
}

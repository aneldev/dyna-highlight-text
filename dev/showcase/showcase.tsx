import * as React from 'react';
import {DynaHighlightText, IDynaHighlightTextProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

require('./showcase.less');

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'basic',
      faIconName: 'flask',
      title: 'highlight text',
      description: 'Hightlight the "Lorem Ipsum" words',
      center: true,
      wrapperStyle: {
        width: "50%",
      },
      component: (
        <DynaHighlightText
          sourceText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          highlightWords="lorem ipsum"
          caseSensitive={false}
          onHighlightRender={(word: string, index: number) => <span key={index} style={{fontWeight: 'bold'}}>{word}</span>}
        />
      ),
    },
  ]
}as IShowcase;

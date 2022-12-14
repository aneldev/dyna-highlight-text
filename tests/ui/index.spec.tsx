import * as React from "react";
import * as enzyme from "enzyme";

// @ts-ignore
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

import {DynaHighlightText} from '../../src';

describe('Home', () => {
  let wrapper;

  it('should highlight the word at front', () => {
    wrapper = enzyme.mount(
      <DynaHighlightText sourceText="Secret world" highlightWords="secret"/>,
      {}
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should highlight the word at the end', () => {
    wrapper = enzyme.mount(
      <DynaHighlightText sourceText="Secret world" highlightWords="world"/>,
      {}
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should highlight the word at the end', () => {
    wrapper = enzyme.mount(
      <DynaHighlightText sourceText="The secret world" highlightWords="Secret"/>,
      {}
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should highlight two words', () => {
    wrapper = enzyme.mount(
      <DynaHighlightText sourceText="The secret world" highlightWords="world Secret"/>,
      {}
    );
    expect(wrapper).toMatchSnapshot();
  });

});

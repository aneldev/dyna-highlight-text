import "jest";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

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

});

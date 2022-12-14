import {DynaHighlightText} from '../../src';
if (typeof jasmine !== 'undefined') jest.setTimeout(5000);

// Help: https://facebook.github.io/jest/docs/expect.html

describe('Simple unit test', () => {
  it('should import the component', () => {
    expect(DynaHighlightText).not.toBe(undefined);
  });
});

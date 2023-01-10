/* global Stack, countValues, expect */

describe('countValues(stack)', () => {

  it('returns the number of values in `stack`', () => {
    expect(countValues(new Stack())).to.equal(0);
    expect(countValues(new Stack(92, 13, 9))).to.equal(3);
    expect(countValues(new Stack(null, false, 0, NaN, ''))).to.equal(5);
  });

});

/* global Stack, getTop, expect */

describe('getTop(stack)', () => {

  context('when `stack` is empty', () => {

    it('returns undefined', () => {
      const stack = new Stack();
      expect(getTop(stack)).to.equal(undefined);
    });

  });

  context('when `stack` is not empty', () => {

    it('returns the top value of `stack`', () => {
      const stack = new Stack();
      stack.push(13);
      expect(getTop(stack)).to.equal(13);
      stack.push(9);
      expect(getTop(stack)).to.equal(9);
      stack.push('');
      expect(getTop(stack)).to.equal('');
      stack.push(null);
      expect(getTop(stack)).to.equal(null);
    });

    it('does not modify `stack`', () => {
      const stack = new Stack('head', 'shoulders', 'knees', 'toes');
      getTop(stack);
      expect(stack.print()).to.equal(
        'Stack { "head" <- "shoulders" <- "knees" <- "toes" }'
      );
    });

  });

});

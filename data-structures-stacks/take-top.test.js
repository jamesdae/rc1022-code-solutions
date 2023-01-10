/* global Stack, takeTop, expect */

describe('takeTop(stack)', () => {

  context('when `stack` is empty', () => {

    it('returns undefined', () => {
      const stack = new Stack();
      expect(takeTop(stack)).to.equal(undefined);
    });

  });

  context('when `stack` is not empty', () => {

    it('returns the top value of `stack`', () => {
      const stack = new Stack();
      stack.push(13);
      expect(takeTop(stack)).to.equal(13);
      stack.push(9);
      expect(takeTop(stack)).to.equal(9);
      stack.push('');
      expect(takeTop(stack)).to.equal('');
      stack.push(null);
      expect(takeTop(stack)).to.equal(null);
    });

    it('removes the top value of `stack`', () => {
      const stack = new Stack('head', 'shoulders', 'knees', 'toes');
      takeTop(stack);
      expect(stack.print()).to.equal(
        'Stack { "head" <- "shoulders" <- "knees" }'
      );
    });

  });

});

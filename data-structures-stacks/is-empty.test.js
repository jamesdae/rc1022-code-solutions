/* global Stack, isEmpty, expect */

describe('isEmpty(stack)', function () {

  context('when `stack` contains no values', () => {

    it('returns true', () => {
      const stack = new Stack();
      expect(isEmpty(stack)).to.equal(true);
    });

  });

  context('when `stack` contains one or more values', () => {

    it('returns false', () => {
      const stack = new Stack();
      stack.push(13);
      expect(isEmpty(stack)).to.equal(false);
      stack.push(9);
      expect(isEmpty(stack)).to.equal(false);
      stack.push('');
      expect(isEmpty(stack)).to.equal(false);
      stack.push(null);
      expect(isEmpty(stack)).to.equal(false);
    });

    it('does not modify `stack`', () => {
      const stack = new Stack('head', 'shoulders', 'knees', 'toes');
      isEmpty(stack);
      expect(stack.print()).to.equal(
        'Stack { "head" <- "shoulders" <- "knees" <- "toes" }'
      );
    });

  });

});

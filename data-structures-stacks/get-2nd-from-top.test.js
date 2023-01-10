/* global Stack, get2ndFromTop, expect */

describe('get2ndFromTop(stack)', () => {

  context('when `stack` is empty', () => {

    it('returns undefined', () => {
      const stack = new Stack();
      expect(get2ndFromTop(stack)).to.equal(undefined);
      expect(stack.print()).to.equal('Stack { <empty> }');
    });

  });

  context('when `stack` contains one value', () => {

    it('returns undefined', () => {
      expect(get2ndFromTop(new Stack(36))).to.equal(undefined);
      expect(get2ndFromTop(new Stack(null))).to.equal(undefined);
      expect(get2ndFromTop(new Stack('foo'))).to.equal(undefined);
    });

    it('restores `stack` to its original state', () => {

      const stack1 = new Stack(36);
      expect(get2ndFromTop(stack1)).to.equal(undefined);
      expect(stack1.print()).to.equal('Stack { 36 }');

      const stack2 = new Stack(null);
      expect(get2ndFromTop(stack2)).to.equal(undefined);
      expect(stack2.print()).to.equal('Stack { null }');

      const stack3 = new Stack('foo');
      expect(get2ndFromTop(stack2)).to.equal(undefined);
      expect(stack3.print()).to.equal('Stack { "foo" }');

    });

  });

  context('when `stack` contains more than one value', () => {

    it('returns the 2nd from the top value of `stack`', () => {

      const stack1 = new Stack(92, 13, 9);
      expect(get2ndFromTop(stack1)).to.equal(13);

      const stack2 = new Stack(null, false, 0);
      expect(get2ndFromTop(stack2)).to.equal(false);

      const stack3 = new Stack('foo', 'bar', 'baz');
      expect(get2ndFromTop(stack3)).to.equal('bar');

    });

    it('restores `stack` to its original state', () => {

      const stack1 = new Stack(92, 13, 9);
      get2ndFromTop(stack1);
      expect(stack1.print()).to.equal('Stack { 92 <- 13 <- 9 }');

      const stack2 = new Stack(null, false, 0);
      get2ndFromTop(stack2);
      expect(stack2.print()).to.equal('Stack { null <- false <- 0 }');

      const stack3 = new Stack('foo', 'bar', 'baz');
      get2ndFromTop(stack3);
      expect(stack3.print()).to.equal('Stack { "foo" <- "bar" <- "baz" }');

    });

  });

});

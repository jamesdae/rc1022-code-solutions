/* global Stack, expect */

describe('class Stack {}', () => {

  describe('new Stack()', () => {

    it('returns an object with push(), pop(), and peek() methods', () => {
      const stack = new Stack();
      expect(stack).to.respondTo('push');
      expect(stack).to.respondTo('pop');
      expect(stack).to.respondTo('peek');
    });

  });

  describe('stack.push(value)', () => {

    it('requires a `value` argument', () => {
      const stack = new Stack();
      expect(() => {
        stack.push();
      }).to.throw(TypeError, 'stack.push() requires a value argument');
    });

    it('rejects an undefined `value` argument', () => {
      const stack = new Stack();
      expect(() => {
        stack.push(undefined);
      }).to.throw(TypeError, 'stack.push(value) received undefined');
    });

    it('adds `value` to the top of `stack`', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(true);
      stack.push(null);
      stack.push({});
      stack.push([]);
      stack.push('data');
    });

  });

  describe('stack.peek()', () => {

    context('when `stack` is empty', () => {

      it('returns undefined', () => {
        const stack = new Stack();
        const value = stack.peek();
        expect(value).to.equal(undefined);
      });

    });

    context('when `stack` is not empty', () => {

      it('returns the last-in value, but doesn\'t remove it', () => {
        const stack = new Stack(1, 2, 3);
        expect(stack.peek()).to.equal(3);
        expect(stack.peek()).to.equal(3);
        expect(stack.peek()).to.equal(3);
      });

    });

  });

  describe('stack.pop()', () => {

    context('when `stack` is empty', () => {

      it('returns undefined', () => {
        const stack = new Stack();
        const value = stack.pop();
        expect(value).to.equal(undefined);
      });

    });

    context('when `stack` is not empty', () => {

      it('removes and returns the last-in value', () => {
        const stack = new Stack(1, 2, 3);
        expect(stack.pop()).to.equal(3);
        expect(stack.pop()).to.equal(2);
        expect(stack.pop()).to.equal(1);
        expect(stack.pop()).to.equal(undefined);
      });

    });

  });

  describe('stack.print()', () => {

    context('when `stack` is empty', () => {

      it('shows "Stack { <empty> }"', () => {
        const stack = new Stack();
        expect(stack.print()).to.equal('Stack { <empty> }');
      });

    });

    context('when `stack` is not empty', () => {

      it('shows "Stack { value 1 <- value 2 <- ... <- value N }"', () => {
        const stack = new Stack('a', 'b', 'c');
        expect(stack.print()).to.equal('Stack { "a" <- "b" <- "c" }');
      });

    });

  });

});

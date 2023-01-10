/* global Queue, expect */

describe('class Queue {}', () => {

  describe('new Queue()', () => {

    it('returns an object with enqueue() and dequeue() methods', () => {
      const queue = new Queue();
      expect(queue).to.respondTo('enqueue');
      expect(queue).to.respondTo('dequeue');
    });

  });

  describe('queue.enqueue(value)', () => {

    it('requires a `value` argument', () => {
      const queue = new Queue();
      expect(() => {
        queue.enqueue();
      }).to.throw(TypeError, 'queue.enqueue() requires a value argument');
    });

    it('rejects an undefined `value` argument', () => {
      const queue = new Queue();
      expect(() => {
        queue.enqueue(undefined);
      }).to.throw(TypeError, 'queue.enqueue(value) received undefined');
    });

    it('adds `value` to the end of `queue`', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(true);
      queue.enqueue(null);
      queue.enqueue({});
      queue.enqueue([]);
      queue.enqueue('data');
    });

  });

  describe('queue.peek()', () => {

    context('when `queue` is empty', () => {

      it('returns undefined', () => {
        const queue = new Queue();
        const value = queue.peek();
        expect(value).to.equal(undefined);
      });

    });

    context('when `queue` is not empty', () => {

      it('returns the first-in value, but doesn\'t remove it', () => {
        const queue = new Queue(1, 2, 3);
        expect(queue.peek()).to.equal(1);
        expect(queue.peek()).to.equal(1);
        expect(queue.peek()).to.equal(1);
      });

    });

  });

  describe('queue.dequeue()', () => {

    context('when `queue` is empty', () => {

      it('returns undefined', () => {
        const queue = new Queue();
        const value = queue.dequeue();
        expect(value).to.equal(undefined);
      });

    });

    context('when `queue` is not empty', () => {

      it('removes and returns the first-in value', () => {
        const queue = new Queue(1, 2, 3);
        expect(queue.dequeue()).to.equal(1);
        expect(queue.dequeue()).to.equal(2);
        expect(queue.dequeue()).to.equal(3);
        expect(queue.dequeue()).to.equal(undefined);
      });

    });

  });

  describe('queue.print()', () => {

    context('when `queue` is empty', () => {

      it('shows "Queue { <empty> }"', () => {
        const queue = new Queue();
        expect(queue.print()).to.equal('Queue { <empty> }');
      });

    });

    context('when `queue` is not empty', () => {

      it('shows "Queue { value 1 <- value 2 <- ... <- value N }"', () => {
        const queue = new Queue('a', 'b', 'c');
        expect(queue.print()).to.equal('Queue { "a" <- "b" <- "c" }');
      });

    });

  });

});

/* global Queue, takeValueAtIndex, expect */

describe('takeValueAtIndex(queue, index)', () => {

  context('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeValueAtIndex(queue, 0)).to.equal(undefined);
      expect(takeValueAtIndex(queue, 31)).to.equal(undefined);
    });

  });

  context('when `queue` is not empty', () => {

    it('removes and returns the front value in `queue` after cycling `index` values to the back', () => {
      const queue1 = new Queue(84);
      expect(takeValueAtIndex(queue1, 6)).to.equal(84);
      expect(queue1.print()).to.equal('Queue { <empty> }');
      const queue2 = new Queue(37, 45, 67, 0, 71, 3);
      expect(takeValueAtIndex(queue2, 3)).to.equal(0);
      expect(queue2.print()).to.equal(
        'Queue { 71 <- 3 <- 37 <- 45 <- 67 }'
      );
      const queue3 = new Queue('foo', 'bar', 'baz', 'qux');
      expect(takeValueAtIndex(queue3, 3)).to.equal('qux');
      expect(queue3.print()).to.equal(
        'Queue { "foo" <- "bar" <- "baz" }'
      );
    });

  });

});

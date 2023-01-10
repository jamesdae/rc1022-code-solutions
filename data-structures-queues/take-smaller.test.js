/* global Queue, takeSmaller, expect */

describe('takeSmaller(queue)', () => {

  context('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeSmaller(queue)).to.equal(undefined);
    });

  });

  context('when `queue` contains one value', () => {

    it('returns the value', () => {
      const queue1 = new Queue(89);
      expect(takeSmaller(queue1)).to.equal(89);
      const queue2 = new Queue(0);
      expect(takeSmaller(queue2)).to.equal(0);
    });

    it('removes the value from `queue`', () => {
      const queue1 = new Queue(12);
      takeSmaller(queue1);
      expect(queue1.peek()).to.equal(undefined);
      const queue2 = new Queue(0);
      takeSmaller(queue2);
      expect(queue2.peek()).to.equal(undefined);
    });

  });

  context('when `queue` contains at least two values', () => {

    context('and the first value is smaller than the second', () => {

      it('returns the first value', () => {
        const queue1 = new Queue(48, 67);
        expect(takeSmaller(queue1)).to.equal(48);
        const queue2 = new Queue(-89, 0, 35);
        expect(takeSmaller(queue2)).to.equal(-89);
      });

      it('removes the first value from `queue` and moves the second value to the back of `queue`', () => {
        const queue1 = new Queue(41, 189);
        takeSmaller(queue1);
        expect(queue1.print()).to.equal('Queue { 189 }');
        const queue2 = new Queue(0, 1, 4, 18);
        takeSmaller(queue2);
        expect(queue2.print()).to.equal(
          'Queue { 4 <- 18 <- 1 }'
        );
      });

    });

    context('and the first value is equal to the second', () => {

      it('returns the value', () => {
        const queue1 = new Queue(8, 8);
        expect(takeSmaller(queue1)).to.equal(8);
        const queue2 = new Queue(0, 0, 0);
        expect(takeSmaller(queue2)).to.equal(0);
      });

      it('removes one value from `queue` and moves one value to the back of `queue`', () => {
        const queue1 = new Queue(9, 9);
        takeSmaller(queue1);
        expect(queue1.print()).to.equal('Queue { 9 }');
        const queue2 = new Queue(73, 73, 3, 9);
        takeSmaller(queue2);
        expect(queue2.print()).to.equal(
          'Queue { 3 <- 9 <- 73 }'
        );
      });

    });

    context('and the first value is larger than the second', () => {

      it('returns the second value', () => {
        const queue1 = new Queue(52, 12);
        expect(takeSmaller(queue1)).to.equal(12);
        const queue2 = new Queue(23, 0, 9);
        expect(takeSmaller(queue2)).to.equal(0);
      });

      it('moves the first value to the back of `queue` and removes the second value from `queue`', () => {
        const queue1 = new Queue(19, -2);
        takeSmaller(queue1);
        expect(queue1.print()).to.equal('Queue { 19 }');
        const queue2 = new Queue(5, 4, 3, 2);
        takeSmaller(queue2);
        expect(queue2.print()).to.equal('Queue { 3 <- 2 <- 5 }');
      });

    });

  });

});

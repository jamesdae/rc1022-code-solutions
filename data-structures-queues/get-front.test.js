/* global Queue, getFront, expect */

describe('getFront(queue)', () => {

  context('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(getFront(queue)).to.equal(undefined);
    });

  });

  context('when `queue` is not empty', () => {

    it('returns the front value of `queue`', () => {
      const queue1 = new Queue(13);
      expect(getFront(queue1)).to.equal(13);
      const queue2 = new Queue(13, 9);
      expect(getFront(queue2)).to.equal(13);
      const queue3 = new Queue(null, '');
      expect(getFront(queue3)).to.equal(null);
    });

    it('does not modify `queue`', () => {
      const queue = new Queue('head', 'shoulders', 'arms', 'hands');
      getFront(queue);
      expect(queue.print()).to.equal(
        'Queue { "head" <- "shoulders" <- "arms" <- "hands" }'
      );
    });

  });

});

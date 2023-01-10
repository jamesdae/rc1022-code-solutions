/* global Queue, takeFront, expect */

describe('takeFront(queue)', () => {

  context('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeFront(queue)).to.equal(undefined);
    });

  });

  context('when `queue` is not empty', () => {

    it('returns the front value of `queue`', () => {
      const queue1 = new Queue(13);
      expect(takeFront(queue1)).to.equal(13);
      const queue2 = new Queue(13, 9);
      expect(takeFront(queue2)).to.equal(13);
      const queue3 = new Queue(null, '');
      expect(takeFront(queue3)).to.equal(null);
    });

    it('removes the front value from `queue`', () => {
      const queue = new Queue('head', 'shoulders', 'arms', 'hands');
      takeFront(queue);
      expect(queue.print()).to.equal(
        'Queue { "shoulders" <- "arms" <- "hands" }'
      );
    });

  });

});

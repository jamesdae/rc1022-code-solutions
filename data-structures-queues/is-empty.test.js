/* global Queue, isEmpty, expect */

describe('isEmpty(queue)', () => {

  context('when `queue` is empty', () => {

    it('returns true', () => {
      const queue = new Queue();
      expect(isEmpty(queue)).to.equal(true);
    });

  });

  context('when `queue` is not empty', () => {

    it('returns false', () => {
      const queue1 = new Queue(13);
      expect(isEmpty(queue1)).to.equal(false);
      const queue2 = new Queue(9);
      expect(isEmpty(queue2)).to.equal(false);
      const queue3 = new Queue('');
      expect(isEmpty(queue3)).to.equal(false);
      const queue4 = new Queue(null);
      expect(isEmpty(queue4)).to.equal(false);
    });

    it('does not modify `queue`', () => {
      const queue = new Queue('head', 'shoulders', 'arms', 'hands');
      isEmpty(queue);
      expect(queue.print()).to.equal(
        'Queue { "head" <- "shoulders" <- "arms" <- "hands" }'
      );
    });

  });

});

/* global Queue, addToBack, expect */

describe('addToBack(queue, value)', () => {

  it('adds `value` to the back of `queue`', () => {
    const queue = new Queue();
    addToBack(queue, 81);
    expect(queue.peek()).to.equal(81);
    addToBack(queue, 19);
    expect(queue.peek()).to.equal(81);
    addToBack(queue, 27);
    expect(queue.peek()).to.equal(81);
    expect(queue.print()).to.equal(
      'Queue { 81 <- 19 <- 27 }'
    );
  });

});

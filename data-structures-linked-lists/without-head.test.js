/* global LinkedList, withoutHead, expect */

describe('withoutHead(list)', () => {

  it('returns a list consisting of all nodes in `list` after its head', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    const decapitated = withoutHead(list);
    expect(decapitated.print()).to.equal(
      'LinkedList { "neck" <- "back" <- "tail" }'
    );
  });

  it('does not modify `list`', () => {
    const list = new LinkedList(56, 23, 8);
    expect(list.print()).to.equal(
      'LinkedList { 56 <- 23 <- 8 }'
    );
    withoutHead(list);
    expect(list.print()).to.equal(
      'LinkedList { 56 <- 23 <- 8 }'
    );
  });

});

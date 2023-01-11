/* global LinkedList, getHead, expect */

describe('getHead(list)', () => {

  it('returns the head value of `list`', () => {
    const list1 = new LinkedList(13, 9);
    expect(getHead(list1)).to.equal(13);
    const list2 = new LinkedList(null, '');
    expect(getHead(list2)).to.equal(null);
  });

  it('does not modify `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getHead(list);
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});

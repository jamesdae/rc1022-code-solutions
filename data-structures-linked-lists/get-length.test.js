/* global LinkedList, getLength, expect */

describe('getLength(list)', () => {

  it('returns the number of nodes in `list`', () => {
    const list1 = new LinkedList(82);
    expect(getLength(list1)).to.equal(1);
    const list2 = new LinkedList(null, '', false, 0, NaN);
    expect(getLength(list2)).to.equal(5);
  });

  it('does not modify `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getLength(list);
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});

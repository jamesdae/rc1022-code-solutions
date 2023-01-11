/* global LinkedList, getTail, expect */

describe('getTail(list)', () => {

  it('returns the last value of `list`', () => {

    const list1 = new LinkedList(13);
    expect(getTail(list1)).to.equal(13);
    list1.next = new LinkedList(9);
    expect(getTail(list1)).to.equal(9);

    const list2 = new LinkedList(null, '', false);
    expect(getTail(list2)).to.equal(false);

  });

  it('does not modify `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getTail(list);
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});

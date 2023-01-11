/* global LinkedList, insertNext, expect */

describe('insertNext(list, value)', () => {

  it('inserts `value` after the head value of `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    insertNext(list, 'strobe light');
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "strobe light" <- "neck" <- "back" <- "tail" }'
    );
  });

});

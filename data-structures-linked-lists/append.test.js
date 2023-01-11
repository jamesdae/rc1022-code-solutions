/* global LinkedList, append, expect */

describe('append(list, value)', () => {

  it('appends a node containing `value` to the end of `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    append(list, 'dirt');
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" <- "dirt" }'
    );
  });

});

/* global LinkedList, prepend, expect */

describe('prepend(list, value)', () => {

  it('returns a new list consisting of `value`, followed by `list`', () => {
    const input = new LinkedList('head', 'neck', 'back', 'tail');
    const output = prepend(input, 'hat');
    expect(input).not.to.equal(output);
    expect(output.print()).to.equal(
      'LinkedList { "hat" <- "head" <- "neck" <- "back" <- "tail" }'
    );
  });

  it('does not modify input `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    prepend(list, 'hair piece');
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});

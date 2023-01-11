/* global LinkedList, updateHead, expect */

describe('updateHead(list, value)', () => {

  it('sets the head value of `list` to `value`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    expect(list.print()).to.equal(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
    const value = 'https://images.halloweencostumes.com/products/4090/1-1/venus-fly-trap-costume.jpg';
    updateHead(list, value);
    expect(list.print()).to.equal(
      `LinkedList { "${value}" <- "neck" <- "back" <- "tail" }`
    );
  });

});

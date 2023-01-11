/* global LinkedList, swapFront, expect */

describe('swapFront(list)', () => {

  context('when `list` contains one value', () => {

    it('returns `list`', () => {
      const list = new LinkedList('Bruce');
      const newList = swapFront(list);
      expect(newList).to.equal(list);
    });

    it('does not modify `list`', () => {
      const list = new LinkedList('All Mighty Then');
      swapFront(list);
      expect(list.print()).to.equal('LinkedList { "All Mighty Then" }');
    });

  });

  context('when `list` contains at least two values', () => {

    it('swaps the first and second nodes and returns the new first node', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      const swapped = swapFront(list);
      expect(swapped.print()).to.equal(
        'LinkedList { "neck" <- "head" <- "back" <- "tail" }'
      );
    });

  });

});

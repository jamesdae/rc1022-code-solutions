/* global LinkedList, removeNext, expect */

describe('removeNext(list)', () => {

  context('when `list` contains one node', () => {

    it('does not modify list', () => {
      const list = new LinkedList('so low');
      removeNext(list);
      expect(list.print()).to.equal('LinkedList { "so low" }');
    });

  });

  context('when `list` contains at least two nodes', () => {

    it('removes the 2nd value from `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      removeNext(list);
      expect(list.print()).to.equal(
        'LinkedList { "head" <- "back" <- "tail" }'
      );
    });

  });

});

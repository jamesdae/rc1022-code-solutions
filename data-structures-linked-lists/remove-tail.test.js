/* global LinkedList, removeTail, expect */

describe('removeTail(list)', () => {

  context('when `list` contains one node', () => {

    it('does nothing', () => {
      const list = new LinkedList('Lone train engine');
      removeTail(list);
      expect(list.print()).to.equal('LinkedList { "Lone train engine" }');
    });

  });

  context('when `list` contains at least two nodes', () => {

    it('removes the last node from `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      removeTail(list);
      expect(list.print()).to.equal(
        'LinkedList { "head" <- "neck" <- "back" }'
      );
    });

  });

});

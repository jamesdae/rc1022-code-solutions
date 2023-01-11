/* global LinkedList, updateNext, expect */

describe('updateNext(list, value)', () => {

  context('when `list` contains one node', () => {

    it('does not modify `list`', () => {
      const list = new LinkedList('Han Solo');
      updateNext(list, 'Chewie');
      expect(list.print()).to.equal('LinkedList { "Han Solo" }');
    });

  });

  context('when `list` contains at least two nodes', () => {

    it('sets the 2nd value of `list` to `value`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      updateNext(list, 'selfie stick');
      expect(list.print()).to.equal(
        'LinkedList { "head" <- "selfie stick" <- "back" <- "tail" }'
      );
    });

  });

});

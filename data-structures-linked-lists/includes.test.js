/* global LinkedList, includes, expect */

describe('includes(list, value)', () => {

  context('when `list` contains `value`', () => {

    it('returns true', () => {

      const list1 = new LinkedList(42);
      expect(includes(list1, 42)).to.equal(true);

      const list2 = new LinkedList('billy', 'mandy', 'grim', 'irwin');
      expect(includes(list2, 'billy')).to.equal(true);
      expect(includes(list2, 'mandy')).to.equal(true);
      expect(includes(list2, 'grim')).to.equal(true);
      expect(includes(list2, 'irwin')).to.equal(true);

    });

    it('does not modify `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      includes(list, 'back');
      expect(list.print()).to.equal(
        'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
      );
    });

  });

  context('when `list` does not contain `value`', () => {

    it('returns false', () => {
      const list = new LinkedList(true, '99', 1e7, 'steve');
      expect(includes(list, 99)).to.equal(false);
    });

    it('does not modify `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      includes(list, 'jetpack');
      expect(list.print()).to.equal(
        'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
      );
    });

  });

});

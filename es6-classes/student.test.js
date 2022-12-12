/* global Student, expect */

describe('Student', () => {

  beforeEach(() => {
    expect(Student).to.be.a('function');
  });

  describe('new Student(firstName, lastName, subject)', () => {

    it('has firstName, lastName, and subject properties', () => {
      const grace = new Student('Grace', 'Hopper', 'compilers');
      expect(grace)
        .to.have.own.property('firstName')
        .that.equals('Grace');
      expect(grace)
        .to.have.own.property('lastName')
        .that.equals('Hopper');
      expect(grace)
        .to.have.own.property('subject')
        .that.equals('compilers');
    });

    it('has getFullName() and getIntroduction() prototype methods', () => {
      const ron = new Student('Ron', 'Jeffries', 'extreme programming');
      expect(ron).not.to.have.own.property('getFullName');
      expect(ron).to.respondTo('getFullName');
      expect(ron).not.to.have.own.property('getIntroduction');
      expect(ron).respondTo('getIntroduction');
    });

    describe('student.getFullName()', () => {

      it('returns the full name of the student', () => {
        const edsger = new Student('Edsgar', 'Dijkstra', 'computer science');
        const fullName = edsger.getFullName();
        expect(fullName).to.equal('Edsgar Dijkstra');
      });

    });

    describe('student.getIntroduction()', () => {

      it('returns an introduction for the student', () => {
        const grady = new Student('Grady', 'Booch', 'software engineering');
        const introduction = grady.getIntroduction();
        expect(introduction).to.equal(
          'Hello, my name is Grady Booch and I am studying software engineering.'
        );
      });

    });

  });

});

/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getIntroduction() {
    return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}.`;
  }
}

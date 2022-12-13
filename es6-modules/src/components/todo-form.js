import { createElement } from '../lib';

export default class TodoForm {
  constructor(onSubmit) {
    this.newTask = '';
    this.element = null;
    this.onSubmit = onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.newTask = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.newTask);
    this.newTask = '';
    event.target.reset();
    event.target.querySelector('input').focus();
  }

  render() {
    if (this.element) return this.element;
    this.element = (
      createElement('form', { class: 'shadow-sm mb-4' }, [
        createElement('div', { class: 'input-group' }, [
          createElement('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          createElement('div', { class: 'input-group-append' }, [
            createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );
    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('submit', this.handleSubmit);
    return this.element;
  }
}

import { createElement } from '../lib';

export default class TodoList {
  constructor(onToggle) {
    this.onToggle = onToggle;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const todoItem = event.target.closest('[data-todo-id]');
    if (!todoItem) return;
    const todoId = Number(todoItem.getAttribute('data-todo-id'));
    this.onToggle(todoId);
  }

  renderCheckbox(todo) {
    const checkbox = createElement('input', {
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    });
    checkbox.checked = todo.isCompleted;
    return checkbox;
  }

  renderTodoItem(todo) {
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    const todoItem = (
      createElement('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        createElement('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          createElement('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    return todoItem;
  }

  render(todos) {
    const todoList = (
      createElement('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    todoList.addEventListener('change', this.handleChange);
    return todoList;
  }
}

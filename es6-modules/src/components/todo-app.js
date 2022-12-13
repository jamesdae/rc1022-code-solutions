import { createElement, noop } from '../lib';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class TodoApp {
  constructor(container, nextId, todos, onUpdate = noop) {
    this.container = container;
    this.todos = todos;
    this.nextId = nextId;
    this.todoForm = null;
    this.todoList = null;
    this.isStarted = false;
    this.onUpdate = onUpdate;
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  start() {
    if (this.isStarted) return;
    this.todoForm = new TodoForm(this.addTodo);
    this.todoList = new TodoList(this.toggleCompleted);
    this.update();
    this.isStarted = true;
  }

  addTodo(task) {
    const id = this.nextId;
    const isCompleted = false;
    const newTodo = { id, task, isCompleted };
    this.todos = this.todos.concat(newTodo);
    this.nextId++;
    this.update();
  }

  toggleCompleted(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    this.update();
  }

  update() {
    this.container.innerHTML = '';
    this.container.append(
      createElement('h1', { class: 'mb-4' }, 'JS Todo'),
      this.todoForm.render(),
      this.todoList.render(this.todos)
    );
    const { nextId, todos } = this;
    this.onUpdate({ nextId, todos });
  }
}

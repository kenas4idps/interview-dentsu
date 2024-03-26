import { makeAutoObservable } from "mobx";

type Todo = {
  id: string;
  text: string;
};

class TodoStore {
  todoList: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text: string) {
    // implement add todo function here
  }
}

const store = new TodoStore();

export default store;

import { Status, TodoInfo } from './../types.d';
import { defineStore } from "pinia";

const initialTodoList = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos")!)
  : [];

  const initialTodoStatus = localStorage.getItem("todosStatus") ? JSON.parse(localStorage.getItem("todosStatus")!) : Status.All;

export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      todos: initialTodoList as TodoInfo[],
      todosStatus: initialTodoStatus,
    };
  },

  getters: {
    allTodos(state) {
      return state.todos;
    },

    activeTodos(state) {
      return state.todos.filter((todo) => todo.status === "active");
    },

    completedTodos(state) {
      return state.todos.filter((todo) => todo.status === "completed");
    },

    viewTodos(state): TodoInfo[] {
      switch (state.todosStatus) {
        case Status.Active:
          return this.activeTodos;
        case Status.Completed:
          return this.completedTodos;
        default:
          return this.allTodos;
      }
    }
  },

  actions: {
    addNewTodo(todo: TodoInfo) {
      this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    toggleTodoStatus(id: string) {
      const todo = this.todos.find((todo) => todo.id === id)!;
      todo.status = todo.status === Status.Active ? Status.Completed : Status.Active;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    deleteCompletedTodos() {
      this.todos = this.todos.filter((todo) => todo.status === Status.Active);
    },
    
    setTodosStatus(status: Status) {
      this.todosStatus = status;
      localStorage.setItem("todosStatus", JSON.stringify(this.todosStatus));
    },
  },
});

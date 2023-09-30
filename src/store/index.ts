import { Status } from './../types.d';
import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

const initialTodoList = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos")!)
  : [
      { id: uuid().slice(0, 8), title: "Learn Vue", status: Status.Active },
      { id: uuid().slice(0, 8), title: "Learn Pinia", status: Status.Active },
      { id: uuid().slice(0, 8), title: "Learn Vite", status: Status.Active },
      {
        id: uuid().slice(0, 8),
        title: "Learn TypeScript",
        status: Status.Active,
      },
      {
        id: uuid().slice(0, 8),
        title: "Learn Tailwind",
        status: Status.Active,
      },
      {
        id: uuid().slice(0, 8),
        title: "Learn Tailwind CSS",
        status: Status.Active,
      },
    ];

export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      todos: initialTodoList as TodoInfo[],
    };
  },

  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
});

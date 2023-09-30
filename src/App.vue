<script setup lang="ts">
import { addIcons } from "oh-vue-icons";
import { MdCloseRound } from "oh-vue-icons/icons";
import TodoItem from "./components/TodoItem.vue";
import FilterButtons from "./components/FilterButtons.vue";
import TodoForm from "./components/TodoForm.vue";
import { useTodoStore } from "./store";

addIcons(MdCloseRound);

const store = useTodoStore();
</script>

<template>
  <main>
    <div class="h-[35vh] w-full bg-blue-400 pt-[3rem]">
      <section class="mx-auto flex h-max flex-col gap-[2rem] md:w-[33.75rem]">
        <div class="flex items-center justify-between text-white">
          <h3
            class="text-[2.5rem] font-semibold uppercase tracking-[0.9375rem]"
          >
            todo
          </h3>
          <button>🌙</button>
        </div>
        <div class="flex flex-col gap-[1rem]">
          <TodoForm />
          <div
            class="flex flex-col rounded-md bg-white shadow-xl shadow-black/10"
          >
            <div class="flex max-h-[23rem] flex-col overflow-y-auto">
              <TodoItem
                v-for="todo in store.viewTodos"
                :key="todo.id"
                :id="todo.id"
                :title="todo.title"
                :status="todo.status"
              />

              <p
                class="p-4 text-center text-lg text-[#d1d1d1]"
                v-if="!store.todos.length"
              >
                No TODOs
              </p>
            </div>
            <div v-if="store.todos.length" class="flex items-center justify-between p-[1rem]">
              <span class="text-[0.875rem] text-[#9495A5]"
                >{{ store.activeTodos.length }} item<span v-if="store.activeTodos.length > 1">s</span> left</span
              >
              <FilterButtons />
              <button
                v-bind:disabled="Boolean(!store.completedTodos.length)"
                @click="store.deleteCompletedTodos"
                class="disabled:cursor-not-allowed disabled:opacity-40"
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

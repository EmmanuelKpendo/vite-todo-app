<script setup lang="ts">

import {addIcons} from 'oh-vue-icons';
import { MdCloseRound } from "oh-vue-icons/icons";
import TodoItem from "./components/TodoItem.vue";
import { useTodoStore } from './store';

addIcons(MdCloseRound)

const todos = useTodoStore();
</script>


<template>
  <main>
    <div class="h-[35vh] w-full bg-blue-400 pt-[3rem]">
      <section
        class="mx-auto flex h-max flex-col gap-[2rem] md:w-[33.75rem]"
      >
        <div class="flex items-center justify-between text-white">
          <h3
            class="text-[2.5rem] font-semibold uppercase tracking-[0.9375rem]"
          >
            todo
          </h3>
          <button>🌙</button>
        </div>
        <div class="flex flex-col gap-[1rem]">
          <form
            class="flex items-center gap-[1rem] rounded-md bg-white p-[1rem]"
          >
            <button class="h-5 w-5 rounded-full border border-black"></button>
            <input
              type="text"
              placeholder="Type your TODO..."
              class="w-10/12 outline-none placeholder:italic"
            />
          </form>
          <div
            class="flex flex-col rounded-md bg-white shadow-xl shadow-black/10"
          >
            <div
              class="flex max-h-[23rem] flex-col overflow-y-auto"
            >

            <TodoItem 
              v-for="todo in todos.todos"
              :key="todo.id"
              :id="todo.id"
              :title="todo.title"
              :status="todo.status"
            />

         
              <p class="text-center text-[#d1d1d1] text-lg p-4" v-if="!todos.todos.length">No TODOs</p>
            </div>
            <div class="flex items-center justify-between p-[1rem]">
              <span class="text-[0.875rem] text-[#9495A5]">5 items left</span>
              <div
                class="flex items-center gap-2 text-[0.875rem] font-semibold"
              >
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
              </div>
              <button>Clear Completed</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

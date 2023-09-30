<script setup lang="ts">
import { onUpdated } from "vue";
import { useTodoStore } from "../store";
import { Status } from "../types.d";

const store = useTodoStore();

onUpdated(() => {
    if(!store.completedTodos.length) {
        store.setTodosStatus(Status.All);
    }
})

const buttonStyles =
  "text-[#9495A5] hover:text-primary transition-all duration-300 ease-linear";
</script>

<template>
  <div class="flex items-center gap-2 text-[0.875rem] font-semibold">
    <button
      :style="store.todosStatus === Status.All ? 'color: #3A7CFD' : ''"
      :class="buttonStyles"
      @click="store.setTodosStatus(Status.All)"
    >
      All
    </button>
    <button
      :style="store.todosStatus === Status.Active ? 'color: #3A7CFD' : ''"
      :class="buttonStyles"
      @click="store.setTodosStatus(Status.Active)"
    >
      Active
    </button>
    <button
      :style="store.todosStatus === Status.Completed ? 'color: #3A7CFD' : ''"
      :class="buttonStyles"
      v-bind:disabled="Boolean(!store.completedTodos.length)"
      class="disabled:cursor-not-allowed disabled:opacity-40"
      @click="store.setTodosStatus(Status.Completed)"
    >
      Completed
    </button>
  </div>
</template>

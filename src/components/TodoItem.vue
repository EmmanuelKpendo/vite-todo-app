<script setup lang="ts">
import { useTodoStore } from '../store';
import {addIcons} from 'oh-vue-icons';
import { MdCheckRound } from "oh-vue-icons/icons";

defineProps(['title', 'id', 'status']);
const store = useTodoStore();
addIcons(MdCheckRound);

</script>

<template>
  <div
  :style="status === 'completed' ? 'color: #d1d1d1; text-decoration: line-through; font-style: italic' : ''"
    class="text-primary group flex items-center justify-between border-b border-[#E3E4F1] p-[1rem] text-[1.1rem]"
  >
    <div class="flex items-center gap-4">
      <button @click="store.toggleTodoStatus(id)" class="hover:border-primary h-5 w-5 rounded-full border flex items-center justify-center">
        <v-icon name='md-check-round' v-if="status === 'completed' " scale='0.7' />
      </button>
      <p>{{title}}</p>
    </div>
    <button
    @click="store.deleteTodo(id)"
      class="md:hidden transition-all duration-300 ease-linear group-hover:block"
    >
      <v-icon name="md-close-round" scale="1.2" />
    </button>
  </div>
</template>

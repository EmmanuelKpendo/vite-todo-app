<script setup lang="ts">

import {addIcons} from 'oh-vue-icons';
import { MdCloseRound } from "oh-vue-icons/icons";

addIcons(MdCloseRound)
</script>


<template>
  <main>
    <div class="h-[35vh] w-full bg-blue-400 pt-[3rem]">
      <section
        class="mx-auto flex h-max flex-col gap-[2rem] border md:w-[33.75rem]"
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
            <ul
              class="flex max-h-[23rem] flex-col overflow-y-auto"
            >
              <li
                class="text-primary group flex items-center justify-between border-b border-[#E3E4F1] p-[1rem] text-[1.1rem] hover:cursor-grab"
              >
                <div class="flex items-center gap-4">
                  <button
                    class="hover:border-primary h-5 w-5 rounded-full border"
                  ></button>
                  <p>Complete online JavaScript course</p>
                </div>
                <button class="hidden group-hover:block transition-all duration-300 ease-linear">
                  <v-icon name="md-close-round" scale="1.2" />
                </button>
              </li>
            </ul>
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

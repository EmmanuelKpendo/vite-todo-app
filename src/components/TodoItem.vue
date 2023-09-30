<script setup lang="ts">

defineProps(['title', 'id'])

</script>

<template>
  <div
    class="text-primary group flex items-center justify-between border-b border-[#E3E4F1] p-[1rem] text-[1.1rem] hover:cursor-grab"
  >
    <div class="flex items-center gap-4">
      <button class="hover:border-primary h-5 w-5 rounded-full border"></button>
      <p>{{title}}</p>
    </div>
    <button
      class="hidden transition-all duration-300 ease-linear group-hover:block"
    >
      <v-icon name="md-close-round" scale="1.2" />
    </button>
  </div>
</template>

    <script setup lang="ts">
import { ref } from 'vue';
import { Status } from '../types.d';
import {v4 as uuid } from 'uuid'
import { useTodoStore } from '../store';

const store = useTodoStore();
const formData = ref('');
    const onSubmit = () => {
        const title = formData.value.trim();  
           
        if (title) {
            
            const todoData = {
            id: uuid().slice(0, 8),
            title,
            status: Status.Active
        }

            store.addNewTodo(todoData);         
        }
            formData.value = '';

    }
    </script>

    <template>
        <form
        @submit.prevent="onSubmit"
        class="flex items-center gap-[1rem] rounded-md bg-white p-[1rem]"
    >
        <button type="submit" class="h-5 w-5 rounded-full border border-black"></button>
        <input
        v-model="formData"
        type="text"
        placeholder="Create your todo..."
        class="w-10/12 outline-none placeholder:italic"
        />
    </form>
    </template>
<template>
  <ul class="flex flex-col space-y-6 my-12" flex-col>
    <li class="bg-gray-200 p-4"  v-for="todo in todos" :key="todo.key">
      {{todo.name}}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Todos",
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  emits: {
  }
});
</script>

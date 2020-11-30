<template>
  <form class="flex flex-grow space-x-3" @submit.prevent="addTodo">
    <input
      class="flex-grow px-4 py-2"
      type="text"
      v-model="name"
      placeholder="Add todo..."
    />
    <button class="bg-blue-300 px-8 py-2" type="submit">Add</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TodosForm",
  setup(props, { emit }) {
    const name = ref("");

    function addTodo() {
      emit("todo-added", { name: name.value });
      name.value = "";
    }

    return {
      addTodo,
      name
    };
  },
  emits: {
    "todo-added": ({ name }) => {
      if (name) {
        return true;
      } else {
        return false;
      }
    }
  }
});
</script>

<template>
  <div>
    <TodosForm />
    <Todos :todos="todos" />
  </div>
</template>

<script lang="ts">
import TodosForm from "@/components/TodosForm.vue";
import Todos from "@/components/Todos.vue";
import { defineComponent, ref } from "vue";
import { Todo } from "@/model/todo";

export default defineComponent({
  name: "HomePage",
  components: { TodosForm, Todos },
  setup() {
    const currentId = ref<number>(0);
    const todos = ref<Todo[]>([{ name: "First Todo", id: currentId.value }]);

    currentId.value = currentId.value++;
    todos.value = [
      ...todos.value,
      { name: "Second Todo", id: currentId.value }
    ];

    return {
      todos
    };
  }
});
</script>

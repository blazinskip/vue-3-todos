<template>
  <div class="flex flex-col h-full">
    <TodosForm v-on:todo-added="addTodo" />
    <Todos :todos="todos" v-on:todo-removed="removeTodo" />
  </div>
</template>

<script lang="ts">
import TodosForm from '@/components/TodosForm.vue';
import Todos from '@/components/Todos.vue';
import { defineComponent, ref } from 'vue';
import { Todo } from '@/model/todo';
import id from '@/utils/id';

export default defineComponent({
  name: 'TodosPage',
  components: { TodosForm, Todos },
  setup() {
    const todos = ref<Todo[]>([
      { name: 'First Todo', id: id(), completed: false },
      { name: 'Second Todo', id: id(), completed: false }
    ]);

    function addTodo(todo: Todo) {
      todos.value = [...todos.value, { ...todo, id: id() }];
    }

    function removeTodo(id: string) {
      todos.value = todos.value.filter(({ id: todoId }) => todoId !== id);
    }

    return {
      todos,
      addTodo,
      removeTodo
    };
  }
});
</script>

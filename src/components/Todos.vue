<template>
  <div>
    <transition-group class="todos" name="todos" tag="ul">
      <li
        class="bg-gray-200 p-4 block w-full opacity-100"
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.name }}
      </li>
    </transition-group>
  </div>
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
  emits: {}
});
</script>

<style lang="scss">
.todos {
  @apply flex;
  @apply flex-col;
  @apply space-y-6;
  @apply my-12;
  @apply relative;
}

.todos-enter-active,
.todos-leave-active,
.todos-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.todos-enter-from {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.todos-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.todos-leave-to {
  opacity: 1;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>

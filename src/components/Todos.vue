<template>
  <div class="flex-1 overflow-auto">
    <transition-group class="todos" name="todos" tag="ul">
      <li
        class="flex items-center justify-between w-full p-4 align-middle bg-gray-200 opacity-100"
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.name }}
        <button
          class="relative w-8 h-8 text-blue-900 transition-colors duration-300 ease-in-out outline-none cursor-pointer hover:outline-none todo-close-button hover:text-gray-900 group"
          @click="remove(todo.id)"
        >
          <div
            class="absolute w-full h-full transition-opacity duration-300 ease-in-out bg-blue-600 border rounded-md opacity-0 group-hover:opacity-50"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Todos',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  emits: {
    'todo-removed': (idOfTodo: string) => {
      if (idOfTodo) {
        return true;
      } else {
        return false;
      }
    }
  },
  setup(props, { emit }) {
    function remove(index: string) {
      emit('todo-removed', index);
    }

    return {
      remove
    };
  }
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

.todo-close-button {
  @apply text-blue-800;
}
</style>

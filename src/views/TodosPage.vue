<template>
  <div>
    <TodosForm />
  </div>
</template>

<script lang="ts">
import TodosForm from "@/components/TodosForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: { TodosForm }
});
</script>

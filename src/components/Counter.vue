<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

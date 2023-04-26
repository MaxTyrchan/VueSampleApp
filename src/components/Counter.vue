<script setup lang="ts">
import type { computed } from "@vue/reactivity";
import { ref, watchEffect } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

//function reactively tracking its dependencies and re-runs it whenever the dependencies are changed
watchEffect(() => {
  console.log(count.value);
});
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

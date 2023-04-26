<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";

const count = ref(0);
const result = computed(() => count.value * 2);

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
    <p>Faktor: 2</p>
    <p>Result: {{ result }}</p>
  </div>
</template>

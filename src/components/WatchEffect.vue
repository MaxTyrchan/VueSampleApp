<script setup lang="ts">
import { ref, watchEffect, watchPostEffect, watchSyncEffect, watch } from "vue";

const text = ref("");
const isTyping = ref(false);

// WatchEffect() let us run sideeffects to track reactive dependencies
watchEffect((onInvalidate) => {
  if (text.value.length > 0) {
    isTyping.value = true;

    const typingStatus = setTimeout(() => {
      isTyping.value = false;
    }, 1000);

    // onInvalidate() stops async methods from running when the reactive dependencies change
    // Without it the setTimeout() would flicker on and off
    onInvalidate(() => {
      clearInterval(typingStatus);
    });
  }
});

// does not work!
// if (text.value.length > 0) {
//   isTyping.value = "typing...";
// } else {
//   isTyping.value = "";
// }

// We can stop the Watcher with stop()
// const stop = watchEffect(() => {
//     // ... do smth
//     if () {
//         stop()
//     }
// })

// Differences to watch()

// 1. watch() runs only when the dependency changes not when the component is mounted
// -> Same can be achieved with watchPostEffect()
// 2. You can see previous and current values
watch(text, (prev, current) => {
  console.log(prev, current);
});

// In rare cases, it might be necessary to trigger a watcher immediately when a reactive dependency changes,
// e.g. to invalidate a cache. This can be achieved using watchSyncEffect()

// Why even use Lifecycle Hooks?
// If code only needs to be executed when the state changes, it's better to use onUpdate.
// If you have code that needs to be executed on every update, regardless of whether the state has changed,
// it's better to use watchEffect.
</script>

<template>
  <textarea v-model="text" />
  <h3 v-if="isTyping">typing...</h3>
</template>

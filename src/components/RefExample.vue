<script setup lang="ts">
import { ref, reactive, toRef, toRefs, computed, watchEffect } from "vue";

// Vue2.0 -> observable() only for objects
// const cube = observable({
//     length: 10,
//     width: 10,
//     height: 10,
// })

/*-------------------------------------------------------------------------------*/
// reactive() only for objects
const cube = reactive({
  length: 10,
  width: 10,
  height: 10,
});

// toRef() allows to create a reference to a property on an object
const length = toRef(cube, "length");
const width = toRef(cube, "width");
const height = toRef(cube, "height");

// Equivalent to:
// const { length, width, height } = toRefs(cube);

// ref() allows objects and primitives
// const cube = ref(
//     {
//         length: 10,
//         width: 10,
//         height: 10,
//     }
// )

// computed() takes a getter function and returns a readonly reactive ref object for the returned value from the getter.
const volume = computed(() => length.value * width.value * height.value);

// It can also take an object with get and set functions to create a writable ref object
// const volume = computed({
//   get: () => length.value * width.value * height.value,
//   set: (value) => {
//     length.value = value;
//     width.value = value;
//     height.value = value;
//   },
// });

// readonly() takes an object and returns a readonly proxy/copy of the object
// const copy = readonly(original)

// watchEffect() takes a callback function and runs it immediately and whenever any reactive dependency changes
</script>

<template>
  <h1>Cube</h1>
  <br />
  <h3>Length: {{ cube.length }}</h3>
  <h3>Width: {{ cube.width }}</h3>
  <h3>Height: {{ cube.height }}</h3>
  <h3>Volume: {{ volume }}</h3>
</template>

<script setup lang="ts">
import { inject } from "vue";

const user = inject("user");
</script>

<template>
  <h3>New User</h3>
  <!-- v-model is a two-way binding and replaces v-bind:value and v-on:input -->
  <input v-model="user" />
</template>

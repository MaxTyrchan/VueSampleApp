<script setup lang="ts">
import { inject } from "vue";

const user = inject("user");
</script>

<template>
  <h3>New User</h3>
  <input v-model="user" />
</template>

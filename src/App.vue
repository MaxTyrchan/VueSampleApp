<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import { ref, provide } from "vue";

const user = ref("Max");
provide("user", user);
</script>

<template>
  <Header />
  <Hero />
  <RouterView />
</template>

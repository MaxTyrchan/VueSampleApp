<script setup lang="ts">
import { inject } from "vue";

const user = inject("user");
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="50"
      height="50"
    />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <h3>User: {{ user }}</h3>
  </header>
</template>

<style scoped>
header {
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

h3 {
  font-size: 1.2rem;
  text-align: center;
  align-self: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    text-align: center;
    align-self: center;
  }
}
</style>

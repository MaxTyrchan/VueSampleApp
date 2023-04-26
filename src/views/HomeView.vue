<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <a href="https://github.com/MaxTyrchan/VueSampleApp"
          >Github Repository</a
        >
      </li>
    </ul>
    <h2>Reactive Functions</h2>
    <ul>
      <li>
        <a href="/counter">Counter Function</a>
      </li>
    </ul>
    <h2>Dependency Injection Function</h2>
    <ul>
      <li>
        <a href="/user-change">User Change</a>
      </li>
    </ul>
  </div>
  <br />
  <hr class="dashed" />
  <br />
  <RouterView />
</template>

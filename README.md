# vue-sample-app

This sample App should demonstrates the core functionalitys of Vue.js.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Project Information

VueJS sample App Requirements:

- 2 Seiten (Homepage & Unterseite)
  - Homepage zeigt einen Hero
  - Unterseite zeigt die Text Komponente
  - Navigation ist auf beiden Seiten
- 3 Komponenten (Navigation, Hero & Text Komponente)
  - Navigation hat 2 Links
  - Home & Unterseite
  - Hero besteht aus Bild, Headline & Subtext
  - Text Komponenten besteht aus Headline & Text
- Typescript & SCSS.

## Framework Information

### Performance Vue (Vergleich zu anderen Frameworks)

### Bundle Sizes

### Routing (Das ist auch Teil deiner App)

### Lifecycle Hooks (Gerne auch in der App nutzen)

#### Weitere Hooks

### API Styles

#### Options API

With Options API, we define a component's logic using an object of options such as data, methods, and mounted. Properties defined by options are exposed on this inside functions, which points to the component instance.

The Options API is centered around the concept of a "component instance" (this as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.

```js
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++;
    },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

#### Composition API (Reactivity)

With Composition API, we define a component's logic using imported API functions. In SFCs, Composition API is typically used with <script setup>. The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate. For example, imports and top-level variables / functions declared in <script setup> are directly usable in the template.

The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic.

```js
<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

#### Which to Choose?​

Both API styles are fully capable of covering common use cases. They are different interfaces powered by the exact same underlying system. In fact, the Options API is implemented on top of the Composition API! The fundamental concepts and knowledge about Vue are shared across the two styles.

**For production use:**

- Go with Options API if you are not using build tools, or plan to use Vue primarily in low-complexity scenarios, e.g. progressive enhancement.

- Go with Composition API + Single-File Components if you plan to build full applications with Vue

### Reactive Code (Declarative vs. Imperative Coding)

#### Declaring Reactive State

- We can create a reactive object or array with the reactive() function.
- To use reactive state in a component's template, declare and return them from a component's setup() function.
- Similarly, we can declare functions that mutate reactive state in the same scope and expose them as methods alongside the state.
- When using Single-File Components (SFCs), we can greatly simplify the usage with <script setup>:

```js
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

    // expose the state to the template
<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

### Dependency Injection

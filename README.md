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

## Framework Information

Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.

<details><summary><h3> Performance Vue (Comparison to other Frameworks)</h3></summary>

Vue.js, React.js, and Angular are three of the most popular front-end web development frameworks. Each framework has its own unique features and advantages, and choosing the right one for your project can be a difficult decision. In this comparison, we'll take a look at some of the key differences between Vue.js, React.js, and Angular to help you make an informed decision.

</details>

#### Vue.js

Vue.js is a lightweight front-end framework that emphasizes simplicity and ease of use. It was created in 2014 by Evan You and has gained a lot of popularity in recent years. Vue.js offers a variety of features that make it a great choice for building small to medium-sized applications.

**Pros:**

- Easy to learn: Vue.js is easy to learn and understand, even for developers who are new to web development. The framework has a simple and intuitive API, making it easy to get started with.
- Lightweight: Vue.js is a lightweight framework that has a small footprint. This means that it loads quickly and is efficient in terms of memory usage.
- Flexible: Vue.js is highly customizable and can be integrated into existing projects without much hassle. The framework is designed to be modular, which means that you can use only the parts of it that you need.
- Great documentation: Vue.js has excellent documentation that is easy to follow and understand. This makes it easy to find answers to your questions and troubleshoot any issues you may encounter.
- Good performance: Vue.js is fast and efficient, with a virtual DOM that minimizes the amount of DOM manipulation required. This makes it a good choice for building performant applications.

**Cons:**

- Small community: While Vue.js has gained a lot of popularity in recent years, it still has a smaller community than some of the other frameworks. This means that finding resources and support can be more difficult.
- Limited ecosystem: The ecosystem around Vue.js is not as mature as some of the other frameworks, which means that there may be fewer plugins and tools available.
- Limited scalability: Vue.js may not be the best choice for large-scale projects, as it lacks some of the scalability features of other frameworks.

#### React.js

React.js is a popular front-end framework developed by Facebook. It was first released in 2013 and has since become one of the most widely used front-end frameworks. React.js is known for its performance and scalability, making it a good choice for large-scale projects.

**Pros:**

- Good performance: React.js is known for its performance, with a virtual DOM that minimizes the amount of DOM manipulation required. This makes it a good choice for building performant applications.
- Scalable: React.js is highly scalable and can be used to build large-scale applications. The framework is designed to be modular, which means that you can reuse components across your application.
- Large community: React.js has a large and active community, which means that finding resources and support is easy. There are also a lot of plugins and tools available.
- JSX: React.js uses JSX, a syntax that allows you to write HTML-like code in your JavaScript. This makes it easy to create reusable components and helps to keep your code organized.

**Cons:**

- Steep learning curve: React.js can be difficult to learn, especially for developers who are new to web development. The framework has a complex API and requires a good understanding of JavaScript.
- Boilerplate: React.js requires a lot of boilerplate code, which can make it more difficult to get started with.
- Opinionated: React.js is an opinionated framework, which means that it may not be the best choice for developers who prefer more flexibility and customization.

#### Angular

**Pros:**

- Complete framework: Angular is a complete framework that comes with everything you need to build large-scale, complex web applications.
- Built-in state management: Angular has a built-in state management system called RxJS, which is based on the reactive programming paradigm.
- Powerful CLI: Angular comes with a powerful command-line interface (CLI) that makes it easy to create, scaffold, and build Angular applications.
- Strong typing: Angular is built with TypeScript, a strongly-typed superset of JavaScript. This makes it easier to catch errors early and write more maintainable code.
- Large community: Angular has a large and active community of developers, which means there are plenty of resources, tutorials, and plugins available.
  **Cons:**

- Steep learning curve: Angular has a steep learning curve, especially for developers who are new to the framework or to web development in general.
- Overly complex: Some developers find Angular to be overly complex, with too many abstractions and boilerplate code.
- Performance: Angular can be slower to load and render initially compared to other frameworks, due to its heavy-weight architecture and ahead-of-time compilation.
- Limited flexibility: Angular's opinionated architecture can limit flexibility and make it difficult to integrate with other libraries or tools.
- Large bundle size: Angular applications can have a large bundle size, which can impact performance and load times, especially on slow or mobile networks.

### Bundle Sizes

</summary>

Vue.js is known for its small size and minimal footprint. The core library of Vue.js, without any additional plugins or dependencies, is only around 24KB after minification and gzip compression. This makes it one of the smallest JavaScript frameworks available.

However, the size of a Vue.js application can vary depending on the features and dependencies used. For example, if you're using the Vue CLI to generate a new project, it comes with additional dependencies like webpack, babel, and other plugins, which can increase the overall size of the project.

To reduce the bundle size of a Vue.js application, there are several strategies that can be used. One common approach is to use code splitting, which allows you to split your application code into smaller, more manageable chunks that can be loaded on demand as needed. This can greatly reduce the initial load time and improve performance.

Another strategy is to use tree shaking, which is a technique for removing unused code from your application. This can help to further reduce the overall bundle size and improve performance.

Overall, Vue.js is a lightweight and efficient framework, and with proper optimization techniques, it's possible to build fast and performant applications while keeping the bundle size to a minimum.

### Routing

</summary>

#### Introduction to Vue Router

Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:

- Nested routes mapping
- Dynamic Routing
- Modular, component-based router configuration
- Route params, query, wildcards
- View transition effects powered by Vue.js' transition system
- Fine-grained navigation control
- Links with automatic active CSS classes
- HTML5 history mode or hash mode
- Customizable Scroll Behavior
- Proper encoding for URLs

#### Download

**npm**

```bash
npm install vue-router@4
```

**yarn**

```bash
yarn add vue-router@4
```

#### Vue Router and the Composition API

Because we don't have access to this inside of setup, we cannot directly access this.$router or this.$route anymore. Instead we use the useRouter and useRoute functions.
The route object is a reactive object, so any of its properties can be watched and you should avoid watching the whole route object. In most scenarios, you should directly watch the param you are expecting to change.

```js
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    const route = useRoute()
    const userData = ref()

...
```

**Link to the Docs:** https://router.vuejs.org/guide/

### Lifecycle Hooks

</summary>

#### onMounted()​

</summary>

Registers a callback to be called after the component has been mounted.

**Type**

ts
function onMounted(callback: () => void): void

**Details**

A component is considered mounted after:

- All of its synchronous child components have been mounted (does not include async components or components inside <Suspense> trees).
- Its own DOM tree has been created and inserted into the parent container. Note it only guarantees that the component's DOM tree is in-document if the application's root container is also in-document.

This hook is typically used for performing side effects that need access to the component's rendered DOM, or for limiting DOM-related code to the client in a server-rendered application.

This hook is not called during server-side rendering.

**Example**

Accessing an element via template ref:

```js
<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  el.value // <div>
})
</script>

<template>
  <div ref="el"></div>
</template>
```

#### onUpdated()​

</summary>
Registers a callback to be called after the component has updated its DOM tree due to a reactive state change.

**Type**

```ts
function onUpdated(callback: () => void): void;
```

A parent component's updated hook is called after that of its child components.

This hook is called after any DOM update of the component, which can be caused by different state changes. If you need to access the updated DOM after a specific state change, use nextTick() instead.

This hook is not called during server-side rendering.

**Example**

Accessing updated DOM:

```js
<script setup>
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log(document.getElementById('count').textContent)
})
</script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>
```

#### onUnmounted()​

</summary>
Registers a callback to be called after the component has been unmounted.

**Type**

```ts
function onUnmounted(callback: () => void): void;
```

A component is considered unmounted after:

- All of its child components have been unmounted.
- All of its associated reactive effects (render effect and computed / watchers created during setup()) have been stopped.

Use this hook to clean up manually created side effects such as timers, DOM event listeners or server connections.

This hook is not called during server-side rendering.

**Example**

```ts
<script setup>
import { onMounted, onUnmounted } from 'vue'

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    // ...
  })
})

onUnmounted(() => clearInterval(intervalId))
</script>
```

#### onBeforeMount()​

</summary>
Registers a hook to be called right before the component is to be mounted.

**Type**

```ts
function onBeforeMount(callback: () => void): void;
```

**Details**

When this hook is called, the component has finished setting up its reactive state, but no DOM nodes have been created yet. It is about to execute its DOM render effect for the first time.

This hook is not called during server-side rendering.

#### onBeforeUpdate()​

</summary>
Registers a hook to be called right before the component is about to update its DOM tree due to a reactive state change.

**Type**

```ts
function onBeforeUpdate(callback: () => void): void;
```

**Details**

This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.

This hook is not called during server-side rendering.

#### onBeforeUnmount()​

</summary>
Registers a hook to be called right before a component instance is to be unmounted.

**Type**

```ts
function onBeforeUnmount(callback: () => void): void;
```

**Details**

When this hook is called, the component instance is still fully functional.

This hook is not called during server-side rendering.

### API Styles

</summary>
Vue components can be authored in two different API styles: Options API and Composition API.

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

</summary>

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

#### Reactive Variables with ref()

To address the limitations of reactive(), Vue also provides a ref() function which allows us to create reactive "refs" that can hold any value type:

```js
import { ref } from "vue";

const count = ref(0);
```

A ref containing an object value can reactively replace the entire object:

```js
import { ref } from "vue";

const count = ref(0);
```

### Dependency Injection

</summary>

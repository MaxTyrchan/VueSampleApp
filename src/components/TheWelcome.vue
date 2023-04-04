<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <div class="welcome">
    <h1>Framework Information</h1>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Performance Vue</template> ....
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Bundle Sizes</template>
      <code>README.md</code>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Routing</template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Lifecycle Hooks</template>
      <h3>Weitere Hooks</h3>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>API Styles</template>
      <h3>Options API</h3>
      With Options API, we define a component's logic using an object of options
      such as data, methods, and mounted.<br />
      Properties defined by options are exposed on this inside functions, which
      points to the component instance.<br />
      The Options API is centered around the concept of a "component instance"
      (this as seen in the example),<br />
      which typically aligns better with a class-based mental model for users
      coming from OOP language backgrounds.<br />
      It is also more beginner-friendly by abstracting away the reactivity
      details and enforcing code organization via option groups.<br />
      <br />
      <h3>Composition API</h3>
      With Composition API, we define a component's logic using imported API
      functions.<br />
      The setup attribute is a hint that makes Vue perform compile-time
      transforms that allow us to use Composition API with less boilerplate.<br />
      The Composition API is centered around declaring reactive state variables
      directly in a function scope and composing state from multiple functions
      together to handle complexity.<br />
      It is more free-form and requires an understanding of how reactivity works
      in Vue to be used effectively.<br />
      In return, its flexibility enables more powerful patterns for organizing
      and reusing logic.<br />
      <br />
      <h3>Which to Choose?​</h3>
      Both API styles are fully capable of covering common use cases.<br />
      They are different interfaces powered by the exact same underlying
      system.<br />
      In fact, the Options API is implemented on top of the Composition API!<br />
      The fundamental concepts and knowledge about Vue are shared across the two
      styles.<br />For production use:<br />
      - Go with Options API if you are not using build tools, or plan to use Vue
      primarily in low-complexity scenarios, e.g. progressive enhancement.<br />
      - Go with Composition API + Single-File Components if you plan to build
      full applications with Vue
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading
        >Reactive Code (Declarative vs. Imperative Coding)</template
      >
      <h3>Declaring Reactive State</h3>
      - We can create a reactive object or array with the reactive()
      function.<br />
      - To use reactive state in a component's template, declare and return them
      from a component's setup() function.<br />
      - Similarly, we can declare functions that mutate reactive state in the
      same scope and expose them as methods alongside the state.<br />
      <br />
      <h3>Reactive Variables with ref()</h3>
      To address the limitations of reactive(), Vue also provides a ref()
      function which allows us to create reactive "refs" that can hold any value
      type.<br />
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Dependency Injection</template> ....
    </WelcomeItem>
  </div>
</template>

<style scoped>
.welcome {
  margin: 0 0 2rem 2rem;
}
</style>

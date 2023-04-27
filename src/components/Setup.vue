<!-- Variant 1: <script setup>
    
<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";

const num = ref(0);

onMounted(() => {
  num.value++; // <div>
});

onUpdated(() => {
  num.value; // <div>
});

</script>

<template>
  <div ref="el"></div>
</template> -->

<!-- ------------------------------------------------------------------------------- -->

<!-- Variant 2: setup() -->
<script>
import { ref } from "vue";

export default {
  props: {
    title: String,
  },
  setup(props) {
    const count = ref(0);
    const title = props.title;

    // expose to template and other options API hooks
    return {
      count,
      title,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

<!-- Difference between <script setup> and setup()
    
    With the setup() function, you need to explicitly return the data, methods, and computed 
    properties that you want to use in the template. With the <script setup> tag, all the data, 
    methods, and computed properties defined in the script are automatically available in the template.-->

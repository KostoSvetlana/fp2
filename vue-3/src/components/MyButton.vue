<template>
  <button @click="clickHandler">Test custom events</button>
</template>
   
<script>
export default {
  name: "ChildComponent",
  methods: {
    clickHandler() {
      this.$emit("custom-event-1", "data 1");
      this.$emit("custom-event-2", "data 2");
    },
  },
};
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-button @custom-event-1="firstEvent" @custom-event-2="secondEvent" />
    <button @click="toggleModal">Show/Hide</button>
    <teleport to="#modal">
      <my-modal-teleport v-if="showModal">
        <p>Teleport</p>
        <button @click="toggleModal">Hide</button>
      </my-modal-teleport>
    </teleport>
    <new-comp />
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import MyModalTeleport from "./MyModalTeleport.vue";
import NewComp from "./NewComp.vue";
export default {
  components: { MyButton, MyModalTeleport, NewComp },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    firstEvent() {
      console.log("firstEvent");
    },
    secondEvent() {
      console.log("secondEvent");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
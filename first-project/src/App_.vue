<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="main">
      <router-view/>
    </div>
    <transition name="fade">
       <modal-window :settinds="settinds" v-if="modalWindowName" />
    </transition>
    <transition name="fade">
      <context-menu />
    </transition>
  </div>
</template>

<script>

import ContextMenu from './components/ContextMenu.vue'
export default {
  components:{ ModalWindow: () => import ('./components/ModalWindow.vue'), ContextMenu },

  data(){
    return{
      modalWindowName: '',
    settings: {}
    }
  },
  methods: {
    onShown(settings) {
      this.modalWindowName = settings.name
      this.settings = settings
    },
    onHide() {
      this.modalWindowName = ''
      this.settings = {}
    }
   },
  created() {
    
    this.$store.dispatch('fetchData')
  },
   mounted() {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('hide', this.onHide)
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
 
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

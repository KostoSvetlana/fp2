<template>
    <div class="wrapper">
     <div class="header"> {{settings.header}} </div>
     <div class="content">  <component :is="settings.content" />
     </div>
     <div class="footer">
         <button @click="onClose">Close</button>
     </div>
    </div>
</template>

<script>

export default {
  components: { 
    AddPaymentForm: ()=>import ('./AddPaymentForm.vue'),
    Auth: ()=> import('./Auth.vue'),
    PaymentEdit: ()=> import('./PaymentEdit.vue') 
  },
    name: "ModalWindow",
    props:{
    settings: Object  
  },
    methods: {
        onclose() {
             this.$modal.hide()
        }
    },
}
</script>


<style lang="scss" scoped>
.wrapper {
    border: 1px solid red;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffffd9;
    & .overlay {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(68, 61, 0.5);
    }
    & .content {
        position: relative;
        z-index: 100;
    }
    & .footer {
        top: 140px;
        position: relative;
        z-index: 100;
    }
}


</style>

<template>
 
    <div class="wrapper" >
<div class="item" v-for="item in items" :key="item.id">
 <span>{{item.id}}</span> - <span>{{item.date}}</span> - <span>{{ item.category }}</span> - <span>{{ item.value }}</span> - <span @click="onShowContextMenu($event,item)">...</span>
  </div>
 </div>
  
</template>

<script>
import PaymentEdit from '../components/PaymentEdit.vue'
export default {
nane: "PaymentsDisplay",
components: PaymentEdit,
props: {
    items:{
        type: Array,
        default: ()=>[],
        
         
    }
},
  methods: {
      editItem(item){
        this.$modal.show('PaymentEdit', {
            header: "Payment Edit",
            item: item,
            content:'PaymentEdit'
        })
    },
    onShowContextMenu(event, item , id){
      const items = [
        {
          text: "Edit",
          action: ()=>{
            this.editItem(item)
          }
        },
        {
          text: "Delete",
          action: ()=>{
             this.deletePayment(id)
          }
        }
      ]
      this.$context.show({event,items})
    }
  },
}


 

</script>

<style lang="scss" scoped>

</style>
<template>
 
    <v-container>
    <v-row>
      <v-col :cols="2">#</v-col>
      <v-col :cols="5">Date</v-col>
      <v-col :cols="3">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row v-for="item in items" :key="item.id">
      <v-col :cols="2">{{item.id}}</v-col>
      <v-col :cols="5">{{item.date}}</v-col>
      <v-col :cols="3">{{item.category}}</v-col>
      <v-col :cols="2">{{item.value}}</v-col>
    </v-row>
  </v-container>
  
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
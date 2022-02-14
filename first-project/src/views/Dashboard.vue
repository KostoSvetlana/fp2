<template>
    <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>

        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on }">
            <v-btn color="teal" dark v-on="on">Add new cost <v-icon>mdi-plus</v-icon> </v-btn> 
          </template>

          <v-card>
            <add-payment-form @onAdd="dialog=false"/>
          </v-card>

        </v-dialog>



        <payments-display :items="paymentsList" />
      </v-col>
      <v-col> 
        <!-- <my-button>
          <template #values="data">
            asd
            {{ data }}
          </template>
          <template #icon>
            <v-icon>mdi-plus</v-icon>
          </template>
          Some asdasda
        </my-button>
        <my-button>
          Text
        </my-button> -->

        <chart />
        
         </v-col>
    </v-row>
  </v-container>
  
  
  
  
  <!-- <div class="home">
    <header>
      <div class="title">My personal coast</div>
    </header>
    
    <main>
      TOTAL: {{ getFullPaymentValue }}
      <hr />
      <button @click="onShowModal = true"> ShowModal </button>
      <hr />
      
        <payments-display :items="currentElements" />
      <pagination :length="12" :cur="curPage" :n="3" @paginate="onChangePage "/>
    </main>
   
  </div> -->

</template>

<script>
//import AddPaymentForm from '../components/AddPaymentForm.vue';
//import PaymentsDisplay from '../components/PaymentsDisplay.vue';
import { mapMutations, mapActions, mapGetters } from 'vuex'
//import Pagination from '../components/Pagination.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//import { Pie } from 'vue-chartjs'

import { Doughnut } from 'vue-chartjs'
export default {
  name: 'Home',
  //extends: Pie,
  props:['Food', 'Transport', 'Education', 'Entertainment', 'Sport'],
  components: {
    PaymentsDisplay: ()=> import('../components/PaymentsDisplay.vue'),
    AddPaymentForm: ()=> import("../components/AddPaymentForm.vue"),
   // Pagination: ()=>import('../components/Pagination.vue'),
    Chart:()=> import('../components/Chart.vue')
   
  },
  data(){
return {
  dialog: false,
  curPage: 1,
      n: 10,
  show: false,

};
  },
    extends: Doughnut,
    computed: {
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    paymentsList() {
      return this.$store.getters.getPaymentList
    },
   currentElements(){
     return this. paymentsList.slice(this.n * (this.curPage - 1), this.n * (this.curPage - 1)+ this.n)
      }
  },
  methods:{
    ...mapMutations({
      myMuttaion: 'setPamentsListData'
    }),
    ...mapActions([
      'fetchData'
    ]),
    onShowModal(){
        this.$modal.show('AddPaymentForm', { 
        header: "Add payment form",
        content: "AddPaymentForm"
      })
    },
    onChangePage(page){
      this.curPage = page
      this.fetchData(page)
    },
    add(data){
     this.$store.commit('addDataToPaymentsList', data)
    },
     // goToDetailAbout(){
    //   this.$router.push({
    //     name: "About",
    //   })
    // }
    // fetchData() {
    //   return [
    //     {
    //       id: "1",
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       id: "2",
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       id: "3",
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
  },
  created() {
    const { page } = this.$route.params
    if (page) {
      this.curPage = Number(page)
    }
    
    //this.fetchData()
    // this.$store.dispatch('fetchData')
    // this.myMuttaion(this.fetchData())
    //this.$store.commit('setPamentsListData', this.fetchData())
    // this.paymentsList = this.fetchData();
  },
};
</script>

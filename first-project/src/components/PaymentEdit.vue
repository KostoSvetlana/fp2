<template>
  <div class="wrpEdit">
    <div class="editSelect">
      <select v-model="category">
        <option v-for="(option,idx) in options" :key="idx">{{ option }}</option>
      </select>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Value" v-model.number="value"/>
    <button @click="editPayment">Save</button>
  </div>
  </div>
</template>

<script>
import {  mapActions, mapMutations } from "vuex";
export default {
  name: "PaymentEdit",
  props: {
    item: {
      type: Object,
      default: () =>({

      }),
    },
  },
  data() {
    return {
      date: "",
      value: "",
      category: ""
    };
  },
  computed: {
    options(){
      return this.$store.getters.getcategoryList
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["updatePayment"] ),
    editPayment() {
      this.updatePayment({
        id: this.item.id,
        date: this.item.date,
        category: this.category,
        value: this.value,
      });
      this.$emit("close-edit");
    },
  },
  async created() {
    if(!this.options.length) {
      await this.$store.dispatch('loadCategories')
    }
  },
mounted(){
            this.date = this.item.date,
            this.category = this.item.category,
            this.value = this.item.value,
    
    this.fetchData();
}
};
</script>

<style lang="scss" scoped>
</style>
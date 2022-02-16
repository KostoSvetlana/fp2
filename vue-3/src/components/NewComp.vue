<script setup>
import { reactive, ref, unref } from "@vue/reactivity";
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
const count = reactive({
    obj1: {
        value:0
    },
    obj2: {
        someValue:0
    }
});
const num = ref(1)
const numComputed = computed(()=> `Результат кликов ${num.value}`)
const onClick = () => count.obj1.someValue = 5 ;
const onClick2 = ()=>{
    if(count.obj1.someValue !== 5) {
        return
    }
    count.obj1 = {
        someValue: 9
    }
    console.log(count)
}
watchEffect(()=>{
    if(unref(num)) {
        console.log(unref(num))
    }
    onClick2()
    console.log(numComputed.value)
})
onMounted(()=>{
})
</script>
<template>
    {{ count }}
    {{ numComputed }}
    <button @click="onClick2">Click2</button>
    <button @click="onClick">Click</button>
</template>


<style>
</style>
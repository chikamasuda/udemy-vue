<template>
  <div>
    <div>VuexTest</div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {  computed } from 'vue'
export default {
  setup() {
    const store = useStore()

    const count = computed(() => {
      return store.state.count
    })

    const increment = () => {
      store.commit('increment')
    }

    return { count, increment }
  }
}
</script>

<style>

</style>
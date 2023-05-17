<template>
  <div class="about">
    <h1>find</h1>
    <h1>{{$store.state.a}}==={{$store.state.num}}</h1>
    <button @click="add()">add</button>
    <button @click="ADD">add2</button>
    <h1>{{isEvenOrOdd}}</h1>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      item:{}
    }
  },
  computed:mapGetters(['isEvenOrOdd']),
  methods:{
    ...mapActions(['ADD','SHOWNAV']),
    add(){
      this.$store.dispatch('ADD');
    },

  },
}
</script>
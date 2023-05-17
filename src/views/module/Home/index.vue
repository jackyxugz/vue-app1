<template>
  <div class="about">
    <Nav />
    <my-banner :img="items"/>
    <List />
  </div>
</template>

<script>
import Nav from './nav'
import List from './list'

export default {
  data(){
    return {
      items:[
        require("@/assets/img/1.jpg"),
        require("@/assets/img/2.jpg"),
        require("@/assets/img/1.jpg"),
        require("@/assets/img/2.jpg")]
    }
  },
  components:{
    Nav,
    List
  }
}
</script>

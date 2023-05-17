<template>
  <div class="banner">
    <img  v-for="(v,i) in img" :key="i" :src="v" v-show="cur==i" />
    <div class="banner-circle">
      <ul>
        <li :class="cur==i ?'selected':'' "  v-for="(v,i) in img" :key="i"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cur:0,
      timer:null,
      // img:[
      //   require("@/assets/img/1.jpg"),
      //   require("@/assets/img/2.jpg"),
      //   require("@/assets/img/1.jpg"),
      //   require("@/assets/img/2.jpg")]
    }
  },
  props:['img'],
  methods:{
    play(){
      this.timer = setInterval(this.autoPlay,2000);
    },
    autoPlay(){
      this.cur++;
      if(this.cur >=this.img.length){
        this.cur = 0;
      }
    }
  },
  mounted(){  //挂载完成
    this.play();
  },
  destroyed(){   //销毁
    clearInterval(this.timer);
  }
}
</script>

<style scoped>

</style>
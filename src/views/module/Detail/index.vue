<template>
  <div class="detail">
    <div>
      <a class="goback" @click="goBack()">返回</a>
      <div>
        <img :src="item.product_img_url" /> 
        
      </div>
      <div>
        <p>{{item.product_name}}</p>
        <p>{{item.product_detail}}</p>
      </div>
    </div>
    <div class="shoppCart" >
        <button @click="addToCart()">加入购物车</button>
    </div>
  </div>
</template>

<script>
import {getDetail} from '@/request/request'

export default {
  data(){
    return {
      item:{}
    }
  },
  methods:{
    getData(id=1){
       getDetail({mId:id}).then(res=>{
         console.log(res);
         this.item = res.data[1][0];
       })
    },
    goBack(){
      this.$router.push('/home');
    },
    addToCart(){
      this.$store.dispatch('CARTADD',this.item);
      this.$router.push('/order');
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    this.getData(this.$route.params.id);
    this.$store.dispatch('HIDENAV');
  },
  destroyed(){
    this.$store.dispatch('SHOWNAV');
  }
}
</script>
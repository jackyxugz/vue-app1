<template>
  <div class="index-main">
        <ul>
            <li class="lists" v-for="v in items" :key="v.product_id">
                <router-link :to="'/detail/'+v.product_id">
                 <img src="@/assets/img/loading.gif" v-lazy="v.product_img_url" width="150" height="150">
                </router-link>
                <label>
                    <b class="discount">折扣价： {{v.product_uprice}}</b>
                    <span class="price-text">原价： {{v.product_price}}</span> 
                </label>            
            </li> 
        </ul>  
    </div>
</template>

<script>
import {getLists,getTotal} from '@/request/request'

export default {
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getData(){
       getLists(1,100).then(res=>{
         console.log(res);
         this.items = res.data.data;
       })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

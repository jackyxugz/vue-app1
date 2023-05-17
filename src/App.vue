<template>
  <div id="app">
    <!-- 主体内容 -->
    <router-view />
    <!-- 底部导航 -->
    <NavBottom  v-show="getNavState" />
  </div>
</template>

<script>
import NavBottom from './views/NavBottom'
import {mapGetters} from 'vuex'  // 辅助函数

export default {
  data(){
    return {

    }
  },
  // computed:mapGetters(['getNavState']),
  computed:{
    ...mapGetters(['getNavState']),
    n(){
      return 10;
    }
  },
  components:{
    NavBottom
  }
}
</script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  a:'aaa',
  num:999,
  isNavShow:true, //底部导航显示与隐藏
  cartAddData:[], //购物车数据
}
var getters={
  getNavState(state){  //获取底部导航状态的值
    return state.isNavShow
  },
  isEvenOrOdd(state) {
    return state.num %2 ==0?'偶数':'奇数'
  }
}
var mutations ={
  ADD(state){
    state.num +=1;
  },
  SHOWNAV(state){  //显示
    state.isNavShow = true;
  },
  HIDENAV(state){  //隐藏
    state.isNavShow = false;
  },
  CARTADD(state,data){  //购物车数据添加
    state.cartAddData.push(data);
  }
}
var actions= {
  ADD({commit}){
    commit('ADD')
  },
  SHOWNAV({commit}){  //显示
    commit('SHOWNAV')
  },
  HIDENAV({commit}){  //隐藏
    commit('HIDENAV')
  },
  CARTADD({commit},data){  //购物车数据添加
    commit('CARTADD',data)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

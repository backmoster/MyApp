import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let dirr='北京'
// localStorage.city=123
dirr=localStorage.city

export default new Vuex.Store({
  state: {
    cityName:dirr
  },
  mutations: {
    changeCity(state,city){

    state.cityName=city
    localStorage.city=city
    }


  },
  actions: {
  },
  modules: {
  }
})

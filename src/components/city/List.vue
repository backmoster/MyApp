<template>
  <div class="list">
    <div class="city-item">
      <p>定位/附近城市</p>
 <div v-for='mapitems in  mapCities' :key="mapitems.index" @click="toHome(mapitems.name)" >{{mapitems.name}}</div>
    </div>
    <div class="city-item">
      <p>已开通周边游玩城市</p>
     <div v-for='cityitems in  cities' :key="cityitems.index" @click="toHome(cityitems.name)" >{{cityitems.name}}</div>
     
    </div>
    <div class="city-item">
      <p>热门玩乐城市</p>
      <div v-for='hotitems in  hotCities' :key="hotitems.index" @click="toHome(hotitems.name)" >{{hotitems.name}}</div>
      
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
        cities:[],
        hotCities:[],
        mapCities:[]
        }
    },
    mounted(){
        let that=this
        this.axios.get('http://localhost:8080/api/city.json').then((res)=>{
            let data =res.data.data
            that.citylist=data
            that.mapCities=data.mapCities
            that.cities=data.cities
            that.hotCities=data.hotCities
            

            console.log(this.citylist)
        })
    },
    methods:{
        toHome(cname){
           this.changeCity(cname)
            this.$router.push({
                path:'/'
            })
        },
        ...mapMutations(['changeCity'])
    }
}
</script>
<style scoped>
.city-item {
  margin-top: 0.3rem;
  padding-left: 0.4rem;
  color: #999;
  font-size: 0.4rem;
}
.city-item p {
  padding: 0.3rem 0;
}
.city-item div {
  display: inline-block;
  width: 2rem;
  height: 0.82rem;
  line-height: 0.82rem;
  text-align: center;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>

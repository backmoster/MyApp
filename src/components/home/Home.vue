<template>
  <div class="home">
    <Banner></Banner>
    <Icons></Icons>
    <Tabs></Tabs>
    <Scroll></Scroll>
    <Swiper></Swiper>
    <Spike :spikeList="spikeList"></Spike>
    <Like :likeList="likeList"></Like>
    <Footer></Footer>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Banner from "./Banner";
import Icons from "./Icons";
import Tabs from "./Tabs";
import Scroll from "./Scroll";
import Swiper from "./Swiper";
import Spike from "./Spike";
import Like from "./Like";
import Footer from "./Footer";
export default {
  data() {
    return {
      spikeList: [],
      likeList: [],
      changeCity:''
    };
  },
  components: {
    Banner,
    Icons,
    Tabs,
    Scroll,
    Swiper,
    Spike,
    Like,
    Footer,
  },
  computed: {
    ...mapState(["cityName"]),
  },
  mounted() {
    this.changeCity=this.cityName
    this.http();

  },
  methods: {
    http() {
      let that = this;
      this.axios.get("http://localhost:8080/api/dataHome.json").then((res) => {
        let data = res.data.data;

       
        data.forEach( item => {
        
          if (item.city == that.cityName) {
            that.spikeList = item.spikeList;
            that.likeList = item.likeList;
            console.log(item)
          }
        });
      });
    },
  },
  activated(){
    if(this.changeCity!=this.cityName){
      this.http();
      this.changeCity=this.cityName
    }
  }
};
</script>
<style scoped>
.home {
  overflow: hidden;
}
</style>

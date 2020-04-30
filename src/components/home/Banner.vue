<template>
  <div class="banner">
      <transition
        enter-active-class="slideInLeft"
        leave-active-class="slideOutLeft"
      >
    <div class="banner-left animated" v-show='toshow'></div>
    </transition>
    <div class="banner-header">
      <div class="banner-top">
        <div class="top-left">
          北京
          <i class="iconfont ">&#xe6aa;</i>
        </div>
        <div class="top-search">
          <i class="iconfont">&#xe64d;</i>
          泰国
        </div>
        <div class="top-right">
          <img src="@/assets/img/show.png" alt="" 
            @click="showLeft"
          />
        </div>
      </div>
      <div class="banner-swiper">
        <swiper :options="swiperOptions">
          <swiper-slide>
            <img src="@/assets/img/banner1.png" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/banner2.png" alt="" srcset="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/img/banner3.png" alt="" srcset="" />
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      toshow:false
    }
  },
  methods:{
      showLeft(){
          this.toshow=!this.toshow
      }
  }
};
</script>
<style scoped>
.banner-left{
    position: absolute;
    background: #000;
    width: 6.666rem;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 3;
}
.banner-header {
  width: 100%;
  height: 5.6rem;
  position: relative;
  background: #f1f1f1;
}
.banner-top {
  position: absolute;
  top: 0.5rem;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
.top-left {
  color: #fff;
  font-size: 0.426rem;
  padding: 0.2rem;
}
.top-search {
  flex: 1;
  padding: 0.2rem;
  background: #fff;
  font-size: 0.3733rem;
  border-radius: .1rem;
}
.top-right {
padding: 0.2rem;
}
.top-right img{
    width: 0.5333rem;
    height: .5333rem;
}
.banner-swiper {
  width: 100%;
  height: 5.6rem;
}
.banner-swiper img {
  width: 100%;
  height: 5.6rem;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}
</style>

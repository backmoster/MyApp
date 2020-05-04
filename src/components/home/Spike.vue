<template>
  <div class="spike">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="items in spikeList" :key="items.index">
        <div class="spike-content">
          <div class="spike-top">
            <img src="@/assets/img/spike1.png" alt="" srcset="" />
            <span>距离结束：</span>
            <Countdown
              :currentTime="items.startTime"
              :startTime="items.startTime"
              :endTime="items.endTime"
              :dayTxt="'天'"
              :hourTxt="':'"
              :minutesTxt="':'"
              :secondsTxt="''"
            ></Countdown>
          </div>
          <div class="spike-bottom">
            <img :src="items.imgUrl" alt="" />
            <div class="bottom-title">
              <p>{{ items.title }}</p>
              <div class="bottom-price">
                <span>￥{{ items.price }}</span>
                <p>剩下{{ items.num }}</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import Countdown from "vue2-countdown";
export default {
  props:['spikeList'],
  components: {
    Countdown,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    
    };
  },
};
</script>
<style scoped>
.spike {
  width: 100%;
  height: 4.37777rem;
}
.spike-content {
  padding: 0.3rem;
}
.spike-top {
  width: 100%;
  height: 1.29333rem;
  display: flex;
  align-items: center;
  font-size: 0.35rem;
}
.spike-top img {
  height: 0.413rem;
  width: 1.89333rem;
}
.spike-top span {
  margin-left: 0.15rem;
}
.spike-top > div {
  margin-left: 0.15rem;
}
.spike-top >>> div span {
  margin-left: 0.15rem;
  color: #fff;
  border-radius: 0.1rem;
  background: #8b8b8b;
}
.spike-bottom {
  display: flex;
  justify-content: space-between;
}
.spike-bottom img {
  width: 3.09333rem;
  height: 2.12rem;
}
.spike-bottom .bottom-title {
  width: 5.86rem;
}
.bottom-title p {
  line-height: 0.38rem;
  color: #333333;
  font-size: 0.35rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.bottom-price {
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.35rem;
}
.bottom-price p {
  padding: 0.1rem;
  border: 1px solid #444444;
  color: #444444;
  border-radius: 0.1333rem;
  background: #fed101;
}
.swiper-pagination {
  overflow: visible;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: orange;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 1px;
}
</style>

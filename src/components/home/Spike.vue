<template>
  <div class="spike">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <div class="spike-top">
          <img src="@/assets/img/spike1.png" alt="" srcset="" />
          <span>距离结束：</span>
          <span>37天</span>
          <span>10</span>
          <span>:</span>
          <span>10</span>
          <span>:</span>
          <span>10</span>
        </div>
        <div class="spike-bottom">
          <img src="img/spike2.jpg" alt="" />
          <div class="bottom-title">
            <p>士大夫操作系统差味儿无形资产阿萨德发送到a</p>
            <div class="bottom-price">
              <span>￥999</span>
              <p>剩下285个</p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
    };
  },
};
</script>
<style scoped>
.spike {
  padding: 0.3rem;
  height: 4.37777rem;
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
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: center;
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
  bottom: -0.8rem;
}
</style>

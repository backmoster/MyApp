<template>
  <div class="swiper">
    <div class="swiper-content">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img src="@/assets/img/swiper1.png" alt="" srcset="" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/swiper2.png" alt="" srcset="" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
    };
  },
};
</script>
<style scoped>

.swiper-content{
    width: 100%;
    height: 3.2rem;
}
.swiper-content img{
    width: 100%;
    height: 3.2rem;
}
.swiper-pagination >>>.swiper-pagination-bullet-active{
    background: orange;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 4px;    
}
</style>

<template>
  <div class="like">
    <div class="like-list" v-for="items in likeList" :key="items.index">
      <div class="like-top">
        <div class="top-left">
          <span>{{items.title}}</span>
        </div>
        <p class="top-right">更多></p>
      </div>
      <div class="like-bottom">
        <div class="bottom-header"
            :style="{'background':'url('+items.imgUrl+') no-repeat center center'}"
        >
          <div class="header-info">
            <span>{{items.Introduction}}</span>
            <span>￥{{items.price}}起</span>
          </div>
        </div>
        <ul>
          <li v-for="v in items.cityList" :key='v.index'>
            <img :src="v.imgUrl" alt="" />
            <span class="title">{{v.title}}</span>
            <span class="price">￥{{v.price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['likeList'],

};
</script>
<style scoped>
.like {
    padding-bottom: 1.5rem;
  margin-top: 0.7rem;
  font-size: 0.35rem;
}
.like-list{
    margin-top: .4rem;
}
.like-top {
  display: flex;
  justify-content: space-between;
}
.like-top .top-left {
  position: relative;
}
.like-top .top-left span {
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.like-top .top-left:before {
  position: absolute;
  content: "";
  background: #fed101;
  width: 0.1rem;
  height: 0.5rem;
  top: 0;
}
.like-top .top-right {
  padding-right: 0.5rem;
  color: #999;
  font-size: 0.4rem;
  font-weight: 300;
}
.like-bottom {
  padding: 0.3rem;
}
.like-bottom .bottom-header {
  position: relative;
  background-size: 100%;
  width: 100%;
  height: 4.4666rem;
}
.like-bottom .bottom-header .header-info {
  position: absolute;
  bottom: 0.26rem;
  left: 0.2rem;
  display: flex;
  justify-content: space-between;

}
.like-bottom .bottom-header .header-info span:nth-child(1) {
  font-size: 0.5rem;
  color: #ffffff;
  font-weight: 700;
  width: 5.78rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.like-bottom .bottom-header .header-info span:nth-child(2) {
  font-size: 0.45rem;
  color: orange;
  font-weight: 400;
  margin-left: 1rem;
}
.like-bottom ul {
  display: flex;
  justify-content: space-between;
  margin-top: .3rem;
}
.like-bottom ul li{
   
    width: 2.96rem;
}
.like-bottom ul li span.title {
  font-size: 0.35rem;
  display: block;
  margin-top: .2rem;
  height: .69333rem;
  width: 100%;
  overflow: hidden;
 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

}
.like-bottom ul li span.price {
  margin-top: 0.2rem;
  display: block;
  font-size: 0.35rem;
  color: orange;
  font-weight: 500;
 
}
.like-bottom ul li img {
  width: 100%;
  height: 1.95rem;
}
</style>

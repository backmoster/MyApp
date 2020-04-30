<template>
  <div class="scroll">
    <div class="scroll-content">
      <div class="scroll-right">
        <ul :class="{ animatedTop }">
          <li v-for="items in scrollList" :key="items.index">
            <img src="@/assets/img/scroll.png" alt="" srcset="" />
            {{ items.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animatedTop: false,
      scrollList: [
        {
          id: 0,
          title: "清迈旅游落地签如何搞定？360°带你了解泰北小城清迈",
        },
        {
          id: 1,
          title: "港珠澳大桥怎么走？穿梭巴士预约及过关全攻略",
        },
        {
          id: 2,
          title: "港珠澳大桥怎么走？穿梭巴士预约及过关全攻略",
        },
        {
          id: 3,
          title: "清迈旅游落地签如何搞定？360°带你了解泰北小城清迈",
        },
        {
          id: 4,
          title: "港珠澳大桥怎么走？穿梭巴士预约及过关全攻略",
        },
        {
          id: 5,
          title: "清迈旅游落地签如何搞定？360°带你了解泰北小城清迈",
        },
      ],
    };
  },
  mounted() {
      setInterval(this.showScroll,2000)
  },
  methods: {
      showScroll(){
          this.animatedTop=true;
          setTimeout(()=>{
              //把第一个放在数组最后
              this.scrollList.push(this.scrollList[0])
              //把第一个元素删除
              this.scrollList.shift();
              this.animatedTop=false
          },500)
      }
  },
};
</script>
<style scoped>
.animatedTop {
  transition: all 0.5s;
  /* background: blue; */
  margin-top: -0.6666rem;
}
.scroll {
  padding: 0.2rem 0;
}
.scroll-content {
  background: url("http://localhost:8080/img/scroll.png") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 1.333rem;
  position: relative;
}
.scroll-right {
  position: absolute;
  right: 0;
  width: 8.13333rem;
  height: 1.3333rem;
  overflow: hidden;
}
li {
  font-size: 0.35rem;
  color: #333333;
  line-height: 0.6666rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
li img {
  width: 0.16rem;
  height: 0.16rem;
}
</style>

<template>
    <header>
       选择城市
      
       <i class="iconfont" @click="toHome" >&#xe6fe;</i>
     
    </header>
   
</template>
<style  scoped>
    header{
        background: #fed101;
        text-align: center;
        height: 1.173rem;
        line-height: 1.173rem;
        font-size: .5rem;
        position: relative;
        color: #333;
    }
    header i{
        position: absolute;
        right: .3rem;
        font-weight: 700;
    }
</style>
<script>
export default {
    methods:{
        toHome(){
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>
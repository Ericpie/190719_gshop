<template>
    <div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path === '/msite'}" @click="goto('/msite')"> 
        <span>
            <i class="iconfont icon-waimai"></i>
        </span>
        <span>首页</span>
    </span>

    <span class="guide-item" :class="{on: $route.path === '/search'}" @click="goto('/search')"> 
        <span>
            <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
    </span>

    <span class="guide-item" :class="{on: $route.path === '/order'}" @click="goto('/order')"> 
         <span>
            <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
    </span>

    <span class="guide-item" :class="{on: $route.path === '/profile'}"  @click="goto('/profile')"> 
         <span>
            <i class="iconfont icon-geren" ></i>
        </span>
        <span>个人</span> 

    </span>

    </div>
</template>>

<script>
export default {
    name:'FooterGuide',
    methods:{
        goto(path){
            // 编程式路由跳转 
            this.$router.replace(path) 
            }
        }
    } 
</script>

  

<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl';
.footer-guide
    display flex 
    top-border-1px(#ccc)
    position fixed
    left 0
    bottom 0
    height 50px
    width 100%
    .guide-item 
        display flex
        flex-direction column
        justify-content center
        width 25%
        &.on 
            color $green
        text-align  center
        span 
            font-size 12px
            i 
                font-size 22px
</style> 
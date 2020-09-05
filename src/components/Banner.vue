<!-- 轮播图组件 -->
<template>
  <div class="banners" v-if="Object.keys(banners).length!==0">
      <div class="bannerbase">
          <div class="bass"></div>
        <vant-swipe :autoplay="4000" indicator-color="whtie" class="bannerSwiper">
            <vant-swipe-item v-for="item in banners" :key="item.scm" class="swiperItem">
                <img :src="item.imageUrl" alt="">
            </vant-swipe-item>
        </vant-swipe>
      </div>
  </div>
</template>

<script>
import {getBanner} from "../network/api"
import {Swipe,SwipeItem} from "vant"
export default {
  name:"Banners",

  data () {
    return {
        banners:[]
    };
  },

  components: {
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
  },

  created(){
      this.getBanners()
  },

  methods: {
      async getBanners(){
          const{data:res} = await getBanner();
          this.banners = res.banners;
      }
  }
}

</script>
<style  scoped>
.banners{
    width: 100%;
    height: 100%;
}

.bannerbase{
    background-image: url('../assets/img/bgc/bgc.png');
    background-repeat: no-repeat;
}

.bannerSiwper{
    text-align: center;
    border-radius: 1.667vw;
}

.swiperItem img{
    width: 96%;
    height: 100%;
    border-radius: 1.667vw;
}
</style>
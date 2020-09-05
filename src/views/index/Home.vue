<!-- 主页 -->
<template>
  <div id="Home" class="wrapper" ref="wrapper">
     <Scroll :probeType="3" class="content" ref="scroll">
         <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
             <Banners></Banners>
             <Recommend></Recommend>
             <Personalized></Personalized>
             <PersonalizedNewSong></PersonalizedNewSong>
        </van-pull-refresh> 
        <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
     </Scroll>
  </div>
</template>

<script>
import Banners from "../../components/Banner"
import NavbarBtm from "../../components/NavbarBtm"
import Recommend from "../../components/Recommend"
import Personalized from "../../components/Personalized"
import PersonglizedNewSong from "../../components/PersonalizedNewSong"
import Scroll from "../../components/common/Scroll"
import { PullRefresh } from 'vant'
export default {
  name:"Home",

  components: {
      Banners,
      NavbarBtm,
      Recommend,
      Personalized,
      PersonalizedNewSong,
      Scroll,
      [PullRefresh.name]:PullRefresh
  },

  mounted(){
      this.initScroll();
  },

  activated(){
      this.initScroll();
  },

  data(){
      return{
          count:0,
          isLoading:false
      }
  },


  methods: {
      onRefresh(){
          setTimeout(()=>{
              if(this.count<9){
                  this.count++;
                  this.$refs.Personalized.getPersonalized(this.count*6,(this.count+1)*6)
              }else{
                  this.count = 0;
                  this.$refs.personalized.getPersonalized(this.count*6,(this.count+1)*6)
              }
              this.initScroll();
          },1000)
      },
      initScroll(){
          this.$nextTick(()=>{
              this.$refs.scroll.scroll.refresh();
          })
      }
  }
}

</script>
<style scoped>
#home{
    position: relative;
    overflow: hidden;
}

.content{
    height: calc(100vh-90px);
    overflow: hidden;
    position: absolute;
    top: 90px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>
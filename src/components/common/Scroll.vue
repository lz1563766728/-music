<!-- 滚动条 -->
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content"> 
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:3
        },
        //上拉加载更多
        pullUpLoad:{
            type:Boolean,
            default:false
        },
        //下拉加载更多
        pullDownLoad:{
            type:Boolean,
            default:false
        },
        scrollX:{
            type:Boolean,
            default:false
        }
    },
  data () {
    return {
        scroll:null
    };
  },

  mounted() {
      //1.创建BScroll对象
      this.$nextTick(()=>{
          this.scroll = new BScroll(this.$refs.warpper,{
              click:true,
              probeType:this.probeType,
              pullUpLoad:this.pullUpLoad,
              pullDownLoad:this.pullDownLoad,
              pullDownRefresh:{
                  threshold:30, //下拉超过30px触发
                  stop:0 //会谈停留在距离顶部0px的位置
              }
          })
      })

        //2.监听滚动的位置
      this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
      })

      //3.监听scroll滚动到底部
      if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
              this.$emit('pullingUp')
          })
      }
      if(this.pullDownLoad){
          this.scroll.pm('pullingDown',()=>{
              console.log('xiala');
              this.$store.dispatch('isLoad')
          })
      }
  },

  methods: {
      finishPullUp(){
          this.scroll && this.scroll.finishPullUp()
      },
      scrollToElement(){
          this.scroll && this.scroll.scrollToElement.apply(this.scroll.arguments)
      }
  }
}

</script>
<style scoped>
</style>
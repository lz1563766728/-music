<!-- 导航栏下层 -->
<template>
  <div class="navbarBtm">
      <div class="navbarBtm-warpper"> 
          <div @click="homeClick(0)"> 
              <span :class="navCurrentIndex==0?'active':'inactive'">推荐</span>
          </div>
          <div @click="rankClik(1)">
              <span :class="navCurrentIndex==1?'active':'inactive'">歌单</span>
          </div>
          <div @click="raioseCLick(2)">
              <span :class="navCurrentIndex==2?'active':'inactive'">排行</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"NarbarBtm",
  data () {
    return {
        currentIndex:0
    };
  },

  methods: {
      homeClick(index){
          this.$router.push('/home')
          this.$store.commit("changeNavIndex",index)
      },
      rankClick(index){
          this.$router.push('/songcate')
          this.$store.commit("changeNavIndex",index)
      },
      raiosetClick(index){
          this.$router.push('/rank')
          this.$store.commit("changeNavIndex",index)
      }
  },

  computed: {
      ...mapstate(['navCurrentIndex'])
  }
}

</script>
<style scoped>
/*navbar下层*/
.navbarBtm{
    position: relative;
    top: 45px;
    z-index: 887;
    width: 100%;
    height: 45px;
    background-color: #e5473b;
    margin-bottom: 45px;
}

.navbarBtm-warpper{
    width: 100%;
    height: 100%;
    display: flex;
    vertical-align: middle;
    line-height: 45px;
    text-align: center;
    justify-content: space-between;
}

.navbarBtm-warpper div{
    flex: 1;
}

.active{
    padding: 0 1px 5px 1px;
    border-bottom: 1.5px solid white;
    font-size: 3.611vw;
    color: white;
    letter-spacing: 0.8px;
    color: white;
}

.inactive{
    padding: 0 1px 5px 1px;
    font-size: 3.472vw;
    color: white;
    letter-spacing: 0.8px;
    opacity: 0.7;
}
</style>
<!-- 上层导航栏 -->
<template>
  <div class="narbar">
      <div class="navbarTop">
          <div class="navmenus" @click="showPopup">
              <img src="../assets/img/navbar/menus.png" alt="">
          </div>
      <van-popup v-model="show" position="left" class="menusPopup">
          <div class="avatar"></div>
          <div class="mygit" @clcik="gitClick">
              <img src="../assets/img/github.png" alt="">
              <span>github</span>
          </div>
      </van-popup>

      <div class="navicon">
          <div class="navicon-warpper"> 
              <div class="nav-mine" @click="navmineClick(0)" :class="currentIndex==0?'':'inactive'">
                  <img src="../assets/img/navbar/navmusicAct.svg" alt/>
              </div>
              <div class="nav-home" @click="navhomeClick(1)" :class="currentIndex!==1?'':'inactive'">
                  <img src="../assets/img/navbar/3.svg" alt/>
              </div>
              <div class="nav-videomv" @click="navvideomvClick(2)" :class="currentIndex!==2?'':'inactive'">
                  <img src="../assets/img/navbar/navplay.svg" alt/>
              </div>
          </div>
      </div>
      <div class="navsearch" @click="searchClick">
          <img src="../assets/img/navbar/search.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {Popup} from "vant"
export default {
    name:"NavbarTop",
  data () {
    return {
        currentIndex:1,
        show:false
    };
  },

  components: {
      [Popup.name]:Popup
  },

  methods: {
      navmineClick(index){
          this.$router.push('/mine');
          this.currentIndex = index
      },

       navhomeClick(index){
          this.$router.push('/home');
          this.$store.commit('changeNavIndex',0)
          this.currentIndex = index
      },

       navvideomvClick(index){
          this.$router.push('/videomv');
          this.currentIndex = index
      },

      searchClick(){
          this.$router.push('/search')
      },

      //侧边栏
      menusClick(){
          this.$store.commit('openMenus')
      },

      //github 网易云api链接
      gitClick(){
          window.open("https://github.com/Binaryify/NeteaseCloudMusicApi")
      }

  }
}

</script>
<style scoped>
.menusPopup{
    z-index: 1001;
    background-color: white;
}

/*navbar上层*/
.navbarTop{
    height: 45px;
    display: flex;
    text-align: center;
    line-height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #e5473b;
    width: 100%;
    z-index: 888;
}

.navmenus{
    flex: 1;
    background-color: #e5473b;
}

.navicon{
    flex: 6;
    background-color: #e5473b;
}

/*中间icon区*/
.nav-warpper{
    width: 50%;
    background-color: #e5473b;
    transform: translate(50%);
    display: flex;
    justify-content: space-between;
}

img{
    width: 7.222vw;
    vertical-align: middle;
}

.nav-mine{
    background-color: #e5473b;
}

.nav-home{
    background-color: #e5473b;
}

.nav-videomv{
    background-color: #e5473b;
}

.inactvie{
    opacity: 0.4;
}
</style>
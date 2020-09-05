<!-- 推荐歌单 -->
<template>
  <div class="personlized">
      <div class="recommendmore" @click="recommendClick">推荐歌单</div>
      <div class="playcard" v-if="list.length">
          <PlayCard v-for="item in list"
            :desc="item.copywriter"
            :id="item.id"
            :img="item.picUrl"
            :key="item.id"
            :name="item.name"
            :playcount="item.playCount"
          >
          </PlayCard>
      </div>
  </div>
</template>

<script>
import {getPersonalized, getPersonalizedNewSong} from '../network/api'
import PlayCard from  "./common/PlayCard"
export default {
    name:"Personalized",
  data () {
    return {
        list:[]
    };
  },

  components: {PlayCard},

  methods: {
      async getPersonalized(a,b){
          //只获取六组数据进行渲染展示
          const {data:res} = await getPersonalized({ limit:60 })
          this.list = res.result.slice(a,b)       
      },
      recommendClick(){
          this.$router.push('/topplaylist')
      }
  }
}

</script>
<style  scoped>
.playcard{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.recommendmore{
    margin: 3.33vw 0 0 0px;
    font-size: 3.889vw;
    border-left: 0.417vw solid red;
    padding: 0 0 0 6px;
}
</style>
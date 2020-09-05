<!-- 最新音乐 -->
<template>
  <div class="newsong">
      <span class="personalizednewsong">最新音乐</span>
      <NewSong id="NewSong"></NewSong>
  </div>
</template>

<script>
import NewSong from "../components/common/NewSong"
export default {
  components: {
      NewSong
  }

}

</script>
<style scoped>
.newsong{
    margin-top: 2.778vw;
}

.personalizednewsong{
    font-size: 3.889vw;
    border-left: 0.417vw solid red;
    padding: 0 0 0 1.667vw;
}

#NewSong{
    margin-top: -1.667vw;
}
</style>
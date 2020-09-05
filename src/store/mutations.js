export default{
    //添加歌曲
    addToCurrentPlay(state,currentPlay){
        this.state.currentPlay = currentPlay;
    },
    //添加到播放列表
    addToPlayList(state,currentPlay){
        state.songList.unshift(currentPlay)
    },
    //列表播放
    listToPlay(state,index){
        //把对应索引传到播放列表中
        state.currentPlay = state.songList[index]
        state.currentIndex = index
    },
    //移除列表的item
    removeItemByIndex(state,id){
        state.songList.splice(id,1)
    },
    //播放上一首
    playLastSong(state){
        state.currentIndex--;
        if(state.currentIndex > state.songList.length){
            state.currentIndex = 1
        }
        state.currentPlay = state.songList[state.currentIndex-1]
        state.playing = true
    },

    play(state){
        if(state.songList.length > 0){
            state.playing = true;
            console.log('play');
        }else{
            return
        }
    },
    pause(state){
        if(state.songList.length >0){
            state.playing = false;
            console.log('pause');
        }
    },
    //设置播放进度
    setCurrentTime(state,data){
        state.currentTime = data;
    },
    //设置loading组件是否显示
    setLoad(state,show){
        state.isLoad = show;
    },
    //改变导航栏索引
    changeNavBarIndex(state,index){
        state.narCurrentIndex = index;
    }
}
import { Dispatch } from "redux";
import * as actionTypes from "./constants";
import { getSongDetail,getLyric } from "../request";
import { ISongs, ISongRes,EnumSequence } from "../data.d";



export interface IChangeCurrentSongAction {
  type: typeof actionTypes.CHANGE_CURRENT_SONG;
  currentSong: ISongs;
}

export interface IChangePlayListAction {
  type: typeof actionTypes.CHANGE_PLAY_LIST;
  playList:ISongs[]
}

export interface IChangeCurrentSongIndexAction {
  type:typeof actionTypes.CHANGE_CURRENT_SONG_INDEX;
  index:number
}
export interface IChangeSequenceAction {
  type: typeof actionTypes.CHANGE_SEQUENCE;
  sequence: EnumSequence;
}
export type ISongActionTypes = IChangeCurrentSongAction | IChangePlayListAction | IChangeCurrentSongIndexAction | IChangeSequenceAction;
export const changeCurrentSongAction = (currentSong: ISongs) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong,
});

export const changePlayListAction = (playList:ISongs[]) => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
})


export const ChangeSequenceAction = (sequence: EnumSequence) => ({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence

})

export const changeCurrentSongIndexAction = (index:number) => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})



export const changeCurrentSongAndIndexAction = (tag:number) => {
  return (dispatch:Dispatch,getState:Function) => {

    const playList:ISongs[] = getState().player.playList

    const sequence:EnumSequence = getState().player.sequence

    let currentSongIndex:number = getState().player.currentSongIndex
    switch(sequence) {
      case EnumSequence.Random:
        let randomIndex = Math.floor(Math.random() * playList.length)
        currentSongIndex = randomIndex
        break
        default:
          currentSongIndex += tag;
          if (currentSongIndex >= playList.length) currentSongIndex = 0
          if(currentSongIndex < 0) currentSongIndex = playList.length - 1
    }
    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
  }
}



export const getSongDetailAction = (ids: number) => {
  return (dispatch:Dispatch, getState:Function) => {
    const playList:ISongs[] = getState().player.playList

    const songIndex = playList.findIndex(song => song.id === ids)

    let song = null
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
    } else {
      getSongDetail(ids).then((res: ISongRes) => {
        song = res.songs?.[0]
        if(!song) return

        const newPlayList = [...playList]
        newPlayList.push(song)

        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song));
      });
    }

    if (!song) return;
    // dispatch(getLyricAction(song.id))
    dispatch(getLyricAction(song.id))
  };
};



export const getLyricAction = (id:number) => {
  return (dispatch:Dispatch) => {
    getLyric(id).then(res => {
      console.log(res)
    })
  }
}

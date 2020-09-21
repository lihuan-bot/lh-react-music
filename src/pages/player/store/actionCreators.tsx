import { Dispatch } from "redux";
import * as actionTypes from "./constants";
import { getSongDetail } from "../request";
import { ISongs, ISongRes } from "../data.d";

export interface IChangeCurrentSongAction {
  type: typeof actionTypes.CHANGE_CURRENT_SONG;
  currentSong: ISongs;
}
export type ISongActionTypes = IChangeCurrentSongAction;
export const changeCurrentSong = (currentSong: ISongs) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong,
});
export const getSongDetailAction = (ids: number) => {
  return (dispatch: Dispatch) => {
    getSongDetail(ids).then((res: ISongRes) => {
      dispatch(changeCurrentSong(res?.songs[0]));
    });
  };
};

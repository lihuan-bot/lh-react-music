import { produce, Draft, castDraft } from "immer";
import { ISongActionTypes } from "./actionCreators";
import { IPlayeSongrState, ISongs } from "../data";
import * as actionTypes from "./constants";

const defaultStare: IPlayeSongrState = {
  currentSong: {} as ISongs,
  playList: [],
  currentSongIndex: 0,
  sequence: 0,
};

const reducer = produce(
  (draftState: Draft<IPlayeSongrState>, action: ISongActionTypes) => {
    switch (action.type) {
      case actionTypes.CHANGE_CURRENT_SONG:
        draftState.currentSong = castDraft(action.currentSong);
        break;
        case actionTypes.CHANGE_PLAY_LIST:
          draftState.playList = castDraft(action.playList);
          break;
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
          draftState.currentSongIndex = action.index;
          break;
        case actionTypes.CHANGE_SEQUENCE:
          draftState.sequence = action.sequence;
          break;
    }
  },
  defaultStare
);
export default reducer;

import { produce, Draft, castDraft } from "immer";
import { ISongActionTypes } from "./actionCreators";
import { IPlayeSongrState, ISongs } from "../data";
import * as actionTypes from "./constants";

const defaultStare: IPlayeSongrState = {
  currentSong: {} as ISongs,
};

const reducer = produce(
  (draftState: Draft<IPlayeSongrState>, action: ISongActionTypes) => {
    switch (action.type) {
      case actionTypes.CHANGE_CURRENT_SONG:
        draftState.currentSong = castDraft(action.currentSong);
        break;
    }
  },
  defaultStare
);
export default reducer;

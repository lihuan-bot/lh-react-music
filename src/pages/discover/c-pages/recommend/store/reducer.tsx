import { produce, Draft, castDraft } from "immer";
import * as actionTypes from "./constants";
import { IRecommendState } from "../data.d";

import { RecommendActionTypes } from "./actionCreators";
const defaultState: IRecommendState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: [],
  newRanking: [],
  originRanking: [],
};
const reducer = produce(
  (draftState: Draft<IRecommendState>, action: RecommendActionTypes) => {
    switch (action.type) {
      case actionTypes.CHANGE_TOP_BANNERS:
        draftState.topBanners = action.topBanners;
        break;
      case actionTypes.CHANGE_HOT_RECOMMENDS:
        draftState.hotRecommends = action.hotRecommends;
        break;
      case actionTypes.CHANGE_NEW_ALBUM:
        draftState.newAlbums = castDraft(action.albums);
        break;
      case actionTypes.CHANGE_UP_RANKING:
        draftState.upRanking = castDraft(action.upRanking);
        break;
      case actionTypes.CHANGE_NEW_RANKING:
        draftState.newRanking = castDraft(action.newRanking);
        break;
      case actionTypes.CHANGE_ORIGIN_RANKING:
        draftState.originRanking = castDraft(action.originRanking);
    }
  },
  defaultState
);

export default reducer;

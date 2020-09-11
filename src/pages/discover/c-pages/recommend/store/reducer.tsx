import { produce, Draft } from "immer";
import * as actionTypes from "./constants";
import { IRecommendState } from "../data.d";

import { RecommendActionTypes } from "./actionCreators";
const defaultState: IRecommendState = {
  topBanners: [],
};
const reducer = produce(
  (draftState: Draft<IRecommendState>, action: RecommendActionTypes) => {
    switch (action.type) {
      case actionTypes.CHANGE_TOP_BANNERS:
        draftState.topBanners = action.topBanners;
        break;
    }
  },
  defaultState
);

export default reducer;

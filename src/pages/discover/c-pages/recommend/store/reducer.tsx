import * as actionTypes from "./constants";
import { IRecommendState } from '../data.d'

import { RecommendActionTypes } from './actionCreators'
const defaultState:IRecommendState = {
  topBanners: [],
};
const reducer = (state = defaultState, action: RecommendActionTypes):IRecommendState => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "./constants";

const defaultState = {
  topBanners: [],
};
const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners };
    default:
      return state;
  }
};
export default reducer;

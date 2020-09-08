import * as actionTypes from "./constants";

import { getTopBanners } from "@/network/recommend";
const changeTopBannerAction = (res: any) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
export const getTopBannerAction = () => {
  return (dispatch: any) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

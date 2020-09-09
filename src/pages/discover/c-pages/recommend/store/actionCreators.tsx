
import { Dispatch } from 'redux'
import * as actionTypes from "./constants";
import { ITopBannerRes,ITopBanner } from '../data.d'

import { getTopBanners } from "../request";
export interface IChangeTopBannerAction{
  type: typeof actionTypes.CHANGE_TOP_BANNERS,
  topBanners:ITopBanner[]
}
export type RecommendActionTypes = IChangeTopBannerAction
export const changeTopBannerAction = (res: ITopBannerRes) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
export const getTopBannerAction = () => {
  return (dispatch: Dispatch) => {
    getTopBanners().then((res:ITopBannerRes) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

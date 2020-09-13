import { Dispatch } from "redux";
import * as actionTypes from "./constants";
import {
  ITopBannerRes,
  ITopBanner,
  IHotRecommend,
  IHotRecommendRes,
  INewAlbum,
  INewAlbumRes,
} from "../data.d";

import { getTopBanners, getHotRecommend, getNewAlbum } from "../request";
export interface IChangeTopBannerAction {
  type: typeof actionTypes.CHANGE_TOP_BANNERS;
  topBanners: ITopBanner[];
}
export interface IChangeHotRecommendsAction {
  type: typeof actionTypes.CHANGE_HOT_RECOMMENDS;
  hotRecommends: IHotRecommend[];
}
export interface IChangeNewAlbumAction {
  type: typeof actionTypes.CHANGE_NEW_ALBUM;
  albums: INewAlbum[];
}
export type RecommendActionTypes =
  | IChangeTopBannerAction
  | IChangeHotRecommendsAction
  | IChangeNewAlbumAction;
export const changeTopBannerAction = (res: ITopBannerRes) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
export const changeHotRecommendAction = (res: IHotRecommendRes) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});
export const changeNewAlbumAction = ({ monthData }: INewAlbumRes) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  albums: monthData,
});
export const getTopBannerAction = () => {
  return (dispatch: Dispatch) => {
    getTopBanners().then((res: ITopBannerRes) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
export const getHotRecommendAction = (limit: number) => {
  return (dispatch: Dispatch) => {
    getHotRecommend(limit).then((res: IHotRecommendRes) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};
export const getNewAlbumAction = (limit: number) => {
  return (dispatch: Dispatch) => {
    getNewAlbum(limit).then((res: INewAlbumRes) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

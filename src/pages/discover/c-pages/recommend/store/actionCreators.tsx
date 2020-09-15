import { Dispatch } from "redux";
import * as actionTypes from "./constants";
import {
  ITopBannerRes,
  ITopBanner,
  IHotRecommend,
  IHotRecommendRes,
  INewAlbum,
  INewAlbumRes,
  IPlaylist,
  IRankRes,
} from "../data.d";

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
} from "../request";
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
export interface IChangeUpRankingAction {
  type: typeof actionTypes.CHANGE_UP_RANKING;
  upRanking: IPlaylist[];
}
export interface IChangeNewRankingAction {
  type: typeof actionTypes.CHANGE_NEW_RANKING;
  newRanking: IPlaylist[];
}
export interface IChangeOriginRankingAction {
  type: typeof actionTypes.CHANGE_ORIGIN_RANKING;
  originRanking: IPlaylist[];
}
export type RecommendActionTypes =
  | IChangeTopBannerAction
  | IChangeHotRecommendsAction
  | IChangeNewAlbumAction
  | IChangeOriginRankingAction
  | IChangeUpRankingAction
  | IChangeNewRankingAction;
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
export const changeUpRankingAction = ({ playlist }: IRankRes) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: playlist,
});
export const changeNewRankingAction = ({ playlist }: IRankRes) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: playlist,
});
export const changeOriginRankingAction = ({ playlist }: IRankRes) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: playlist,
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
export enum EnumRanking {
  UPRanking = 19723756,
  NewRnaking = 3779629,
  OriginRanking = 2884035,
}
export const getTopListAction = (id: EnumRanking) => {
  return (dispatch: Dispatch) => {
    getTopList(id).then((res) => {
      switch (id) {
        case EnumRanking.UPRanking:
          dispatch(changeUpRankingAction(res));
          break;
        case EnumRanking.NewRnaking:
          dispatch(changeNewRankingAction(res));
          break;
        case EnumRanking.OriginRanking:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};

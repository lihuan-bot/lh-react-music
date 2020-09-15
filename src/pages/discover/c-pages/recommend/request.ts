import request from "@/network/request";
import { EnumRanking } from "./store/actionCreators";
export const getTopBanners = () => {
  return request({
    url: "/banner",
  });
};
export const getHotRecommend = (limit = 10) => {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
};
export const getNewAlbum = (limit = 10) => {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
};
export const getTopList = (id: EnumRanking) => {
  return request({
    url: "/top/list",
    params: {
      id,
    },
  });
};

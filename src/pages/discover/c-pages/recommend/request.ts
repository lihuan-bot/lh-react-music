import request from "@/network/request";
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
export const getTopList = (idx: number) => {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
};

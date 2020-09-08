import request from "./request";
export const getTopBanners = () => {
  return request({
    url: "/banner",
  });
};

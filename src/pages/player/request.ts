import request from "@/network/request";

export const getSongDetail = (ids: number) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};

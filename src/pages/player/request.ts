import request from "@/network/request";

export const getSongDetail = (ids: number) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};
export const getLyric = (id:number) =>{
  return request({
    url: '/lyric',
    params:{
      id
    }
  })
}
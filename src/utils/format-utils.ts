export const getCount = (count: number) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};
export const getSizeImage = (imgUrl: string, size: number) => {
  return `${imgUrl}?param=${size}x${size}`;
};

export function getPlaySong(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

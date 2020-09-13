export interface ITopBanner {
  encodeId: string;
  exclusive: boolean;
  imageUrl: string;
  scm: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  [propName: string]: any;
}

export interface ITopBannerRes {
  banners: ITopBanner[];
  code: number;
}
export interface IHotRecommend {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  hightQyality: boolean;
  alg: string;
}
export interface IHotRecommendRes {
  hasTaste: boolean;
  code: number;
  category: number;
  result: IHotRecommend[];
}
export interface INewAlbum {
  songs: readonly any[];
  paid: boolean;
  onSale: boolean;
  description: string;
  picId: number;
  artist: any;
  company: string;
  copyrightId: number;
  status: number;
  alias: readonly any[];
  artists: readonly any[];
  commentThreadId: string;
  publishTime: string;
  picUrl: string;
  briefDesc: string;
  subType: string;
  tags: string;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  isSub: boolean;
}
export interface INewAlbumRes {
  hasMore: boolean;
  monthData: INewAlbum[];
  code: number;
}
export interface IRecommendState {
  topBanners: ITopBanner[];
  hotRecommends: IHotRecommend[];
  newAlbums: INewAlbum[];
}

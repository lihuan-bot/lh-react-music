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
  songs: ReadonlyArray<any>;
  paid: boolean;
  onSale: boolean;
  description: string;
  picId: number;
  artist: any;
  company: string;
  copyrightId: number;
  status: number;
  alias: ReadonlyArray<any>;
  artists: ReadonlyArray<any>;
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
interface ICreator {
  accountStatus: number;
  authStatus: number;
  authority: number;
  [propName: string]: any;
}
export interface IPlaylist {
  ToplistType: string;
  adType: number;
  backgroundCoverId: number;
  backgroundCoverUrl: any;
  cloudTrackCount: number;
  commentCount: number;
  commentThreadId: string;
  coverImgId: number;
  coverImgId_str: string;
  coverImgUrl: string;
  createTime: number;
  creator: ICreator;
  description: string;
  englishTitle: any;
  highQuality: boolean;
  id: number;
  name: string;
  newImported: boolean;
  opRecommend: boolean;
  ordered: boolean;
  playCount: number;
  privacy: number;
  shareCount: number;
  specialType: number;
  status: number;
  subscribed: any;
  subscribedCount: number;
  subscribers: ReadonlyArray<any>;
  tags: ReadonlyArray<any>;
  itleImage: number;
  titleImageUrl: any;
  trackCount: number;
  trackIds: readonly { alg: any; id: number; v: number }[];
  trackNumberUpdateTime: number;
  trackUpdateTime: number;
  tracks: readonly {
    name: string;
    id: number;
    dt: number;
    [propName: string]: any;
  }[];
  updateFrequency: any;
  updateTime: number;
  userId: number;
}
export interface IRankRes {
  playlist: IPlaylist;
  code: number;
}
export interface IRecommendState {
  topBanners: ITopBanner[];
  hotRecommends: IHotRecommend[];
  newAlbums: INewAlbum[];
  upRanking: IPlaylist[];
  newRanking: IPlaylist[];
  originRanking: IPlaylist[];
}

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
  code?: number;
}
export interface IRecommendState {
  topBanners: ITopBanner[];
}

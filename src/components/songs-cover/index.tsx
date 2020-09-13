import React, { memo, FC } from "react";
import { SongsCoverWrapper } from "./style";
import { IHotRecommend } from "@/pages/discover/c-pages/recommend/data";
import { getCount, getSizeImage } from "@/utils/format-utils";
export interface IProps {
  info: IHotRecommend;
}
const LHSongCover: FC<IProps> = ({ info }) => {
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <i className="sprite_icon erji"></i>
            {getCount(info.playCount)}
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">by{info.copywriter}</div>
    </SongsCoverWrapper>
  );
};
export default memo(LHSongCover);

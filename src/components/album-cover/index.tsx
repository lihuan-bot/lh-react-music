import React, { memo, FC } from "react";
import { AlbumWrapper } from "./style";
import { INewAlbum } from "@/pages/discover/c-pages/recommend/data";
import { getSizeImage } from "@/utils/format-utils";
interface IProps {
  info: INewAlbum;
  width?: number;
  size?: number;
  bgp?: string;
}
const LHAlbumCover: FC<IProps> = ({
  info,
  width = 153,
  size = 130,
  bgp = "-845px",
}) => {
  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="cover image-cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};
export default memo(LHAlbumCover);

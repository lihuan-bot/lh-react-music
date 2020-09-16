import React, { memo, FC } from "react";

import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { IPlaylist } from "@/pages/discover/c-pages/recommend/data";
interface IProps {
  info: IPlaylist;
}
const LHTopRanking: FC<IProps> = ({ info }) => {
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {info.tracks?.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
};
export default memo(LHTopRanking);

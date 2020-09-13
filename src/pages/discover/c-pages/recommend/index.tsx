import React, { memo, FC } from "react";
import LHTopBanner from "./components/top-banner";
import LHHotRecommend from "./components/hot-recommend";
import LHNewAlbum from "./components/new-album";
import LHRecommendRanking from "./components/recommend-ranking";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
const LHRecommend: FC = () => {
  return (
    <RecommendWrapper>
      <LHTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <LHHotRecommend />
          <LHNewAlbum />
          <LHRecommendRanking />
        </RecommendLeft>

        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};
export default memo(LHRecommend);

import React, { FC, memo } from "react";
import LHThemeHeaderRecommend from "@/components/theme-header-recommend";
import { RankingWrapper } from "./style";
const LHRecommendRanking: FC = () => {
  return (
    <RankingWrapper>
      <LHThemeHeaderRecommend title="榜单" />
    </RankingWrapper>
  );
};
export default memo(LHRecommendRanking);

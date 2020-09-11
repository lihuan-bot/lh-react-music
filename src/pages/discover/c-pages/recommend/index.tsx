import React, { memo, FC } from "react";
import LHTopBanner from "./components/top-banner";
import { RecommendWrapper } from "./style";
const LHRecommend: FC = () => {
  return (
    <RecommendWrapper>
      <LHTopBanner />
    </RecommendWrapper>
  );
};
export default memo(LHRecommend);

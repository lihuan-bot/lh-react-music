import React, { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import LHThemeHeaderRecommend from "@/components/theme-header-recommend";
import { RankingWrapper } from "./style";
import { getTopListAction } from "@/pages/discover/c-pages/recommend/store/actionCreators";
import { EnumRanking } from "@/pages/discover/c-pages/recommend/store/actionCreators";

const LHRecommendRanking: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(EnumRanking.UPRanking));
    dispatch(getTopListAction(EnumRanking.NewRnaking));
    dispatch(getTopListAction(EnumRanking.OriginRanking));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <LHThemeHeaderRecommend title="榜单" />
    </RankingWrapper>
  );
};
export default memo(LHRecommendRanking);

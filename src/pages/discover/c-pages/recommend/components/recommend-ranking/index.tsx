import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LHThemeHeaderRecommend from "@/components/theme-header-recommend";
import LHTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";
import { getTopListAction } from "@/pages/discover/c-pages/recommend/store/actionCreators";
import { EnumRanking } from "@/pages/discover/c-pages/recommend/store/actionCreators";
import { AppState } from "@/store/reducer";

const LHRecommendRanking: FC = () => {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state: AppState) => ({
      upRanking: state.recommend.upRanking,
      newRanking: state.recommend.newRanking,
      originRanking: state.recommend.originRanking,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(EnumRanking.UPRanking));
    dispatch(getTopListAction(EnumRanking.NewRnaking));
    dispatch(getTopListAction(EnumRanking.OriginRanking));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <LHThemeHeaderRecommend title="榜单" />
      <div className="tops">
        <LHTopRanking info={upRanking} />
        <LHTopRanking info={newRanking} />
        <LHTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
};
export default memo(LHRecommendRanking);

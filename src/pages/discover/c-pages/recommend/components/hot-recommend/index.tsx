import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
import LHThememHeaderRecommend from "@/components/theme-header-recommend";
import LHSongsCover from "@/components/songs-cover";
import { getHotRecommendAction } from "../../store/actionCreators";
import { AppState } from "@/store/reducer";
const LHHotRecommend: FC = () => {
  const { hotRecommends } = useSelector(
    (state: AppState) => ({
      hotRecommends: state.recommend.hotRecommends,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <LHThememHeaderRecommend
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <LHSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
};
export default memo(LHHotRecommend);

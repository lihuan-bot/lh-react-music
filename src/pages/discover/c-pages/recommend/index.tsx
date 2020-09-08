import React, { memo, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";

const LHRecommend: FC = (props: any) => {
  const { topBanners } = useSelector((state: any) => ({
    topBanners: state.recommend.topBanners,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return <div>LHRecommend{topBanners.length}</div>;
};
export default memo(LHRecommend);
// import React, { memo, FC, useEffect } from "react";
// import { connect } from "react-redux";
// import { getTopBannerAction } from "./store/actionCreators";

// const LHRecommend: FC = (props: any) => {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return <div>LHRecommend{topBanners.length}</div>;
// };
// const mapStateToProps = (state: any) => ({
//   topBanners: state.recommend.topBanners,
// });
// const mapDispatchToProps = (dispatch: any) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(memo(LHRecommend));

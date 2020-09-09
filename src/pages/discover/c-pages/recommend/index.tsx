import React, { memo, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";
import { AppState } from '@/store/reducer'



const LHRecommend: FC = () => {
  const { topBanners } = useSelector((state:AppState) => ({
    topBanners: state.recommend.topBanners,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (<div>LHRecommend{topBanners.map(item => {
    return <img key={item.imageUrl} src={item.imageUrl} alt=''/>
    })}</div>);
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

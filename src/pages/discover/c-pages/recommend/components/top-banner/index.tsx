/*
 * @Author: lihuan
 * @Date: 2020-10-28 14:37:57
 * @LastEditTime: 2021-08-03 09:00:54
 * @Email: 17719495105@163.com
 */
import React, {
  memo,
  FC,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from "@/pages/discover/c-pages/recommend/store/actionCreators";
import { AppState } from "@/store/reducer";
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel } from "antd";
const LHTopBanner: FC = () => {
  // 获取轮播图dom
  const bannerRef = useRef<Carousel>(null);
  // 记录当前轮播图下标
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // 获取redux中轮播图数据
  const { topBanners } = useSelector(
    (state: AppState) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerChange = useCallback((_, to: number) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);
  const bgImage =
    // topBanners[currentIndex] && `${topBanners[currentIndex]?.imageUrl}?imageView&blur=40x20`;
    // 使用es2020语法
    `${topBanners?.[currentIndex]?.imageUrl}?imageView&blur=40x20`;
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners?.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="img"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(LHTopBanner);

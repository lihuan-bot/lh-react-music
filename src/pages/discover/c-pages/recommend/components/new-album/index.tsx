import React, { FC, memo, useEffect, useRef } from "react";
import LHThemeHeaderRecommend from "@/components/theme-header-recommend";
import LHAlbumCover from "@/components/album-cover";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getNewAlbumAction } from "@/pages/discover/c-pages/recommend/store/actionCreators";
import { AppState } from "@/store/reducer";
import { AlbumWrapper } from "./style";
import { Carousel } from "antd";
const LHNewAlbum: FC = () => {
  const pageRef: React.MutableRefObject<any> = useRef();
  const { newAlbums } = useSelector(
    (state: AppState) => ({
      newAlbums: state.recommend.newAlbums,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <LHThemeHeaderRecommend title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((i) => {
                    return (
                      <LHAlbumCover
                        key={i.id}
                        info={i}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
};
export default memo(LHNewAlbum);

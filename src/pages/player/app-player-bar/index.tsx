import React, { FC, memo, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Slider } from "antd";
import dayjs from "dayjs";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { getSongDetailAction } from "../store/actionCreators";
import { AppState } from "@/store/reducer";

import { getSizeImage, getPlaySong } from "@/utils/format-utils";

const LHAppPlayerBar: FC = () => {
  const audioRef: React.MutableRefObject<any> = useRef();
  const { currentSong } = useSelector(
    (state: AppState) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(545413103));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play();
  }, [currentSong]);

  const playMusic = useCallback(() => {
    audioRef.current.play();
  }, []);
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={() => playMusic()}
          ></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(currentSong.al?.picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">
                {(currentSong.ar && currentSong.ar[0].name) || "未知歌手"}
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="devider">/</span>
                <span className="duration">
                  {dayjs(currentSong.dt).format("mm:ss")}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} />
    </PlaybarWrapper>
  );
};
export default memo(LHAppPlayerBar);

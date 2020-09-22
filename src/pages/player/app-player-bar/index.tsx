import React, { FC, memo, useState,useEffect, useRef, useCallback, ChangeEvent } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import { Slider } from "antd";
import dayjs from "dayjs";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { getSongDetailAction,ChangeSequenceAction,changeCurrentSongAndIndexAction } from "../store/actionCreators";
import { AppState } from "@/store/reducer";

import { getSizeImage, getPlaySong } from "@/utils/format-utils";



const LHAppPlayerBar: FC = () => {

const [currentTime, setCurrentTime] = useState<number>(0)
const [progress, setProgress] = useState<number>(0)
const [isChanging, setIsChanging] = useState<boolean>(false)
const [isPlaying, setIsPlaying] = useState<boolean>(false)



  const audioRef: React.MutableRefObject<any> = useRef();
  const { currentSong,sequence } = useSelector(
    (state: AppState) => ({
      currentSong: state.player.currentSong,
      sequence:state.player.sequence,
    }),
    shallowEqual
  );
  const dt  = currentSong?.dt
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(545413103));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong?.id);
    audioRef.current.play().then(() => {
        setIsPlaying(true)
    }).catch(() => {
      setIsPlaying(false)
    })
  }, [currentSong])

  const playMusic = useCallback(
    () => {
      isPlaying ? audioRef.current.pause() : audioRef.current.play()
      setIsPlaying(!isPlaying)
    },[isPlaying]
  );


  const sliderChange = useCallback((value) => {
    setIsChanging(true)
    const time = value / 100 * dt
    setCurrentTime(time)
    setProgress(value)
  }, [dt])

  const sliderAfterChange = useCallback((value) => {
    const time = value / 100 * dt / 1000
    audioRef.current.currentTime = time
    setCurrentTime(time * 1000)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  },[dt,isPlaying, playMusic])


  const timeUpdate = (e:ChangeEvent<HTMLAudioElement>) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / dt * 100)
    }
  }
 
const changeSequence = () => {
  let currentSequence = sequence + 1
  if(currentSequence > 2) {
    currentSequence = 0
  }
  dispatch(ChangeSequenceAction(currentSequence))
}

const changeMusic = (tag: number) => {
    dispatch(changeCurrentSongAndIndexAction(tag))
}
const handleMusicEnded = () => {
  if (sequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
  } else {
    dispatch(changeCurrentSongAndIndexAction(1))
  }
}

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={_ => changeMusic(-1)}></button>
          <button
            className="sprite_player play"
            onClick={_ => playMusic()}
          ></button>
          <button className="sprite_player next" onClick={_ => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="/#" className="singer-name">
                {currentSong?.ar?.[0].name ?? "未知歌手"}
              </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{dayjs(currentTime).format('mm:ss')}</span>
                <span className="devider">/</span>
                <span className="duration">
                  {dayjs(dt ?? 0).format("mm:ss")}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={_ => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}  onTimeUpdate={timeUpdate} onEnded={handleMusicEnded}/>
    </PlaybarWrapper>
  );
};
export default memo(LHAppPlayerBar);

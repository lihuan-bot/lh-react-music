export interface ISongs {
  name: string;
  id: number;
  ar: {
    id: number;
    name: string;
    tns: ReadonlyArray<any>;
    alias: ReadonlyArray<any>;
  }[];
  dt: number;
  al: {
    id: number;
    name: string;
    picUrl: string;
    tns: ReadonlyArray<any>;
    pic_str: string;
    pic: string;
  };
  [propName: string]: any;
}
export interface IPrivileges {
  [propName: string]: any;
}
export interface ISongRes {
  songs: ISongs[];
  privileges: IPrivileges[];
  code: number;
}
export enum EnumSequence {
  Cycle,
  Random,
  Single,
}
export interface ILyricList {
  time: number;
  content: string;
}
export interface ILyricRes {
  code: number;
  lrc: { lyric: string; version: number };
  [propsName: string]: any;
}
export interface IPlayeSongrState {
  currentSong: ISongs;
  playList: ISongs[];
  currentSongIndex: number;
  sequence: EnumSequence;
  lyricList: ILyricList[];
  currentLyricIndex: number;
}

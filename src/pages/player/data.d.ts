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
export interface IPlayeSongrState {
  currentSong: ISongs;
  playList: ISongs[];
  currentSongIndex: number;
  sequence: EnumSequence;
}

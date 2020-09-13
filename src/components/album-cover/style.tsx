import styled from "styled-components";

export interface IAlbum {
  width: number;
  size: number;
  bgp: string;
}
export const AlbumWrapper = styled.div`
  width: ${(props: Partial<IAlbum>) => props.width + "px"};

  .album-image {
    position: relative;
    width: ${(props: Partial<IAlbum>) => props.width + "px"};
    height: ${(props: Partial<IAlbum>) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props: Partial<IAlbum>) => props.size + "px"};
      height: ${(props: Partial<IAlbum>) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props: Partial<IAlbum>) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props: Partial<IAlbum>) => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`;

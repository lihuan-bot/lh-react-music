import React, { memo,FC } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

const  LHPlayer: FC = () => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>LHPlayerInfo</h2>
          <h2>LHSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>LHSimiPlaylist</h2>
          <h2>LHSimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
}


export default memo(LHPlayer)
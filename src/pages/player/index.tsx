import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function HYPlayer() {
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
});

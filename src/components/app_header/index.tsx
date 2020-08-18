import React, { memo, FC } from 'react'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';


const LHAppHeader:FC = () => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"></a>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="discover"></div>
    </HeaderWrapper>
  )
}
export default memo(LHAppHeader)


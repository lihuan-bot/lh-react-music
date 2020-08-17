import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style';

export default memo(function LHAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1"></div>
      <div className="discover"></div>
    </HeaderWrapper>
  )
})

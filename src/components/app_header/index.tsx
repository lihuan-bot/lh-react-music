import React, { memo, FC } from 'react'
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '@/common/local_data'


export interface IshowItem {
  title: string;
  link: string;
}
const LHAppHeader:FC = () => {
  const showItem = (item:IshowItem, index: number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
    return <a href={item.link} target="_blank" rel="noopener noreferrer">{ item.title}</a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01" />
          <div className="select-list">
            {
              headerLinks.map((item,index) => {
                return (
                <div className="select-item" key={item.title}>{showItem(item, index)}</div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="discover"></div>
    </HeaderWrapper>
  )
}
export default memo(LHAppHeader)


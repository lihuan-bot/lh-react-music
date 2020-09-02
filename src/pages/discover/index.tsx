import React, { memo, FC } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import { DiscoverWrapper, TopMenu } from "./style";
import { dicoverMenu } from "@/common/local_data";
const LHDiscover: FC<RouteConfig> = ({ route }) => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
};
export default memo(LHDiscover);

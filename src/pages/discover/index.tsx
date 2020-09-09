import React, { memo, FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import { DiscoverWrapper, TopMenu } from "./style";
import { dicoverMenu } from "@/common/local_data";
import request from "@/network/request";
interface Data {
  code: number;
  errorStr: string;
  banners: Array<any>;
}
const LHDiscover: FC<RouteConfig> = ({ route }) => {
  useEffect(() => {
    request<Data>({
      url: "/banner",
    }).then((res) => {
      console.log(res);
    });
  }, []);
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
          ‘
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
};
export default memo(LHDiscover);

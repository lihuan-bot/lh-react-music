import React from "react";
import { Redirect } from "react-router-dom";

import LHDiscover from "@/pages/discover";
import LHFriend from "@/pages/friend";
import LHMine from "@/pages/mine";

const routes = [
  {
    path: "/",
    exact: true,
    // render: () => <Redirect to="/discover" />,
    component: LHDiscover,
  },
  {
    path: "/discover",
    component: LHDiscover,
  },
  {
    path: "/mine",
    component: LHMine,
  },
  {
    path: "/friend",
    component: LHFriend,
  },
];
export default routes;

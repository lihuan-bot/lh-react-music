import React, { FC } from "react";

import { Redirect } from "react-router-dom";

const LHRedirect: FC = () => {
  return <Redirect to={"/discover"} />;
};
const LHDiscoverRedirect: FC = () => {
  return <Redirect to="/discover/recommend" />;
};

export { LHRedirect, LHDiscoverRedirect };

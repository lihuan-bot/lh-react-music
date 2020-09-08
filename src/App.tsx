import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import store from "./store";

import routes from "./router";

import LHAppHeader from "@/components/app_header";
import LHAppFooter from "@/components/app_footer";

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <LHAppHeader />
        {renderRoutes(routes)}
        <LHAppFooter />
      </HashRouter>
    </Provider>
  );
};

export default memo(App);

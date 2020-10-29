import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import routes from "./router";

import LHAppHeader from "@/components/app_header";
import LHAppFooter from "@/components/app_footer";
import AppPlayerBar from "@/pages/player/app-player-bar";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/music">
        <LHAppHeader />
        {renderRoutes(routes)}
        <LHAppFooter />
        <AppPlayerBar />
      </BrowserRouter>
    </Provider>
  );
};

export default memo(App);

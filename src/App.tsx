import React from "react";

import { renderRoutes } from 'react-router-config';
import { HashRouter } from "react-router-dom";

import routes from './router';

import LHAppHeader from "@/components/app_header";
import LHAppFooter from "@/components/app_footer";



function App() {
  return (
    <HashRouter>
      <LHAppHeader />
      { renderRoutes(routes)}
      <LHAppFooter />
    </HashRouter>
  );
}

export default App;

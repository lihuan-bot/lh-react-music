import { combineReducers } from "redux";

import { recommendReducer } from "@/pages/discover/c-pages/recommend/store";
const cReducer = combineReducers({
  recommend: recommendReducer,
});
export default cReducer;

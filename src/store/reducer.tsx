import { combineReducers } from "redux";

import { recommendReducer } from "@/pages/discover/c-pages/recommend/store";

const rootReducer = combineReducers({
  recommend: recommendReducer,
});
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;

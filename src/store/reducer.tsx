import { combineReducers } from "redux";

import { recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { playerReducer } from "@/pages/player/store";

const rootReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

import { combineReducers } from "redux";
import { launchesReducer } from "./launches/reducer";

export const rootReducer = combineReducers({ launches: launchesReducer });

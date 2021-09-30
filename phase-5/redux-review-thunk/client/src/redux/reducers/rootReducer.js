import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { parksReducer } from "./parksReducer";

export const rootReducer = combineReducers({ user: userReducer, parks: parksReducer })
import { combineReducers } from "redux";
import bucketsReducer from "./bucketsReducer";


export const allReducers = combineReducers({
    buckets: bucketsReducer
});
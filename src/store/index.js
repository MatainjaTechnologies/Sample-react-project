import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { allReducers } from "./reducers";

const allReducersEnhance = compose(
    applyMiddleware(thunk),
   // window.devToolsExtension && window.devToolsExtension()
);
export const store = createStore(
    allReducers,
    allReducersEnhance
);
import { FETCH_BUCKETS } from "../actions/types";
const initialState = [];

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_BUCKETS:
            return action.payload;
        default:
            return state;
    }
};
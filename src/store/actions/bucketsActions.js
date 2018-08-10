import { FETCH_BUCKETS } from "./types";
import axios from "axios";
export const fetchBuckets = () => dispatch =>{
    axios.get("http://roadmapservice.azurewebsites.net/api/buckets")
    .then(res=>{
            return dispatch({
                type: FETCH_BUCKETS,
                payload: res.data
            });
        } 
    );
};
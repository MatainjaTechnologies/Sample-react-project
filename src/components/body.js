import React from "react";
import Bucket from "./bucket";
import '../assets/css/body.css';
import shuffle from "shuffle-array";
const Body = (props)=>{ 
    const { buckets } = props; 
    console.log(buckets);
    const allBuckets = buckets.map((bucket, key)=>(
        <Bucket key={key} bucket={bucket} />
    ));
    return(
        <ul className="bucket-container">
           {allBuckets}
        </ul>
    );
};

export default Body;
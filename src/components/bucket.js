import React from "react";
import "../assets/css/bucket.css";
import Item from "./item";
const Bucket = (props) =>{
    const { bucket } = props;
    const allItems = bucket.Items.map((item, key)=>(
       <Item key={key} item={item}/>
    ));
    return(
        <li className="bucket">
            <div className="title">
              {bucket.Description}
            </div>
            <ul>
                {allItems}
            </ul>
        </li>
    );
};

export default Bucket;
import React from "react";
import "../assets/css/item.css";

const Item = (props) =>{
    const { item } = props;
    return(
        <li className="item-body">
            <section>
                <p>{item.ItemTitle}</p>
                <br />
                <p>{item.Description}</p>
            </section>
        </li>
    );
};

export default Item;
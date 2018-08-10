import React from "react";
import "../assets/sass/header-bar.sass";

const HeaderBar = (props) =>(
    <React.Fragment>
        <div className="header">
            {props.titleText}
        </div>
        <hr />
    </React.Fragment>
);

export default HeaderBar;
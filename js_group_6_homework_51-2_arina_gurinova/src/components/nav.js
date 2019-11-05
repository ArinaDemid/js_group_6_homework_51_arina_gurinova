import React from "react";

const Navig = props => {
    return (
        <div>
            <ul id="nav">
                <li ><a href="#">{props.li1}</a></li>
                <li><a href="#">{props.li2}</a></li>
                <li><a href="#">{props.li3}</a></li>
            </ul>
        </div>
    )
};
    
export default Navig;
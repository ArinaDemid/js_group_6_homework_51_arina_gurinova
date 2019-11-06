import React from "react";

const Logo = props => {
    return (
        <div className='logo'>
            <img src={props.logo} alt='logo photo'/>
        </div>
    )
};

export default Logo;
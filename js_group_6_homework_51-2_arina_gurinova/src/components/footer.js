import React from "react";

const Footer = props => {
    return (
        <div className='footer'>
            <img src={props.link1} alt='link'/>
            <img src={props.link2} alt='link'/>
            <img src={props.link3} alt='link'/>
            <img src={props.link4} alt='link'/>
            <img src={props.link5} alt='link'/>
        </div>
    )
};

export default Footer;
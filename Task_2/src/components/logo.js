import React, {Component} from "react";

class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <img src={this.props.logo} alt='logo photo'/>
            </div>
        )
    }
};

export default Logo;
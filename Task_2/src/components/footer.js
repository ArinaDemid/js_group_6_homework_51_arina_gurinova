import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img src={this.props.link1} alt='link'/>
                <img src={this.props.link2} alt='link'/>
                <img src={this.props.link3} alt='link'/>
                <img src={this.props.link4} alt='link'/>
                <img src={this.props.link5} alt='link'/>
            </div>
        )
    }
};

export default Footer;
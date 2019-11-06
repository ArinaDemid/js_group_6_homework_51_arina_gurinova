import React, {Component} from "react";

class Navig extends Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li ><a href="#">{this.props.li1}</a></li>
                    <li><a href="#">{this.props.li2}</a></li>
                    <li><a href="#">{this.props.li3}</a></li>
                </ul>
            </div>
        )
    }
};

export default Navig;
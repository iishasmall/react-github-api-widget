import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (

            <div style={this.props.style}>
                <h1>{this.props.header}</h1>
                <h2>{this.props.subhead}</h2>
            </div>
        )
    }
}

export default Header;
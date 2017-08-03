import React, { Component } from 'react';


class Header extends Component {

    render() {
        const headerStyle = {
            color: '#ffffff'
        }
        return (

            <div style={headerStyle}>
                <h1>{this.props.header}</h1>
                <h2>{this.props.subhead}</h2>
            </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';

class InputText extends Component {

    render() {
        return (

            <div>
                <input ref={input => this.input = input} type="text" placeholder={this.props.placeholder} onChange={this.props.onChange} />
                <input type="submit" onClick={this.props.onClick} />
            </div>
        )
    }
}

export default InputText;
import React, { Component } from 'react';


class SubmitBtn extends Component {

    render() {
        return (

            <div>
                <input type="submit" onClick={this.props.submitHandler} />
            </div>
        )
    }
}

export default SubmitBtn;
import React, { Component } from 'react';


class TextArea extends Component {

    render() {

        return (

            <div style={this.props.style}>
                <ul>
                    {this.props.list.map((list, i) => {
                        return (
                            <li key={i}>
                                <p><span>Name:</span> {list.name}</p>
                                <p><span>Description:</span> {list.description}</p>
                                <p><span>Fork:</span>{list.fork}</p>
                                <p><span>Git Url:</span> {list.git_url}</p>
                                <hr />
                            </li>)
                    })}

                </ul>

            </div>
        )
    }
}

export default TextArea;
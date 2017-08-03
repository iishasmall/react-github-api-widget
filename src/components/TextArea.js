import React, { Component } from 'react';


class TextArea extends Component {

    render() {

        const textAreaStyle = {
            justifyContent: 'center',
            width: 500,
            height: 300,
            background: 'red',
            overflow: 'hidden',
            overflowY: 'scroll'
        }

        return (

            <div style={textAreaStyle}>
                <ul>
                    {this.props.list.map((list, i) => {
                        return (
                            <li key={i}>
                                <p><span>Name:</span> {list.name}</p>
                                <p><span>Description:</span> {list.description}</p>
                                <p><span>Forks:</span>{list.forks}</p>
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
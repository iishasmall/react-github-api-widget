import React, { Component } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import Header from './Header';
import axios from 'axios';

class GitHubWidget extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            inputTextValue: 'java',
            placeholder: 'put your topic here',
            topic: 'java'
        }

    }

    componentDidMount() {
        this.getTopics();
    }

    getTopics = () => {

        const request = 'https://api.github.com/search/repositories?q=topic:' + this.state.inputTextValue;

        axios.get(request).then(response => {

            this.setState({ list: response.data.items });

        })

    }


    onClick = (event) => {
        event.preventDefault();
        this.setState({ topic: this.state.inputTextValue })
        this.getTopics();

    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({ inputTextValue: event.target.value });
    }


    render() {
        const widgetStyle = {
            display: 'flex',
            flexDirection: 'column',
            width: 500,
            height: 500,
            background: '#000000',
            borderRadius: '6px'
        }

        const inputContainerStyle = {
            display: 'inline-flex',
            justifyContent: 'center',
            paddingBottom: 30
        }

        const textAreaStyle = {
            justifyContent: 'center',
            width: 500,
            height: 300,
            background: 'red',
            overflow: 'hidden',
            overflowY: 'scroll'
        }

        const headerStyle = {
            color: '#ffffff'
        }

        const headerTxt = "Github Repo Widget";

        const subheadTxt = "Enter your repo topic here";

        return (

            <div style={widgetStyle}>
                <Header style={headerStyle} header={headerTxt} subhead={subheadTxt} />
                <div style={inputContainerStyle} >
                    <InputText text={this.state.text}
                        placeholder={this.state.placeholder}
                        onChange={this.onChange}
                        onClick={this.onClick} />
                </div>
                <TextArea style={textAreaStyle} list={this.state.list} />

            </div >
        )
    }
}

export default GitHubWidget;
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
            placeholder: 'put your topic here'

        }

    }

    componentDidMount() {
        this.getTopics();
    }

    getTopics = () => {

        const request = 'https://api.github.com/search/repositories?q=topic:';

        axios.get(request + this.state.inputTextValue).then(response => {

            this.setState({ list: response.data.items });

        })

    }


    onClick = (event) => {
        event.preventDefault();
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

        const headerTxt = "Github Repo Widget";
        const subheadTxt = "Enter your repo topic here";

        return (

            <div style={widgetStyle}>
                <Header header={headerTxt} subhead={subheadTxt} />
                <div style={inputContainerStyle} >
                    <InputText
                        placeholder={this.state.placeholder}
                        onChange={this.onChange}
                        onClick={this.onClick} />
                </div>
                <TextArea list={this.state.list} />

            </div >
        )
    }
}

export default GitHubWidget;
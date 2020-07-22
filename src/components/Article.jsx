import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };

    };
    componentDidMount() {
        const set = this;
        const handle = window.location.pathname.substr(9);

        console.log(handle)
        axios.get(`http://localhost:8000/post/article/${handle}`)
            .then(function (response) {
                const data = response.data;
                console.log(data);
                set.setState({ post: data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    render() {
        const { title, intro, content, cold, burn } = this.state.post;
        return (
            <div className="article">
                <div className="title">{title}</div>
                <div className="intro">{intro}</div>
                <div className="content">{content}</div>
                <div className="flexContent">
                    <div className="menu blue small">Cold: {cold}</div>
                    <div className="menu red small">Burn: {burn}</div>
                </div>
            </div>
        )
    }
}

export default Article;

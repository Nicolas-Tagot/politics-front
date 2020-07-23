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
componentDidMount(){
    this.catchData()
}

    catchData() {
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
    modify(value){
        const set = this;
        const { cold, burn } = this.state.post;
     
        const handle = window.location.pathname.substr(9);
         if(value === 'cold'){
            const neo = cold + 1
            console.log(neo)
            axios.put(`http://localhost:8000/post/modify/${handle}`, {
             cold : neo
              })
        }
        if(value === 'burn'){
            const neo = burn + 1
            axios.put(`http://localhost:8000/post/modify/${handle}`, {
             burn : neo
              })
        }
    }


    render() {
        const { title, intro, content, cold, burn } = this.state.post;
        return (
            <div className="article">
                <div className="title">{title}</div>
                <div className="intro">{intro}</div>
                <div className="content">{content}</div>
                <div className="flexContent">
                    <Link to="/" className="menu blue small" onClick={() => this.modify('cold')}>Cold: {cold}</Link>
                    <Link to='/' className="menu red small"  onClick={() => this.modify('burn')}>Burn: {burn}</Link>
                </div>
            </div>
        )
    }
}

export default Article;

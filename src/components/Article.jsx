import React from 'react';
import axios from 'axios';
import Commentaires from './Commentaires';
import AddCommentaires from './AddCommentaires';
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
            post: {},
            display: false,
            isModify: false,
            titleM: '',
            contentM : '',
            introM : ''
        };

    };
    componentDidMount() {
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
                const { title, intro, content } = data;
                set.setState({ titleM : title, introM : intro, contentM : content })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    modify(value) {

        const { cold, burn } = this.state.post;

        const handle = window.location.pathname.substr(9);
        if (value === 'cold') {
            const neo = cold + 1
            console.log(neo)
            axios.put(`http://localhost:8000/post/modify/${handle}`, {
                cold: neo
            })
        }
        if (value === 'burn') {
            const neo = burn + 1
            axios.put(`http://localhost:8000/post/modify/${handle}`, {
                burn: neo
            })
        }
    }
    displayer() {
        const display = this.state.display
        this.setState({ display: !display })
    }
    deleteIt() {
        const { key, name } = this.state;
        console.log(key)
        const handle = window.location.pathname.substr(9);
        axios.post(`http://localhost:8000/post/delete/${handle}`, {
            key: key,
            name: name
        }).then(function (response) {
            const data = response;
            console.log(data);
        })
    }
    modifyIt(){
        const { titleM, introM, contentM, key, name } = this.state;
        console.log(titleM, introM, contentM, key, name);
        const handle = window.location.pathname.substr(9);
        axios.put(`http://localhost:8000/post/modify/${handle}`, {
            key_post: key,
            user: name,
            title : titleM,
            intro: introM,
            content: contentM
        }).then(function (response) {
            const data = response;
            console.log(data);
        })
    }


    render() {
        const { title, intro, content, cold, burn } = this.state.post;
        return (
            <div className='start'>
                <div className="navBar filtre">
                    <div className="menu" onClick={() => this.displayer()}>x</div>
                    
                    {this.state.display ? (
                        <div className="flex">
                            <input className='form' placeholder='Pseudo' type="text" onChange={(event) => {
                                const input = event.target;
                                this.setState({ name: input.value })
                            }} />
                            <input className='form' placeholder='Key' input type="password" onChange={(event) => {
                                const input = event.target;
                                this.setState({ key: input.value })
                            }} />
                             <Link to="/"><div className="menu green" onClick={() => this.modifyIt()}>Mdfy</div></Link>
                            <Link to="/"><div className="menu red" onClick={() => this.deleteIt()}>Dlt</div></Link>
                            </div>) : null}
                   { this.state.display ?(<input type="text"  className='form' value={this.state.titleM} 
                   onChange={(event) => {
                         const input = event.target;
                         this.setState({ titleM: input.value })}} /> )
                   : <div className="title">{title}</div>} 
                </div>
                <div >
                  {this.state.display ? (
                      <div className="article">
                          <input type="text"  className='form'  value={this.state.introM} onChange={(event) => {
            const input = event.target;
            this.setState({ introM: input.value })
          }} />
                          <textarea className='form' id="ctn" name="ctnr"
            rows="15" cols="33" value={this.state.contentM} 
            onChange={(event) => {
                const input = event.target;
                this.setState({ contentM: input.value })}}/>
                          </div>
                  ) : ( <div className="article">
                    <div className="intro">{intro}</div>
                    <div className="content">{content}</div>
                    </div>)
                    }
                 { this.state.display ? null :(  <div className="flexContent">
                        <Link to="/" className="menu blue small" onClick={() => this.modify('cold')}>Cold: {cold}</Link>
                        <Link to='/' className="menu red small" onClick={() => this.modify('burn')}>Burn: {burn}</Link>
                    </div>)}
                </div>
               
                <Commentaires handle={window.location.pathname.substr(9)} />
                <AddCommentaires  handle={window.location.pathname.substr(9)} />
            </div>
        )
    }
}

export default Article;

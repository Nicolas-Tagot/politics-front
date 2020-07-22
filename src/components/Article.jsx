import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Article extends React.Component{
  constructor(props){
    super(props);
    this.state={
        post: {}
    };

  };
  componentDidMount(){
    const set = this;
    const  handle  = window.location.pathname.substr(9);
  
    console.log(handle)
    axios.get(`http://localhost:8000/post/article/${handle}`)
  .then(function (response) {
    // handle success
  
    const data = response.data;
    console.log(data);
    set.setState({ post: data})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }


  render(){
  const { title, intro, content } = this.state.post; 
    return(
      <div>
       {title}{intro}{content}
      </div>
    )
  }
}

export default Article;

import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
        allPost : [{user : "wait..."}]
    };
  };

  componentDidMount(){
    const set = this;
    axios.get('http://localhost:8000/post')
  .then(function (response) {
    // handle success
  
    const data = response.data;
    console.log(data);
    set.setState({ allPost: data})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }


  render(){
  
    return(
      <div>
                  {this.state.allPost.map( (item) => (
          <p>
            {item.user}
          </p>
        ))}
      </div>
    )
  }
}

export default NavBar;

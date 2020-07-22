import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Help extends React.Component{
  constructor(props){
    super(props);
    this.state={
      allPost : [{user : "wait..."}]
    };
  };


  render(){
   
    return(
      <div>
          <h1>You need help ?</h1>
          <Link to="/"><p>retour</p></Link>
      </div>
    )
  }
}

export default Help;

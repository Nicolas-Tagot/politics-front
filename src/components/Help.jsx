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
      <div className="article">
      <div className="title">About</div>
      <div className="intro">Wlcm. in strnge wrld!</div>
      <div className="content"><p>politiq: it's scl ntwrk for mk wtf !</p>
      <p>you can wrt everythng but everyone juge you. So are you Mk Brn or Cld ? fck Mk noise nd create reaction ! </p></div>
  
  </div>
    )
  }
}

export default Help;

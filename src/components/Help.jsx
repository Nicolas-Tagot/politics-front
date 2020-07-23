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
      <div className="article start">
      <div className="title">About</div>
      <div className="intro"><p>Wlcm on politiq.</p></div>
      <div className="content"><p>politiq: it's scl ntwrk for mk wtf !</p>
      <p>you can wrt everythng but everyone juge you. So are you Mk Brn or Cld ? fck Mk noise nd create reaction ! </p></div>
      <div className="content"><p>Srch in your mind or your heart for Mke a big Burn... </p></div>
  </div>
    )
  }
}

export default Help;

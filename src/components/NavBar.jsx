import React from 'react';
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

    };
  };


  render(){
  
    return(
      <div>
      <div className="navBar up">
         <Link className="menu" to="/">Wlcm</Link>
         <Link className="menu green" to="/create">Mk</Link>
         <Link className="menu" to="/help"><div>Help</div></Link>
         </div>
      </div>

    )
  }
}

export default NavBar;

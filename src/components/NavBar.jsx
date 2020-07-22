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
         <div>Menu</div>
         <div>Filtres</div>
         <Link to="/create">Créer</Link>
         <Link to="/help"><div>Help</div></Link>
      </div>
    )
  }
}

export default NavBar;

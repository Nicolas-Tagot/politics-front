import React from 'react';
import Help from './components/Help';
import NavBar from './components/NavBar';
import Center from './components/Center';
import Create from './components/Create';
import Article from './components/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     
    };
  };


  render(){
    console.log(this.state.allPost)
    return(
      <div>
        <Router>
        <NavBar /> 
         <Switch>
            <Route path="/help">
              <Help />
            </Route>
            <Route exact path="/" >
              <Center />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/article/:id">
              <Article />
            </Route>
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;

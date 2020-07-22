import React from 'react';
import axios from 'axios';

class App extends React.Component{
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
    console.log(this.state.allPost)
    return(
      <div>
        <h1>Bonjour</h1>
        {this.state.allPost.map( (item) => (
          <p>
            {item.user}
          </p>
        ))}
      </div>
    )
  }
}

export default App;

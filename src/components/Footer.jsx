import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      allPost : [{user : "wait..."}]
    };
  };


  render(){
   
    return(
      <div className="footer">
   Thx.
  </div>
    )
  }
}

export default Footer;

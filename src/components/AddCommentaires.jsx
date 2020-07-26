import React from 'react';
import axios from 'axios';

class AddCommentaires extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    createCom() {
        console.log("click")
        const id = this.props.handle;
        const { name_commentaire,  key_commentaire, commentaire } = this.state;
        axios.post('http://localhost:8000/comm/add', {
        name_commentaire: name_commentaire,
        key_commentaire: key_commentaire,
        commentaire:  commentaire,
        id_article: id
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    render(){
    return(
        <div className="">
            <div>
        <input className="form" type="text" placeholder="Name" onChange={(event) => {
            const input = event.target;
            this.setState({ name_commentaire: input.value })
          }}/>
        <input className="form" type="text"  placeholder="Key" onChange={(event) => {
            const input = event.target;
            this.setState({ key_commentaire: input.value })
          }}/>
        </div>
        <textarea className="form"  placeholder="Commentaire" onChange={(event) => {
            const input = event.target;
            this.setState({ commentaire: input.value })
          }}/>
        <div className="menu green" onClick={() => this.createCom()} >Add</div>
        </div>
    )}
};

export default AddCommentaires;


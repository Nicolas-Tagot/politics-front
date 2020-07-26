import React from 'react';
import axios from 'axios';

class Commentaires extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCom :[],
        };
    };

    componentDidMount(){
        const set = this;
        axios.get(`http://localhost:8000/comm/${this.props.handle}`)
        .then(function (response) {
            // handle success

            const data = response.data;
            console.log(data)
            set.setState({ allCom: data })
        })
    }

    render(){
    return(
        <div className="article">
            <p className="title">Commentaires: </p>
            {this.state.allCom.map((com) => (
                <div className="com">
                  <p className="content">{com.commentaire}</p>
                </div>
            ))}
        </div>
    )}
};

export default Commentaires;


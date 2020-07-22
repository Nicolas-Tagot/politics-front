import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPost: [{ user: "wait..." }]
        };
    };

    componentDidMount() {
        const set = this;
        axios.get('http://localhost:8000/post/all')
            .then(function (response) {
                // handle success

                const data = response.data;
                console.log(data)
                set.setState({ allPost: data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    render() {

        return (
            <div className='full'>
                <h3>Wlcm.</h3>
                {this.state.allPost.map((item) => (

                    <div className='box'>
                        <Link to={`/article/${item.id}`}>
                            <h5 className="txt">{item.title}</h5>
                            <p className="txt">{item.intro}</p>
                        </Link>
                        <div className="flexContent">
                            <div className="menu blue small">Cold: {item.cold}</div>
                            <div className="menu red small">Burn: {item.burn}</div>
                        </div>
                    </div>

                ))}
            </div>
        )
    }
}

export default NavBar;

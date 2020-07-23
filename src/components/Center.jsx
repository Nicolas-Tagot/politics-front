import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPost: [{ user: "wait..." }],
            depends_data: []
        };
        this.searchBy = this.searchBy.bind(this);
    };

    componentDidMount() {
        this.searchAll()
        this.depends()
    }

    depends() {
        const set = this;
        axios.get('http://localhost:8000/depends')
            .then(function (response) {
                // handle success

                const depend = response.data;
                console.log(depend);

                set.setState({ depends_data: depend })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    searchAll() {
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
    searchMore(who) {
        const set = this;
        axios.get(`http://localhost:8000/post/who/${who}`)
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
    searchBy(event) {
        
        const who = event.target.value;
        console.log(who)
        const set = this;
        axios.get(`http://localhost:8000/post/by/${who}`)
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
            <div className='start'>
                <div className="navBar filtre down">
                    <div className="menu" onClick={() => this.searchAll()}>None</div>
                    <div className="menu red" onClick={() => this.searchMore('burn')}>Burn</div>
                    <div className="menu blue" onClick={() => this.searchMore('cold')}>Cold</div>
                    <select className='form' onChange={this.searchBy} >
                        <option className='menu' >fltr By</option>
                        {this.state.depends_data.map((item) => (
                            <option className="menu" value={item.id} >{item.depend_name}</option>
                        ))}
                    </select>
                </div>
                <h3 className="up">Wlcm.</h3>
                <div className='full'>
                    
                    {this.state.allPost.map((item) => (

                        <div className='box'>
                            <Link to={`/article/${item.id}`}>
                                <h5 className="intro">{item.title}</h5>
                                <p className="content">{item.intro}</p>
                            </Link>
                            <div className="flexContent">
                                <div className="menu red small">{item.burn} Burn</div>
                                <div className="menu blue small">{item.cold} Cold</div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export default Center;

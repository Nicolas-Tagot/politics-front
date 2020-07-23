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

      user: '',
      key_post: '',
      title: 'title',
      intro: 'introduction',
      content: 'contenue',
      depend: 0,
      burn: 0,
      cold: 0,
      depends_data: []

    };
    this.handleChange = this.handleChange.bind(this);
  };
  componentDidMount() {
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



  createPost() {
    const { user, key_post, title, intro, content, depend } = this.state;
    axios.post('http://localhost:8000/post/add', {
      user: user,
      key_post: key_post,
      title: title,
      intro: intro,
      content: content,
      depend: depend,
      burn: 0,
      cold: 0,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChange(event) {
    this.setState({ depend: event.target.value });
  }


  render() {

    return (
      <div className="containForm">
        <div className="champForm centre">
           <input className='form' type="text" onChange={(event) => {
            const input = event.target;
            this.setState({ user: input.value })
          }} placeholder='Pseudo' />
        </div>
        <div className="champForm">
        <input className='form' type="text" onChange={(event) => {
            const input = event.target;
            this.setState({ key_post: input.value })
          }} placeholder='Key' />
        </div>
        <div className="champForm">
   
        <input className='form' type="text" onChange={(event) => {
            const input = event.target;
            this.setState({ title: input.value })
          }}  placeholder='Title'  />
        </div>
        <div className="champForm">

        <input className='form' type="text" onChange={(event) => {
            const input = event.target;
            this.setState({ intro: input.value })
          }} placeholder='Introduction'   />
        </div>
        <div className="champForm">

          <textarea className='form' id="ctn" name="ctnr"
            rows="5" cols="33" onChange={(event) => {
              const input = event.target;;
              this.setState({ content: input.value })
            }} placeholder='Content'   />
        </div>
        <div className="champForm">
             <select  className="form" value={this.state.value} onChange={this.handleChange}>
              <option className='menu'>Slct</option>
              {this.state.depends_data.map((item) => (
                <option className='menu' value={item.id}>{item.depend_name}</option>
              ))}
            </select>
          </div>
       
        <Link to="/"> <div  className='menu' onClick={() => this.createPost()} >Snd</div></Link>
        
      </div>
    )
  }
}

export default NavBar;

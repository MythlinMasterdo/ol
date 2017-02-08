import React, { Component } from 'react';
import BusinessProfile from './businessProfile.js';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    }
  }

  componentWillMount() {
    var self = this;
    axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(function(response) {
      self.setState({businesses: response.data.businesses});
    })
    .catch(function(err) {
      console.log('err! ', err);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className='col-md-9'>
          {this.state.businesses.map((business) => {
            return (<BusinessProfile key={business.id} business={business}/>)
          })}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

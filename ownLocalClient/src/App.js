import React, { Component } from 'react';
import BusinessProfile from './businessProfile.js';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      currentPage: 1
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

  changePage(newPage) {
    var config = { headers: {'page': newPage}}
    console.log('this1 ', this.state);
    var self = this;
    if(newPage > this.state.currentPage) {
      axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses', config)
      .then(function(response) {
        console.log('this2 ', this.state);
        self.setState({businesses: response.data.businesses});
      })
      .catch(function(err) {
        console.log('this2 ', this.state);
        console.log('err! ', err);
      })
    } else {
      axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses', config)
      .then(function(response) {
        self.setState({businesses: response.data.businesses});
      })
      .catch(function(err) {
        console.log('err! ', err);
      })
    }
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
        <div>
          <button onClick={() => this.changePage(this.state.currentPage - 1)}>Previous Page</button>
          <button onClick={() => this.changePage(this.state.currentPage + 1)}>Next Page</button>
        </div>
      </div>
    );
  }
}

export default App;

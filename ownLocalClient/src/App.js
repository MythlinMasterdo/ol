import React, { Component } from 'react';
import BusinessProfile from './BusinessProfile.js';
import axios from 'axios';
import logo from '../images/ownLocalLogo.png';
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
    var self = this;
    var newUrl = '?page=' + newPage;
    var currentPage = this.state.currentPage;
    if(newPage > self.state.currentPage) {
      axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses' + newUrl)
      .then(function(response) {
        self.setState({businesses: response.data.businesses, currentPage: currentPage + 1});
      })
      .catch(function(err) {
        console.log('err! ', err);
      })
    } else if(newPage > 0) {
      axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses'+ newUrl)
      .then(function(response) {
        self.setState({businesses: response.data.businesses, currentPage: currentPage - 1});
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
          <h2>List of Local Businesses!(kind of)</h2>
        </div>
        <div className='col-md-9'>
          {this.state.businesses.map((business) => {
            return (<BusinessProfile key={business.id} business={business}/>)
          })}
          {this.props.children}
        </div>
        <div>
          <button onClick={() => {this.changePage(this.state.currentPage - 1)}}>Previous Page</button>
          <button onClick={() => {this.changePage(this.state.currentPage + 1)}}>Next Page</button>
        </div>
      </div>
    );
  }
}

export default App;

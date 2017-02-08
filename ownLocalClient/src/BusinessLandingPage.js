import React, { Component } from 'react';

class BusinessLandingPage extends Component {
  render() {
    return(
      <p onClick={console.log(window.businessInfo)}>Hello! World</p>
    )
  }
}

export default BusinessLandingPage;

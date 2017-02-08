import React, { Component } from 'react';
require('./businessProfileCss.css');

class BusinessLandingPage extends Component {
  render() {
    return(
      <div>
        <h1>{window.businessInfo.name}</h1>
        <p><img role="presentation" className='profilePhone profileIcon'/> {window.businessInfo.phone}</p>
        <p>Address: <img role="presentation" className='profileLocation profileIcon'/>{window.businessInfo.address} {window.businessInfo.city}, {window.businessInfo.state} {window.businessInfo.country} {window.businessInfo.zip}</p>
        <p>Website: <a href={window.businessInfo.website}>{window.businessInfo.website}</a></p>
        <p>{console.log(window.businessInfo)}</p>
      </div>
    )
  }
}

export default BusinessLandingPage;

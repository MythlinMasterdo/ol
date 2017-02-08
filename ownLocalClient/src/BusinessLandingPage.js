import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../images/ownLocalLogoDark.png';
require('./BusinessLandingPage.css');

class BusinessLandingPage extends Component {
  render() {
    let businessInfo = null;
    if(window.businessInfo.address2 === null || window.businessInfo.address2 === undefined) {
      businessInfo = <div className="businessInfo">
        <h1>{window.businessInfo.name}</h1>
        <p><img role="presentation" className='profilePhone profileIcon'/> {window.businessInfo.phone}</p>
        <p>Address: <img role="presentation" className='profileLocation profileIcon'/> {window.businessInfo.address} {window.businessInfo.city}, {window.businessInfo.state} {window.businessInfo.country} {window.businessInfo.zip}</p>
        <p>Website: <a href={window.businessInfo.website}>{window.businessInfo.website}</a></p>
      </div>
    } else {
      businessInfo = <div className="businessInfo">
        <h1>{window.businessInfo.name}</h1>
        <p><img role="presentation" className='profilePhone profileIcon'/> {window.businessInfo.phone}</p>
        <p>Address: <img role="presentation" className='profileLocation profileIcon'/> {window.businessInfo.address} {window.businessInfo.address2} {window.businessInfo.city}, {window.businessInfo.state} {window.businessInfo.country} {window.businessInfo.zip}</p>
        <p>Website: <a href={window.businessInfo.website}>{window.businessInfo.website}</a></p>
      </div>
    }
    return(
      <div className="businessPage">
        <img src={logo} className="App-logo" alt="logo" />
        {businessInfo}
        <Link to="/">
        <button>Home</button>
        </Link>
      </div>
    )
  }
}

export default BusinessLandingPage;

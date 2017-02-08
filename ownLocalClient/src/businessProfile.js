import React, { Component } from 'react';
require('./BusinessProfileCss.css');
import { Link } from 'react-router';

class BusinessProfile extends Component {

  clickHandler() {
    window.businessInfo = this.props.business;
  }
  render() {
    return (
      <div className='businessProfile' onClick={this.clickHandler.bind(this)}>
        <Link to="business">
        <div className='businessCard'>
          <div className='info col-md-9'>
            <h3 className='businessCardName'> {this.props.business.name} </h3>
            <p><img role="presentation" className='profileLocation profileIcon'/> {this.props.business.city}, {this.props.business.state}</p>
            <p><img role="presentation" className='profilePhone profileIcon'/> {this.props.business.phone}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  }
}

export default BusinessProfile;

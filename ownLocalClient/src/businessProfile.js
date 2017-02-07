import React, { Component } from 'react';
require('./ProfileCardCss.css');

class BusinessProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='businessProfile'>
        <div className='businessCard' onClick={() => this.props.onTitleClick(this.props.facility.id)}>
          <div className='info col-md-9'>
            <h3 className='businessCardName' > {this.props.business.name} </h3>
            <p><img role="presentation" className='profileLocation profileIcon'/> {this.props.business.city}, {this.props.business.state}</p>
            <p><img role="presentation" className='profilePhone profileIcon'/> {this.props.business.phone}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessProfile;

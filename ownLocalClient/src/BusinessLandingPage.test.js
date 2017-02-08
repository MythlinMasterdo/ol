import React from 'react';
import { shallow } from 'enzyme';
import BusinessLandingPage from './BusinessLandingPage';

describe('<BusinessLandingPage />', () => {
  it('renders children passed into it', () => {
    const wrapper = shallow(
      <BusinessLandingPage>
        <div className="unique" />
      </BusinessLandingPage>
    );
    // expect(wrapper.contains(welcome)).to.equal(true);
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });
});

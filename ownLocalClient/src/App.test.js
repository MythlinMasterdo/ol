import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders children passed in', () => {
    const wrapper = shallow(
      <App>
        <div className="unique" />
      </App>
    );
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('renders title', () => {
   const wrapper = shallow(<App />);
   expect(wrapper.contains(<h2>List of Local Businesses!(kind of)</h2>)).toEqual(true);
 });
});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App count={12} />);
    expect(wrapper).toMatchSnapshot();
  });
});

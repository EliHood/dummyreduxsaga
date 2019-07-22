import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

describe('Should render <Home/> Component', () => {

  it('should match <Home/> snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should find h3', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h3').text()).toBe('Loading...');
  });
});

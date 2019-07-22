import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppBar from '@material-ui/core/AppBar';
import Navbar from './Navbar';

describe('Should render <Navbar/> ', () => {
  it('should render navbar component', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });

  it('should snapshot navbar', () => {
    const wrapper = shallow(<Navbar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

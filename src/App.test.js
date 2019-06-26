import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount} from 'enzyme';
import App from './App';
import Navbar from './Navbar/Navbar';
import toJson from 'enzyme-to-json';

describe('Should render App component', () => {
  it('should render App component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('div')).toHaveLength(1);
  })

  it('should contain Navbar', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find(Navbar)).toHaveLength(1)

  })


  it('should snapshot Navbar', () => {
      const wrapper = shallow(<App/>);
      expect(toJson(wrapper)).toMatchSnapshot();
  })


})

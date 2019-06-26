import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount} from 'enzyme';
import Home from './Home';
import toJson from 'enzyme-to-json';
describe('Should render <Home/> Component', () => {
    it('should render <Home/> Component', () => {
        const wrapper = shallow(<Home/>)
        expect(wrapper.find('div')).toHaveLength(1);
    })

    it('should match <Home/> snapshot', () => {
        const wrapper = shallow(<Home/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })


    it('should find h1', () => {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('h2').text()).toBe('Home')
    })

})
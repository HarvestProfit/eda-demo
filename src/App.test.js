import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render a <BrowserRouter />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BrowserRouter).length).toEqual(1);
  });
});

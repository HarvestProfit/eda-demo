import React from 'react';
import { HashRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render a <HashRouter />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(HashRouter).length).toEqual(1);
  });
});

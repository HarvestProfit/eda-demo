import React from 'react';
import { HashRouter as Router } from "react-router-dom";import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render a <Router />', () => {
    const wrapper = shallow((<App />));
    expect(wrapper.find(Router).length).toEqual(1);
  });
});

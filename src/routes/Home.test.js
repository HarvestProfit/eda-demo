import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Form />', () => {
  it('should render a <Container />', () =>  {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('img').length).toEqual(1);
  });
});

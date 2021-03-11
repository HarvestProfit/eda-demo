import React from 'react';
import { Container } from 'reactstrap';
import { shallow } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  it('should render a <Container />', () => {
    const wrapper = shallow(
      <Form />
    );
    expect(wrapper.find(Container).length).toBeGreaterThan(0);
  });

  it('should have some state by default', () => {
    const wrapper = shallow(
      <Form />
    );
    expect(wrapper.state().users.length).toEqual(2);
  });

  it('should be able to add state', () => {
    const wrapper = shallow(
      <Form />
    );

    const state = wrapper.state();

    wrapper.instance().addUser();

    const newState = wrapper.state();

    expect(wrapper.state().users.length).toEqual(3);
    expect(state).not.toEqual(newState);
  });
});

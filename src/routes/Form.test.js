import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

import React from 'react';
import { Container } from 'reactstrap';
import { shallow, mount } from 'enzyme';
import Form from './Form';
import ListItem from '../components/form/list/ListItem';

const mock = new mockAdapter(axios);

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
    mock.onGet(/github/).reply(200, {
      avatar_url: 'https://avatars3.githubusercontent.com/u/12515498?v=4',
    });

    const wrapper = mount(
      <Form />
    );

    const state = wrapper.state();

    wrapper.instance().addUser();

    const newState = wrapper.state();

    expect(wrapper.state().users.length).toEqual(3);
    expect(state).not.toEqual(newState);
    wrapper.update();
    expect(wrapper.find(ListItem).length).toEqual(3);
  });
});

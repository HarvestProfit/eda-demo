import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

import React from 'react';
import { Media } from 'reactstrap';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

const mock = new mockAdapter(axios);

describe('<List />', () => {
  it('should render a <ListItem />', () => {
    mock.onGet(/github/).reply(200, {
      avatar_url: 'https://avatars3.githubusercontent.com/u/12515498?v=4',
    });

    const wrapper = shallow(
      <ListItem
        user={{ name: 'Jaryd', github: 'jarydkrish' }}
      />
    );
    expect(wrapper.find(Media).length).toBeGreaterThan(0);
  });
});

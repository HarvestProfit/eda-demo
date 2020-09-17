import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import ListItem from './list/ListItem';

describe('<List />', () => {
  it('should render a <ListItem />', () => {
    const wrapper = shallow(
      <List
        users={[{ name: 'Jaryd', github: 'jarydkrish' }]}
      />
    );
    expect(wrapper.find(ListItem).length).toBeGreaterThan(0);
  });
});

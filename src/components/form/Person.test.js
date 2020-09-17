import React from 'react';
import { Col } from 'reactstrap';
import { shallow } from 'enzyme';
import Person from './Person';

describe('<Person />', () => {
  it('should render a <Col />', () => {
    const wrapper = shallow(
      <Person
        github=""
        name=""
        changeGithub={() => {}}
        changeName={() => {}}
        addUser={() => {}}
      />
    );
    expect(wrapper.find(Col).length).toBeGreaterThan(0);
  });
});

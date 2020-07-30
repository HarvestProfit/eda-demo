import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  it('should handle inputs', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Input value="" onChange={onChange} />);
    wrapper.instance().onChange({ target: { value: 'something' }});
    expect(onChange.mock.calls[0][0]).toEqual('something');
  });
});

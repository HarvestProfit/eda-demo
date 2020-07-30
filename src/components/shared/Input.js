import PropTypes from 'prop-types';
import React, { Component } from 'react';


import { Input as ReactstrapInput } from 'reactstrap';

class Input extends Component {
  onChange = (event) => {
    const { value } = event.target;
    this.props.onChange(value);
  }

  render() {
    const { placeholder, type, value, ...props } = this.props;
    return (
      <ReactstrapInput value={value} onChange={this.onChange} {...props} />
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input;

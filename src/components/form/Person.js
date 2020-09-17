import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, FormGroup, Label } from 'reactstrap';

import Input from '../shared/Input';

const Person = (props) => (
  <Col xs="12" md="5">
    <h1 className="mb-4">Add somebody</h1>
    <div>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Your Name" value={props.name} onChange={props.changeName} />
      </FormGroup>
      <FormGroup>
        <Label for="job">Github Profile</Label>
        <Input type="text" name="github" id="github" placeholder="Your Github" value={props.github} onChange={props.changeGithub} />
      </FormGroup>
      <Button block type="submit" color="primary" className="mt-4" onClick={props.addUser}>Submit</Button>
    </div>
  </Col>
);

Person.propTypes = {
  github: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeGithub: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
}

export default Person;

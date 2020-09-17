import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Form, FormGroup, Label } from 'reactstrap';

import Input from '../shared/Input';

const Person = (props) => (
  <Col xs="12" md="5">
    <h1 className="mb-4">Our Awesome Form</h1>
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Your Name" value={props.name} onChange={props.changeName} />
      </FormGroup>
      <FormGroup>
        <Label for="job">Job</Label>
        <Input type="text" name="job" id="job" placeholder="Your Job" value={props.job} onChange={props.changeJob} />
      </FormGroup>
      <Button block type="submit" color="primary" className="mt-4">Submit</Button>
    </Form>
  </Col>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  changeJob: PropTypes.func.isRequired,
}

export default Person;

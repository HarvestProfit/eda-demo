import React, { Component } from 'react';
import { Col, Container, Form as ReactstrapForm, FormGroup, Label, Row } from 'reactstrap';

import Input from './shared/Input';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: ''
    }
  }

  changeName = (name) => {
    this.setState({ name });
  }

  changeJob = (job) => {
    this.setState({ job });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <h1 className="mb-5">Our Awesome Calculator</h1>
            <ReactstrapForm>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={this.changeName} />
              </FormGroup>
              <FormGroup>
                <Label for="job">Job</Label>
                <Input type="text" name="job" id="job" placeholder="Your Job" value={this.state.job} onChange={this.changeJob} />
              </FormGroup>
            </ReactstrapForm>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Calculator;

import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Person from './form/Person';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: ''
    }
  }

  changeName = (event) => {
    const name = event.target.value;
    this.setState({ name });
  }

  changeJob = (event) => {
    const job = event.target.value;
    this.setState({ job });
  }

  render() {
    const { name, job } = this.state;
    return (
      <Container>
        <Row>
          <Person
            name={name}
            job={job}
            changeName={this.changeName}
            changeJob={this.changeJob}
          />
        </Row>
      </Container>
    );
  }

}

export default Form;

import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Person from './form/Person';
import List from './form/List';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      github: '',
      users: [
        { name: 'Jaryd', github: 'jarydkrish' },
        { name: 'Nick', github: 'nhorob67' },
      ]
    }
  }

  changeName = (event) => {
    const name = event.target.value;
    this.setState({ name });
  }

  changeGithub = (event) => {
    const github = event.target.value;
    this.setState({ github });
  }

  addUser = () => {
    const users = [
      ...this.state.users,
      { github: this.state.github, name: this.state.name },
    ];
    this.setState({ users, name: '', github: '' });
  }

  deleteUser = (index) => {
    const users = [
      ...this.state.users.slice(0, index),
      ...this.state.users.slice(index + 1),
    ];
    this.setState({ users });
  }

  render() {
    const { github, name, users } = this.state;
    return (
      <Container>
        <Row>
          <Person
            name={name}
            github={github}
            changeName={this.changeName}
            changeGithub={this.changeGithub}
            addUser={this.addUser}
          />
          <List
            users={users}
            deleteUser={this.deleteUser}
          />
        </Row>
      </Container>
    );
  }

}

export default Form;

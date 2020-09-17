import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Media } from 'reactstrap';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: undefined,
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.user.github}`).then((response) => {
      const user = response.data;
      this.setState({ image: user.avatar_url });
    }).catch((error) => {
      console.error(error);
    })
  }

  render() {
    const { user } = this.props;
    const { github, name } = user;
    return (
      <Media className="d-flex justify-content-start align-items-center my-1" tag="li">
        <Media left>
          <Media src={this.state.image || 'https://via.placeholder.com/150x150'} alt={name} height={75} width={75} />
        </Media>
        <Media body className="pl-3">
          <Media heading>
            @{github}
          </Media>
          {name}
        </Media>
        <Media right>
          hello
        </Media>
      </Media>
    );
  }
}

ListItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
}

export default ListItem;

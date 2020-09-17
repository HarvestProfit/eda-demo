import PropTypes from 'prop-types';
import React from 'react';
import { Col, Media } from 'reactstrap';

import ListItem from './list/ListItem';

const List = (props) => (
  <Col xs="12" md="5">
    <Media list>
      {props.users.map((user, index) => (
        <ListItem key={`${user.name}-${index}`} user={user} index={index} />
      ))}
    </Media>
  </Col>
);

List.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default List;

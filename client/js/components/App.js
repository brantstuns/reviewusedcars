import React from 'react';
import PropTypes from 'prop-types';

export default function App(props) {
  return (
      props.children
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

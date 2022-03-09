import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
class first_jsx extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest (or not)</li>
          <li>Run a marathon (or not, too lazy lmao)</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
    );
  }
}

first_jsx.propTypes = propTypes;
first_jsx.defaultProps = defaultProps;
// #endregion

export default first_jsx;

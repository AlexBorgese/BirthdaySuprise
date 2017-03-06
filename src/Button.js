import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="button" {...this.props}>
        Click to see the suprise!
      </button>
    );
  }
}

export default Button;

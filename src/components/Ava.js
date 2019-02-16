import React, { Component } from 'react';
import '../css/Ava.css';

export default class Ava extends Component {
  render() {
    const { className="", top="", left="" } = this.props;
    return (
      <div className={`ava-wrapper ${className}`} style={{ top, left }}>
        <div className="ava-circle">
          N
        </div>
        <div className="ava-one">
          <div className="ava-two"></div>
        </div>
      </div>
    );
  }
}
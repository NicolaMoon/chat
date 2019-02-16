import React, { Component } from 'react';
import IdCard from '../components/IdCard';
import '../css/Me.css';

export default class Me extends Component {
  render() {
    return (
      <div className="me-wrapper">
        <IdCard />
      </div>
    );
  }
}
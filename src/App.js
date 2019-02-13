import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import './css/global.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;

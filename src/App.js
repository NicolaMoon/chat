import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import SlideBar from './layout/SlideBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SlideBar>
          <Router />
        </SlideBar>
      </BrowserRouter>
    );
  }
}

export default App;

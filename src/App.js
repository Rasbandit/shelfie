import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'


class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory:[],
      currentSelection:{}
    }
  }
  componentDidMount =() =>{
    axios.get('/api/inventory').then(res=> {
      this.setState({
        inventory: res.data
      })
      // console.log("State @ App after GET",this.state)
    })
  }
  handleEdit = (currSelect) =>{
    // console.log("Selection being passed @ App", currSelect)
    this.setState({
      currentSelection:currSelect
    })
  }

  render() {
    // console.log("State @ app",this.state)
    let {inventory} = this.state
    return (
      <div className="App">
        <Header/>
        <div>
          <Form refresh={this.componentDidMount} currentSelection={this.state.currentSelection}/>
          <Dashboard inventory={inventory} refresh={this.componentDidMount} handleEdit={this.handleEdit}/>
        </div>
      </div>
    );
  }
}

export default App;

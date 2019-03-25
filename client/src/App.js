import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  renderCompanyList() {
    return (
      <span>None Yet</span>
    ); 
  }
  render() {
    return (
      <div className='App'>
        <Nav />
        <main className='App-content'>
          {this.renderCompanyList()}
        </main>
      </div>
    )
  }
}

export default App;
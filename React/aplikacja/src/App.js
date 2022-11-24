import React, { Component } from 'react';
import './App.css';
import OX  from './ox.js';

class App extends Component{
  render() {
    return (
      <table className={this.props.klasa}>
        <tr><OX></OX><OX></OX><OX></OX></tr>
        <tr><OX></OX><OX></OX><OX></OX></tr>
        <tr><OX></OX><OX></OX><OX></OX></tr>
      </table>
    );
  }
}

export default App;

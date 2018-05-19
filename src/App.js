import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Router,Route} from 'react-router';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

      fruits:['mango','orange','apple']
    };
  }
  render() {
    return (
      <div className="App">

<Header/>
<Home name="Roger"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.fruits.map(item=>{return(<p>{item}</p>)})}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App
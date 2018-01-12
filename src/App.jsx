import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.getGreeting = this.getGreeting.bind(this)
    this.state = {user: "bilal"};
  }
  getGreeting(user){
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  render() {
    
      return (
          {if(this.state.user){
            <h1>{this.state.user}</h1>
          }
          <h1>else</h1>
        }
        )
    
    
  }
}

export default App;

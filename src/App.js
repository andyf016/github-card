import React, { Component } from 'react';

import './App.css';

class App extends Component {

  handleToggle(event){
    console.log("Click")
  
  }

  render(){
      return <button onClick = {this.handleToggle}>Toggle User</button>
  }

}

export default App;

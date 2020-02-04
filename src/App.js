import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }
  handleToggle = (event) => {
    console.log("Click")
    fetch("https://api.github.com/users/davegregg")
    .then(response => response.json())
    .then(responseBody => {
      console.log(responseBody)
      this.setState({user: responseBody})

    })

      
  }

  render(){
      return <button onClick = {this.handleToggle}>Toggle User</button>
  }

}

export default App;

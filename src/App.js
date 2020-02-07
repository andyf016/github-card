import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = {
    user: {},
    active: false
  }
  handleToggle = (event) => {
    if (this.state.active === false){
      fetch("https://api.github.com/users/davegregg")
      .then(response => response.json())
      .then(responseBody => {
       console.log(responseBody)
        this.setState({user: responseBody, active: true})

    })
    } else {
      this.setState({active: false})
    }
  
    

      
  }

  render(){
      return (
      <>
      <Button onClick = {this.handleToggle}>Toggle User</Button>
      {this.state.active && (
      <>
      <img src = {this.state.user.avatar_url} alt="user profile"/>
        <h1>{this.state.user.name}</h1>
        <p>Bio: {this.state.user.bio}</p>
        <p>Followers: {this.state.user.followers}</p>
        </>
        )}
      
      </>
      )
    }

}

export default App;

import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Chat from './Chat/Chat.js';

class App extends Component {
constructor(props){
  super(props);
  
  this.handleSend = this.handleSend.bind(this);
  this.state = { 
    chat : []
};
}

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        ouin ouin je veux pas epic game 
      <Chat onSend = {this.handleSend}  display = {this.state.chat}/>
      <Chat onSend = {this.handleSend}  display = {this.state.chat} />
    </div>
  );
  }
handleSend(name, text){
  
  this.setState({
    chat : this.state.chat.concat(`${name}: ${text}`)
  });

}
}



export default App;

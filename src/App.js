import React, { Component } from 'react';
import './App.css';
import Title from 'Title';


class App extends React.Component {
  
  render() {
    return (
      <div className="app">
      <Title />
      <MessageList messages={this.state.messages} />
      <SendMessageForm sendMessage={this.sendMessage} />
     </div>
    )
  }
}

export default App;

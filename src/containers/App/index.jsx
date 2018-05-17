import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        
        {this.props.children}
        
      </div>
    );
  }
  componentDidMount() {

  }

}

export default App;
